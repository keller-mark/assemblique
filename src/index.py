import os
from os.path import join
import glob
import json
from pprint import pprint
from datetime import datetime

import boto3
import botocore
import frontmatter as fm

from s3_utils import s3, b3, S3_BASE_URL, s3_file_exists

STATIC_DIR = join('..', 'site', 'content')
INDEX_FILE = join(STATIC_DIR, 'index.json')


def s3_upload(md_file, file_key):
    if not s3_file_exists(b3, file_key):
        data = open(md_file, 'rb')
        obj = b3.put_object(Key=file_key, Body=data)
        obj.Acl().put(ACL='public-read')

    return f'{S3_BASE_URL}/{file_key}'


def md_file_to_json(md_file):
    post_type = md_file.split("/")[3]

    with open(md_file) as f:
        post_md = fm.load(f)
    
    md_file_parts = md_file.split("/")

    return post_type, {
        'path': s3_upload(md_file, "/".join(md_file_parts[4:])),
        'date': post_md['date'][:10],
        'slug': post_md['slug'],
        'title': post_md['title'],
        'img': post_md['aws_media_src_url']
    }


if __name__ == "__main__":
    md_files = glob.glob(join(STATIC_DIR, '*', '*', '*', '*.md'))

    index_dict = {}

    for md_file in md_files:
        post_type, index_obj = md_file_to_json(md_file)
        try:
            index_dict[post_type].append(index_obj)
        except KeyError:
            index_dict[post_type] = [ index_obj ]
    
    for posts in index_dict.values():
        posts.sort(key=lambda p: datetime.strptime(p['date'], "%Y-%m-%d"), reverse=True)

    with open(INDEX_FILE, 'w') as f:
        json.dump(index_dict, f)