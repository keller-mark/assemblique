import boto3
import botocore
import sys
import os
from os.path import join
import lzma
import json
from pprint import pprint

INSTA_DIR = join('instagram', 'assemblique')
ADMIN_USERNAMES = ['assemblique', 'mark_keller_']

HASHTAG_TO_POST_TYPE = {
    '#assembliquewebsite_portfolio': 'portfolio',
    '#assembliquewebsite_press': 'press',
    '#assembliquewebsite_events': 'events',
    '#assembliquewebsite_commissions': 'commissions',
    '#assembliquewebsite_forsale': 'forsale'
}

def s3_file_exists(b3, filepath):
    try:
        b3.Object(filepath).load()
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            # The object does not exist.
            return False
        else:
            # Something else has gone wrong.
            raise
    return True


def post_to_markdown(json_filepath, json_content):
    shortcode = json_content['node']['shortcode']
    
    post_files = [ f for f in os.listdir(INSTA_DIR) if f.startswith(json_filepath[:-8]) ]
    txt_file = None
    img_files = []
    for post_file in post_files:
        if post_file.endswith(".txt"):
            txt_file = post_file
        if post_file.endswith(".jpg"):
            img_files += [ post_file ]
    
    if txt_file is not None and len(img_files) > 0:
        print(txt_file, img_files)

        with open(join(INSTA_DIR, txt_file)) as f:
            txt_content = f.read()
            print(txt_content)
    
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
        return False, post_types, None
    else:
        return True, post_types, post_to_markdown(json_filepath, json_content)    
        

if __name__ == "__main__":
    s3 = boto3.resource(
        service_name='s3',
        aws_access_key_id=os.environ['ASSEMBLIQUE_S3_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['ASSEMBLIQUE_S3_SECRET_ACCESS_KEY']
    )

    b3 = s3.Bucket("assemblique")

    json_files = [ f for f in os.listdir(INSTA_DIR) if f.endswith("UTC.json.xz") ]

    for json_file in json_files:
        tf, post_types, post_md = is_website_post(json_file)
        if tf:
            print(post_types, post_md)