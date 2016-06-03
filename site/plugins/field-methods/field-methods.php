<?php

// Use kirbytext() method on a field, but remove the paragraph tags afterwards
field::$methods['ktNoPar'] = function($field) {

	$mod = preg_replace('!^<p>(.*?)</p>$!i', '$1', $field->kt());

    return $mod;
};