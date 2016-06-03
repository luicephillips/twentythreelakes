<?php

kirbytext::$tags['timeline'] = array(
  'attr' => array(
    'title',
    'class'
  ),
  'html' => function($tag) {

    $text = $tag->attr('timeline');
    $title = $tag->attr('title', false);
    $class = $tag->attr('class', false);


    $content = '';
    if($title)
      $content.= brick('h4', $title);

    $content.= kirbytext($text);

    $content = brick('div', $content, ['class'=>$class]);

    return brick('div', $content, ['class'=>'column-6']);    

  }
);