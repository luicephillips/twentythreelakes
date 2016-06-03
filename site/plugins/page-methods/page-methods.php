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


page::$methods['sectionBuild'] = function($page, $field='sections') {

	$content = '';

	foreach($page->{$field}()->toStructure() as $section):

		$classes = r($section->classes()->isNotEmpty(), str_replace(',',' ',$section->classes()->value()), false);

		switch($section->type()->value()):
			case 'hero':
				$text = $page->heroSection($section);
				$classes = r($classes, $classes, 'banner-innerpage-block parallax up blog-banner banner-pad');
				break;
			case 'top':
				$text = $page->topSection($section);
				break;
			case 'cta':
				$text = $page->ctaSection($section);
				break;
			default:
				$text = $page->textSection($section);
		endswitch;

		$content.= brick('section', $text, ['class'=>$classes]);
	endforeach;

	return $content;

};

page::$methods['heroSection'] = function($page, $section) {

	if($page->heroParent):
		$page = $page->parent();
		$section = $page;
	endif;

	if(!isset($page->headerField))
		$page->headerField = 'header';

	if(!isset($header))
		$page->header = $section->{$page->headerField}()->value();

	$text = brick('h1', $page->header);
	$text.= $page->breadcrumbs();		
	$text = brick('div', $text, ['class'=>'inner-page-content']);

	$text = brick('div', brick('div', $text, ['class'=>'row']), ['class'=>'container-block']);

	$text.= brick('div', brick('img', false, ['src'=>url('assets/images/small-img/banner-logo.png')]), ['class'=>'banner-logo']);

	return $text;

};

page::$methods['topSection'] = function($page, $section) {

	$text = $section->text()->kt();

	if($section->header()->isNotEmpty())
		$text = brick('h2', $section->header()->value()).$text;

	$text = brick('div', brick('div', $text, ['class'=>'left-inner-content about-left-block'.r(isset($page->topTextClass),' '.$page->topTextClass)]), ['class'=>'column-7']);

	$sidebar = $page->topSidebar();

	$text = brick('div', brick('div', $text.$sidebar, ['class'=>r($section->extraPadding()->isTrue(),'conten-inner-block','row')]), ['class'=>'container-block']);		

	return $text;
};


page::$methods['breadcrumbs'] = function($page) {

	if($page->heroParent)
		$page = $page->parent();

	$home = page('home');

	$list = brick('li', brick('a', $home->title().' '.brick('span','>'), ['href'=>url()]));

	if($page->parent()):
		foreach($page->parents()->flip() as $parent):
			$list.= brick('li', brick('a', $parent->title(), ['href'=>$parent->url()]).brick('span',' >'));
		endforeach;
	endif;

	$list.= brick('li', $page->title());

	return brick('ul', $list);

};