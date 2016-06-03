<?php

kirbytext::$tags['info-block'] = array(
  'attr' => array(
    'image',
    'class'
  ),
  'html' => function($tag) {

    $text = $tag->attr('info-block');
    $class = $tag->attr('class', false);
    $image = $tag->attr('image', false);

    if(!$image)
      return false;

    $figure = brick('figure', brick('img', false, ['src'=>$tag->file($image)->url(), 'alt'=>$text, 'title'=>$text]));
    $title = brick('h3', $text, ['class'=>$class]);

    return brick('div', $figure.$title, ['class'=>'info-sec-block']);

  }
);