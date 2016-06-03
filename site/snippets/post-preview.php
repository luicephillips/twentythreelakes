<div class="blog-heading">
		<div class="headings-left">
			<a href="<?= url() ?>">
				<div class="date-box">
					<span><?= $post->date('M') ?></span>
					<p><?= $post->date('d') ?></p>
					<span><?= $post->date('Y') ?></span>
				</div>
				<?= $post->featuredImage([
					'width' => 190,
					'height' => 126,
					'crop' => true,
					'alt' => $post->title(),
					'title' => $post->title()
				]) ?>
			</a>
		</div>
		<div class="headings-right">
			<?= brick('h3', $post->title()->link()) ?>
			<span>Posted in <?= $post->tagSplit('categories') ?><? e($post->author()->isNotEmpty(), ' by '.$post->author()) ?></span>
		</div>
</div>
<div class="blog-center-block">
	<?= kirbytext($post->text()->excerpt(40, 'words')) ?>
</div>
<?= $page->shareBlock($post) ?>