<?php

class DefaultPage extends Page {

	public function ctaSection($section) {

		$text = $section->text()->kt();

		if($section->header()->isNotEmpty())
			$text = brick('h2', $section->header()->value()).$text;

		$text = brick('div', brick('div', $text, ['class'=>'incp-content']), ['class'=>'column-6']);

		$text = brick('div', brick('div', $text, ['class'=>r($section->extraPadding()->isTrue(),'conten-inner-block','row')]), ['class'=>'container-block']);		
		$text.= brick('div', false, ['class'=>'overlay-bg']);

		return $text;
	}

	public function textSection($section) {

		$text = $section->text()->kt();

		if($section->header()->isNotEmpty())
			$text = brick('h3', $section->header()->value()).$text;

		$text = brick('div', $text, ['class'=>r($section->extraPadding()->isTrue(),'conten-inner-block','row')]);

		if($section->noContainerBlock()->isTrue())
			return $text;

		$text = brick('div', $text, ['class'=>'container-block']);		

		return $text;
	}

	public function topSidebar() {

		return brick('div', brick('div', false, ['class'=>'about-right-block']), ['class'=>'column-4 right-box']);

	}

	public function showAccordions($filter=false, $field='accordion') {

		$list = '';
		$i = 0;

		foreach($this->{$field}()->toStructure() as $a):
			if($filter && !in_array($filter, str::split($a->filters()->value())))
				continue;

			$header = brick('a', $a->header()->ktNoPar(), ['href'=>'#', 'class'=>'accordion-title'.r(!$i,' active','')]);
			$single = brick('div', $a->text()->kt(), ['class'=>'accordion-content', 'style'=>r(!$i,'display:block;','')]);

			$list.= brick('li', $header.$single, ['class'=>'title']);
			$i++;
		endforeach;

		$content = brick('ul', $list, ['id'=>'top-accordian', 'class'=>'accordion']);

		return brick('div', $content, ['class'=>'accordian-block']);

	}

}