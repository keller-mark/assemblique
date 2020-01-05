import requests
from enum import Enum

class WP():
  api_base = 'http://wp.assemblique.com/wp/wp-json/wp/v2/'

  def get_posts(self, page_num, per_page, category=None):
    posts_url = WP.api_base + 'posts/?per_page=' + str(per_page) + '&page=' + str(page_num)
    if category:
      posts_url += '&categories=' + str(category.value)
    page_posts = []
    total_pages = 0
    r = requests.get(posts_url)
    if r.status_code == requests.codes.OK:
      try:
        total_pages = int(r.headers['X-WP-TotalPages'])
      except:
        pass
      page_posts = r.json()
      for index, post in enumerate(page_posts):
        page_posts[index]['media_src_url'] = self.get_featured_media(post['featured_media'])
    return page_posts, total_pages

  def get_post(self, post_id, category=None):
    post_url = WP.api_base + 'posts/' + str(post_id)
    post = None
    r = requests.get(post_url)
    if r.status_code == requests.codes.OK:
      post = r.json()
      if category and len(post['categories']) > 0:
        if category.value not in post['categories']:
          return None
      post['media_src_url'] = self.get_featured_media(post['featured_media'])
    return post

  def get_featured_media(self, media_id):
    media_src_url = None
    if media_id:
      media_url = WP.api_base + 'media/' + str(media_id)
      media_r = requests.get(media_url)
      if media_r.status_code == requests.codes.OK:
        media_json = media_r.json()
        media_src_url = media_json['source_url']
    return media_src_url

  def get_assemblique_category(self, wp_categories):
    for wp_category in WPCategory:
      if wp_category.value in wp_categories:
        return wp_category
    return None

  def get_assemblique_url(self, assemblique_category, post_id):
    if assemblique_category is not None:
      page_name = assemblique_category.name.lower()
      page_name = page_name.replace('_', '-')
      if (page_name == "past-events") or (page_name == "upcoming-events"):
        page_name = "events"
      return '/' + page_name + '/' + str(post_id)
    return None

  def search(self, query, page_num):
    search_url = WP.api_base + 'search/' + query
    has_next_page = False
    page_posts = []
    r = requests.get(search_url + '/' + str(page_num))
    if r.status_code == requests.codes.OK:
      search_results = r.json()
      for result in search_results:
        post_url = WP.api_base + 'posts/' + str(result['id'])
        post_request = requests.get(post_url)
        if post_request.status_code == requests.codes.OK:
          post = post_request.json()
          assemblique_url = self.get_assemblique_url(self.get_assemblique_category(post['categories']), post['id'])
          if assemblique_url is not None:
            post['assemblique_url'] = assemblique_url
            post['media_src_url'] = self.get_featured_media(post['featured_media'])
            page_posts.append(post)
      next_page = requests.get(search_url + '/' + str(page_num + 1))
      if next_page.status_code == requests.codes.OK and len(next_page.json()) > 0:
        has_next_page = True
    return page_posts, has_next_page


class WPCategory(Enum):
  PORTFOLIO = 187
  COMMISSIONS = 188
  UPCOMING_EVENTS = 189
  PRESS = 190
  PAST_EVENTS = 191
