<?php

kirbytext::$tags['blockquote'] = array(
  'attr' => array(
    'author'
  ),
  'html' => function($tag) {

    $text = $tag->attr('blockquote');
    $author = $tag->attr('author', false);

    $content = kirbytext($text);

    if($author)
      $content.= brick('div', '– '.$author, ['class'=>'author']);

    return brick('blockquote', $content, ['class'=>'quote']);

  }
);