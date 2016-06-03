<?php

return function($site, $pages, $page) {

  $posts = page('blog')->children()->visible()->filterBy('template','post')->sortBy('date','desc');

  $posts = $posts->paginate(10);

  return array(
    'blogContent' => $page->blogMain($posts)
  );
};