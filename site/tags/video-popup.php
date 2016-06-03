<?php

kirbytext::$tags['video-popup'] = array(
  'attr' => array(
    'title',
    'text'
  ),
  'html' => function($tag) {

    $videoID = $tag->attr('video-popup');
    $title = $tag->attr('title');
    $text = $tag->attr('text');

    $block = brick('h3', $title);
    $block.= brick('a', brick('img', false, ['src'=>url('assets/images/icon/polygon-icon-dark.svg'), 'width'=>10, 'height'=>19, 'title'=>'Play', 'alt'=>'Play']), ['href'=>'#', 'title'=>'Play']);
    $block.= kirbytext($text);

    return brick('div', brick('div', $block, ['class'=>'video-head-block']), ['class'=>'column-6']);

  }
);