<?php

kirbytext::$tags['accordion'] = array(
  'attr' => array(
  ),
  'html' => function($tag) {

    $filter = $tag->attr('accordion', false);

    return $tag->page()->showAccordions($filter);

  }
);