import os
from os.path import join
import glob
import json
from pprint import pprint
from datetime import datetime

import frontmatter as fm

STATIC_DIR = join('..', 'site', 'content')
INDEX_FILE = join(STATIC_DIR, 'index.json')

def md_file_to_json(md_file):
    post_type = md_file.split("/")[3]

    with open(md_file) as f:
        post_md = fm.load(f)
    return post_type, {
        'path': [ "content" ] + md_file.split("/")[3:],
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