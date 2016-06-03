<?php

class PostPage extends BlogPage {

	public $heroParent = true;

	public function postMain() {

		$content = brick('div', $this->postContent(), ['class'=>'column-7']);
		$content.= $this->topSidebar();

		$content = brick('div', brick('div', $content, ['class'=>'row']), ['class'=>'container-block']);

		return brick('section', $content, ['class'=>'inner-page-block blog-inner-page']);

	}

	public function topSidebar() {

		return $this->parent()->topSidebar();

	}

	public function postContent() {

		$content = brick('h2', $this->title());
		$content.= brick('span', 'Posted on '.$this->date('F jS, Y').' in '.$this->tagSplit('categories'), ['class'=>'posted_in']);

		if($this->featured()->isNotEmpty()):
			$img = $this->featured()->toFile();
			$content.= brick('img', false, ['src'=>$img->url(), 'alt'=>$img->alt(), 'title'=>$img->alt(), 'class'=>'post-img']);
		endif;

		$content.= $this->text()->kt();

		if($this->author()->isNotEmpty())
			$content.= kirbytext('Written By: **'.$this->author().'**');

		$content.= $this->shareBlock($this);

		$content.= $this->commentSection();

		return brick('div', $content, ['class'=>'left-inner-content blog-postmain-block']);

	}

	public function shareLeft() {

		$list = '';
		$social = [
			'fb-share' => 'Facebook',
			'ttr-share' => 'Twitter',
			'lnkd-share' => 'LinkedIn',
			'ggl-share' => 'Google+',
			'email-share' => 'Email'
		];

		foreach($social as $class => $title):
			$list.= brick('li', brick('a', false, ['class'=>$class, 'title'=>$title]));
		endforeach;

		$list = brick('span', 'Share Post:').brick('ul', $list);

		return brick('div', $list, ['class'=>'share-left']);

	}

	public function shareRight($post) {

		return $this->nextPrevious();

	}

	public function nextPrevious() {
		
		$buttons = '';

		if($this->hasPrevVisible())
			$buttons.= kirbytag([
				'link' => $this->prev()->url(),
				'text' => '< Previous',
				'title' => 'Previous'
			]);

		if($this->hasNextVisible())
			$buttons.= kirbytag([
				'link' => $this->next()->url(),
				'text' => 'Next >',
				'title' => 'Next'
			]);


		return brick('div', $buttons, ['class'=>'next-prev-block']);

	}

	public function readMore() {

		return kirbytag(array(
			'link' => $this->url(),
			'text' => 'Read More...',
			'title' => 'Read More...',
			'class' => 'go-to-page'
		));

	}

	public function commentSection() {

		$comments = brick('h4', 'What do you think? We’d love to hear what you have to say!');
		$comments.= snippet('disqus', ['disqus_shortname'=>'familyinceptionsinternational', 'disqus_developer' => r(c::get('env')=='dev', true, false)], true);

		return $comments;

	}

	public function tagSplit($field='tags') {

		$filter = r($field=='tags','tag','category');

		$tags = $this->{$field}()->split();

		$content = [];

		foreach($tags as $tag):
			$content[] = kirbytag([
				'link' => url('blog/results?'.$filter.'='.urlencode($tag)),
				'text' => $tag
			]);
		endforeach;

		return implode(', ', $content);

	}

	public function recentPosts($num=3) {

		$header = brick('h4', 'Recent Blog Posts');

		$list = '';

		$current = $this;

		$posts = $this->parent()->children()->filterBy('template','post')->filter(function($pg) use($current) {
			if(!$pg->is($current))
				return $pg;
		})->limit($num);

		foreach($posts as $post):
			$single = brick('div', brick('h5', $post->date('F jS, Y')).kirbytext($post->title()), ['class'=>'post-content']);
			$img = $post->featuredImage(['width'=>70, 'height'=>70, 'crop'=>true]);
			$list.= brick('li', brick('a', $img.$single, ['href'=>$post->url()]));
		endforeach;

		$list = brick('ul', $list);

		return brick('div', $header.$list, ['class'=>'blog-post-block']);

	}

	public function featuredImage($options=[]) {

		if($this->featured()->isEmpty())
			return false;

		$img = $this->featured()->toFile();

		$thumb = ThumbExt($img, $options)->tag();

		return $thumb;

	}

};