<?php

class HomePage extends DefaultPage {

	public function heroSection($section) {

		$videoName = $this->videos()->first()->name();

		$video = brick('source', false, ['src'=>$this->video($videoName.'.webm')->url(), 'type'=>'video/webm']);
		$video.= brick('source', false, ['src'=>$this->video($videoName.'.mp4')->url(), 'type'=>'video/mp4']);
		$video.= brick('source', false, ['src'=>$this->video($videoName.'.ogv')->url(), 'type'=>'video/ogv']);

		$video = brick('video', $video, ['id'=>'bgvid', 'autoplay'=>true, 'loop'=>true, 'muted'=>true, 'poster'=>$this->image($videoName.'-poster.jpg')->url()]);

		$text = brick('h1', $section->header()->value());
		$text.= $section->text()->kt();
		$text = brick('div', $text, ['class'=>'banner-content-home']);

		$blogText = $this->blogText();

		$text = brick('div', brick('div', $text.$blogText, ['class'=>'container-block']), ['class'=>'banner-content-block']);

		return $video.$text;

	}

	public function blogText() {

		$post = site()->index()->filterBy('template','post')->sortBy('date','desc')->first();

		$content = brick('span', 'Family Inceptions International Blog:', ['class'=>'go-goreen']);
		$content.= brick('span', $post->date('F jS').' – '.$post->title().' Read more...', ['class'=>'fade-text']);

		return brick('div', brick('p', $content), ['class'=>'banner-text-last']);

	}

}