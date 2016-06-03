<?php

function ktNoPar($text) {

  $kt = preg_replace('!^<p>(.*?)</p>$!i', '$1', kirbytext($text));

  return $kt;

}

function tableParse($content, $header=false) {

  $tableContent = '';

  $rows = str::split($content,'&*&');

  foreach($rows as $key => $val):
    $tableContent.= '<tr>';

    $cells = str::split($val,'|');
    foreach($cells as $cell):
      $tableContent.= brick(r($header,'th','td'),$cell);
    endforeach;

    $tableContent.= '</tr>';
  endforeach;

  return $tableContent;

}

function redirectPage($uri, $ip) {

  if(!$ip)
    return false;

  if(page()->is(page($uri)))
    return false;

  if(server::get('REMOTE_ADDR')!=$ip)
    return true;

  return false;

}