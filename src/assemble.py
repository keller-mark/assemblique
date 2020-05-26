import sys
import os
from os.path import join
import lzma
import json
from pprint import pprint

import boto3
import botocore
import frontmatter as fm
from markdownify import markdownify as md

from s3_utils import s3, b3, S3_BASE_URL, s3_file_exists

STATIC_DIR = join('..', 'site', 'content')
INSTA_DIR = join('instagram', 'assemblique')
ADMIN_USERNAMES = ['assemblique', 'mark_keller_']

HASHTAG_TO_POST_TYPE = {
    '#assembliquewebsite_portfolio': 'portfolio',
    '#assembliquewebsite_press': 'press',
    '#assembliquewebsite_events': 'events',
    '#assembliquewebsite_commissions': 'commissions',
    '#assembliquewebsite_available': 'forsale'
}


def s3_upload(img_files, year, month):
    result = []
    for img_file in img_files:
        file_key = f'{year}/{month}/{img_file}'
        if s3_file_exists(b3, file_key):
            result += [ file_key ]
        else:
            data = open(join(INSTA_DIR, img_file), 'rb')
            obj = b3.put_object(Key=file_key, Body=data)
            obj.Acl().put(ACL='public-read')
            result += [ file_key ]
    
    result = [ f'{S3_BASE_URL}/{key}' for key in result ]
    return result


def img_urls_to_html(img_urls):
    result = ""
    for img_url in img_urls:
        result += f'<img src="{img_url}" />\n'
    return result


def post_to_markdown(json_filepath, shortcode, post_types):
    post_files = [ f for f in os.listdir(INSTA_DIR) if f.startswith(json_filepath[:-8]) ]
    txt_file = None
    img_files = []
    for post_file in post_files:
        if post_file.endswith(".txt"):
            txt_file = post_file
        if post_file.endswith(".jpg"):
            img_files += [ post_file ]
    
    if txt_file is not None and len(img_files) > 0:

        with open(join(INSTA_DIR, txt_file)) as f:
            txt_content = f.read()

        date = json_filepath[:10]
        year = date[0:4]
        month = date[5:7]
        slug = f"ig-{shortcode}"

        aws_img_urls = s3_upload(img_files, year, month)
        aws_img_html = img_urls_to_html(aws_img_urls)
        
        md_content = md(f'<p>{txt_content}</p>{aws_img_html}<br><a href="https://www.instagram.com/p/{shortcode}/">View on Instagram</a>')
        post_md = fm.Post(md_content)
        post_md['instagram_shortcode'] = shortcode
        post_md['date'] = date
        post_md['slug'] = slug
        post_md['title'] = txt_content[:140].replace('\n','')
        post_md['aws_media_src_url'] = aws_img_urls[0]

        for post_type in post_types:
            md_filepath = join(STATIC_DIR, post_type, year, month, f"{slug}.md")
            os.makedirs(os.path.dirname(md_filepath), exist_ok=True)
            with open(md_filepath, 'wb') as f:
                fm.dump(post_md, f)

        return post_md
    
    return None


def is_website_post(json_filepath):
    with lzma.open(join(INSTA_DIR, json_filepath)) as f:
        json_content = json.loads(f.read())

    comments = []
    try:
        comments += [
            c['node']['text'] 
            for c in json_content['node']['edge_media_to_caption']['edges']
        ]
        comments += [
            c['node']['text'] 
            for c in json_content['node']['edge_media_to_parent_comment']['edges'] 
            if c['node']['owner']['username'] in ADMIN_USERNAMES
        ]
    except KeyError:
        pass

    post_types = []
    
    for comment in comments:
        for hashtag, post_type in HASHTAG_TO_POST_TYPE.items():
            if hashtag in comment:
                post_types += [ post_type ]

    if len(post_types) == 0:
        return None
    else:
        shortcode = json_content['node']['shortcode']
        return post_to_markdown(json_filepath, shortcode, post_types)    
        

if __name__ == "__main__":
    json_files = [ f for f in os.listdir(INSTA_DIR) if f.endswith("UTC.json.xz") ]

    for json_file in json_files:
        post_md = is_website_post(json_file)
        if post_md is not None:
            print("Created post", post_md['slug'])