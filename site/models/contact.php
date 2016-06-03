<?php

class ContactPage extends Page {

	public function topSidebar() {

		$text = $this->sidebar()->kt();

		return brick('div', brick('div', $text, ['class'=>'contact-block']), ['class'=>'column-4 right-box']);

	}

};