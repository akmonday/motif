<?php
/*
Template Name: Press Landing
*/
get_header(); ?>
<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();

		// Include the page content template.
		get_template_part( 'content', 'page' );

	endwhile;
?>
<?php include (TEMPLATEPATH . '/inc/featured-spark-press.php' ); ?>

<?php
// get_sidebar();
get_footer();