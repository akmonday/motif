<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */
?>

</div><!-- #main -->
<div class="w-hidden-tiny breadcrumb">
	<div class="w-container s">
		
		<?php if ( function_exists('be_taxonomy_breadcrumb') ) {
			be_taxonomy_breadcrumb();
		} ?>
	</div>
</div>
<div class="footer">
	<div class="w-container">
		<div class="w-row">
			<?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_class' => 'footer-menu' ) ); ?>
		</div>
	</div>
</div>
<div class="contact">
	<div class="w-container">
		<h5>Contact Us</h5>
		<div class="contact-text">1-800-586-6843 / 9am - 6pm ET, Monday-Friday / <a class="contact-link" href="#">service@motifinvesting.com</a>
		</div>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/facebook-icon.svg" width="32" alt="facebook-icon.svg">
		</a>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/twitter-icon.svg" width="32" alt="twitter-icon.svg">
		</a>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/linkedin-icon.svg" width="32" alt="linkedin-icon.svg">
		</a>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/googleplus-icon.svg" width="32" alt="googleplus-icon.svg">
		</a>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/youtube-icon.svg" width="32" alt="youtube-icon.svg">
		</a>
		<a class="w-inline-block social-link" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/rss-icon.svg" width="32" alt="rss-icon.svg">
		</a>
	</div>
</div>
<div class="legal">
	<div class="w-container">
		<p class="legal-text"><strong>©2014 Motif Investing, Inc. All rights reserved. Build ID 2159.44</strong></p>
<?php


function motif_get_footer_disclaimer( $term ){

	remove_filter('acf_the_content', 'wpautop');

	$footer_disclaimer = get_field('footer_disclaimer'  , $term->taxonomy . '_' . $term->term_id );

	return $footer_disclaimer;
}

// ==============================================================================================

$term = get_queried_object();

?>
<?php

	$args = array(
	  'orderby' 	=> 'name',
	  'order' 		=> 'ASC',
	  'parent' 		=> $term->term_id,
	  'taxonomy'	=> $term->taxonomy,
	  'hide_empty'	=> false,
	  );

	$categories_list = get_categories($args);

	
?>

<?php echo motif_get_footer_disclaimer( $term ); ?>
	
	</div>
</div>
<?php wp_footer(); ?>

</body>
</html>