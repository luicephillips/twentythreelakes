<div class="row">
<?
$posts = page('blog')->children()->visible()->filterBy('template','post')->sortBy('date','desc')->limit(3);

foreach($posts as $post):?>
<div class="column-4">
	<div class="blog-block">
		<figure>
			<?//= $post->featuredImage(['alt'=>$post->title(), 'title'=>$post->title()]) ?>
		</figure>
		<div class="blog-home-content">
			<?= brick('h4', $post->title()) ?>
			<?= kirbytext($post->text()->excerpt(25, 'words')) ?>
			<a href="<?= $post->url() ?>" title="Read More">Read More</a>
		</div>
	</div>
</div>
<? endforeach; ?>
</div>