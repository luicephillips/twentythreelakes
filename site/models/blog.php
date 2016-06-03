<?php

class BlogPage extends Page {

	public $headerField = 'title';

	public function hero() {

		$section = $this->heroSection($this);

		return brick('section', $section, ['class'=>'banner-innerpage-block parallax up blog-banner banner-pad']);

	}

	public function blogMain($posts) {

		$content = brick('div', $this->blogList($posts), ['class'=>'column-7']);
		$content.= $this->topSidebar();

		$content = brick('div', brick('div', $content, ['class'=>'row']), ['class'=>'container-block']);

		return brick('section', $content, ['class'=>'inner-page-block blog-inner-page']);

	}

	public function blogList($posts) {

		$content = '';

		foreach($posts as $post):
			$single = snippet('post-preview', ['page'=>$this, 'post'=>$post], true);
			$content.= brick('li', $single);
		endforeach;

		$content = brick('ul', $content);

		return brick('div', $content, ['class'=>'left-inner-content blog-listing-block']);

	}

	public function topSidebar() {

		$sidebar = brick('div', brick('form', brick('input', false, ['placeholder'=>'Search Blog...', 'name'=>'q']).brick('input', false, ['type'=>'submit', 'class'=>'abc']), ['action'=>url('blog/results')]), ['class'=>'search-blog']);

		$sidebar.= $this->tagList('categories', 'categories-block');
		$sidebar.= $this->socialShareBlock();
		$sidebar.= $this->tagList('tags', 'blog-tags-block');
		$sidebar.= page(url::path())->recentPosts();

		$blogText = $this->text()->kt();
		$sidebarBottom = brick('b', brick('img', false, ['src'=>url('assets/images/logo-blog.svg'), 'width'=>50, 'height'=>44, 'alt'=>'Family Inceptions International', 'title'=>'Family Inceptions International']));

		$sidebar.= brick('div', $blogText.$sidebarBottom, ['class'=>'about-blog-block']);

		return brick('div', brick('div', $sidebar, ['class'=>'blog-block']), ['class'=>'column-4 right-box']);

	}

	public function tagList($field, $class) {

		$filter = r($field=='tags','tag','category');

		$header = brick('h4', str::ucfirst($field));

		$list = '';

		$tags = $this->children()->pluck($field,',',true);

		foreach($tags as $tag):
			$list.= brick('li', kirbytag([
				'link' => url('blog/results').'?'.$filter.'='.urlencode($tag),
				'text' => $tag,
				'title' => $tag
			]));
		endforeach;

		$list = brick('ul', $list);

		return brick('div', $header.$list, ['class'=>$class]);

	}

	public function socialShareBlock() {

		$header = brick('h4', 'Subscribe');

		$list = '';

		$social = [
			'rss-icon',
			'fb-icon',
			'twitter-icon',
			'ggl-icon'
		];

		foreach($social as $class):
			$list.= brick('li', brick('a', false, ['class'=>$class]));
		endforeach;

		$list = brick('ul', $list);

		return brick('div', $header.$list, ['class'=>'social-shr-block']);

	}

	public function shareBlock($post=false) {

		$left = $post->shareLeft();
		$right = $this->shareRight($post);

		return brick('div', $left.$right, ['class'=>'blog-share-block']);		

	}

	public function shareRight($post) {

		return $post->readMore();

	}

	public function recentPosts() {

		return false;
		
	}

};