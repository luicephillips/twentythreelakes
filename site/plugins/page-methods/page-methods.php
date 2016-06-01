<?php

page::$methods['menuSections'] = function($page) {

	$menu = '';

	if($page->hasVisibleChildren()):

		$block = brick('a', $page->title()->html(), ['href'=>'#', 'title'=>$page->title()]);
		foreach($page->children()->visible() as $c):
			$block.= brick('li', brick('a', $c->title()->html(), ['href'=>$c->url(), 'title'=>$c->title()]));
		endforeach;

		$menu.= brick('li', brick('ul', $block), ['class'=>'mega-menu-list']);
	else:
		$menu.= brick('li', brick('a', $page->title()->html(), ['href'=>$page->url(), 'title'=>$page->title()]), ['class'=>'dropdown']);
	endif;

	return $menu;

};