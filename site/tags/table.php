<?php

kirbytext::$tags['table'] = array(
  'attr' => array(
    'tbody',
    'thead',
    'tfoot',
    'class'
  ),
  'html' => function($tag) {

    $body = tableParse($tag->attr('tbody'));
    $head = tableParse($tag->attr('thead'), true);
    $foot = tableParse($tag->attr('tfoot'));

    $table = '<div class="table-responsive '.$tag->attr('class').'">';
    $table.= '<table id="'.$tag->attr('table').'">';
    $table.= '<thead>'.$head.'</thead>';
    $table.= '<tfoot>'.$foot.'</tfoot>';
    $table.= '<tbody>'.$body.'</tbody>';
    $table.= '</table>';
    $table.= '</div>';

    return $table;

  }
);