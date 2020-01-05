from wp import WP, WPCategory
import json
import pprint
import pandas as pd
import os

def clean_post(p):
    year = str(p['link'][29:33])
    month = str(p['link'][34:36])
    
    aws_media_src_url = None
    if p['media_src_url'] != None:
        filename = os.path.basename(p['media_src_url'])

        if filename != None:
            aws_media_src_url = f'https://assemblique.s3.us-east-2.amazonaws.com/{year}/{month}/{filename}'
            print(aws_media_src_url)

    content = p['content']['rendered']
    content = content.replace("\"/wp/wp-content/uploads/", "\"//assemblique.s3.us-east-2.amazonaws.com/")
    content = content.replace(" /wp/wp-content/uploads/", " //assemblique.s3.us-east-2.amazonaws.com/")

    return {
        'slug': p['slug'],
        'title': p['title']['rendered'],
        'date': p['date'],
        'content': content,
        'aws_media_src_url': aws_media_src_url
    }

if __name__ == "__main__":

    wp = WP()

    categories = [(e.name, e.value) for e in WPCategory]

    for c in WPCategory:

        total_num_pages = 1
        num_per_page = 10
        curr_page_num = 1

        all_posts = []

        print(c.name)

        while curr_page_num <= total_num_pages:
            curr_posts, total_num_pages = wp.get_posts(curr_page_num, num_per_page, category=c)
            all_posts += [ clean_post(p) for p in curr_posts ]
            curr_page_num += 1

            print(len(all_posts))
        
        with open(f'backup_{c.name}.json', 'w') as f:
            json.dump(all_posts, f, ensure_ascii=False)
    