<?php

class LandingPage extends Page {

	public $topTextClass = 'landing-detail';

	public function topSidebar() {

		$header = brick('h4', 'Registration Required');
		$form = snippet('form-landing', false, true);

		$content = brick('div', $header.$form, ['class'=>'about-right-block']);

		return brick('div', $content, ['class'=>'column-4 right-box landing-form-right']);

	}

};