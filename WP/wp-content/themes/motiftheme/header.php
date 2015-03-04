<?php

/**

 * The Header for our theme

 *

 * Displays all of the <head> section and everything up till <div id="main">

 *

 * @package WordPress

 * @subpackage motiftheme

 * @since Twenty Fourteen 1.0

 */

?>
<!DOCTYPE html>
<!--[if IE 7]>

<html class="ie ie7" <?php language_attributes(); ?>>

<![endif]-->

<!--[if IE 8]>

<html class="ie ie8" <?php language_attributes(); ?>>

<![endif]-->

<!--[if !(IE 7) & !(IE 8)]><!-->

<html <?php language_attributes(); ?> data-wf-site="54612c843e0271fd3064719c" data-wf-page="54612c843e0271fd306471a4">

<!--<![endif]-->

<head>

	<!-- patch console for IE -->

	<script type="text/javascript"> if (!window.console) console = {log: function() {}}; </script>

	<meta charset="<?php bloginfo( 'charset' ); ?>">

	<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">

	<meta name="format-detection" content="telephone=no">

	<title><?php wp_title( '|', true, 'right' ); ?></title>

	<link rel="profile" href="http://gmpg.org/xfn/11">

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>

	<script>

	WebFont.load({

		google: {

			families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic"]

		}

	});

	</script>

<script type="text/javascript">

motif = window.motif || {};

motif.vars = {analytics: {google: {id: "UA-23878663-1", domain: ".motifinvesting.com"}},

        sharing: { primaryEmail: null, validatedEmail: false },

        isLoggedIn: false,

        referrer: "https://jira.motifinvesting.com/browse/SALT-107",

        nonce: "",

        page: "USER_MOTIF_WIDGET_EDITOR",

        authBasePath : "https://auth.motifinvesting.com",

        staticBasePath: "https://d5me67xtse2u5.cloudfront.net",

        clientBasePath: "https://trader.motifinvesting.com",

        marketingBasePath: "http://motif.msidevelopment.com",

        tradingViewURL: "",

        buildVersion: "2313.176",

        rootURL: "",

        cookieDomain: ".motifinvesting.com",

        rvmCookieName: "",

        fastPassAPIURL: "",

        fastPassUserVerified: false,

        logJsErrors : false,

        facebookAppId: "393144350702266",

        cloudspongeKey: "5LBMJXWST4BQCBNQZQHW",

        now: "1423871518673",

        customerServiceEmailAddress: "service@motifinvesting.com",

        customerServicePhone: "1-855-586-6843",

        customerServiceHours: "9am-6pm ET",

        ascCookieName: "asc",

        livelookEnabled: true

};

motif.stockCache={};



</script>

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->

	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

	<!--[if lt IE 9]>

	  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

	  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

	<![endif]-->

	<!--[if IE ]> 

	<link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri();?>/css/ie-only.css" /> 

	<![endif]-->

<!--[if IE 9]> 

	<link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri();?>/css/ie-9only.css" /> 

	<link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri();?>/css/ie-9only-deepak.css" /> 

	<![endif]-->

	<?php wp_head(); ?>

	

</head>



<body <?php body_class(); ?> id="motifWidgetEditor">

	<?php edit_post_link('edit', '<p class="header-edit-link">', '</p>'); ?>

	<?php include (TEMPLATEPATH . '/inc/ticker.php' ); ?>

	<?php include (TEMPLATEPATH . '/inc/nav.php' ); ?>

	

	<div id="main" class="site-main s">