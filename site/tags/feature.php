<?php

kirbytext::$tags['feature'] = array(
  'attr' => array(
    'title',
    'class',
    'wide'
  ),
  'html' => function($tag) {

    $text = $tag->attr('feature');
    $title = $tag->attr('title', false);
    $class = $tag->attr('class', false);
    $wide = $tag->attr('wide', false);

    if($wide!='yes')
      $wide = false;

    $feature = '';
    $feature.= r($title, brick('h4', $title),'');
    $feature.= kirbytext($text);

    return brick('div', brick('aside', $feature, ['class'=>$class]), ['class'=>r($wide, 'column-12', 'column-6')]);

  }
);