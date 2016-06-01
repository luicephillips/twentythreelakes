<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="format-detection" content="telephone=no">
    
    <meta name="keywords" content="">
    <meta name="description" content="">
    
    <!--css styles starts-->
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>

  <? $css = [
  	'assets/css/style.css',  	
  	'assets/css/menu.css',  	
  	'assets/css/fonts.css',  	
  ] ?>

  <?= css($css) ?>

</head>

<body>
	<div class="wrapper">
            <!--header section starts-->
            <header>
                <div id="header-main">
					<? snippet('topbar') ?>
                	<? snippet('menu') ?>
                </div>
            </header>
            <!--header section ends-->