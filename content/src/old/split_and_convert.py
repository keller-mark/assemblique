import json
import os
from os.path import join
from pprint import pprint
from datetime import datetime

from markdownify import markdownify as md
import frontmatter as fm

OUT_DIR = join('..', '..', 'static')
POST_TYPES = ['PRESS', 'PORTFOLIO', 'COMMISSIONS', 'EVENTS']

def post_json_to_md(post):
    content = md(post['content'])
    md_post = fm.Post(content)
    for key in (set(post.keys()) - set(['content'])):
        if key == 'aws_media_src_url' and post[key] is not None:
            md_post[key] = post[key].replace('https://', '//')
        else:
            md_post[key] = post[key]

    dt = datetime.fromisoformat(post['date'])
    slug = post['slug']
    out_path = join(str(dt.year), f'{dt.month:02}',f'{slug}.md')
    return md_post, out_path

if __name__ == "__main__":
    for post_type in POST_TYPES:

        with open(f'backup_{post_type}.json') as f:
            posts = json.load(f)
        
        for post in posts:
            md_post, out_path = post_json_to_md(post)
            out_path = join(OUT_DIR, post_type.lower(), out_path)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)

            with open(out_path, 'wb') as f:
                fm.dump(md_post, f, encoding='utf-8')
            
            print(out_path)

