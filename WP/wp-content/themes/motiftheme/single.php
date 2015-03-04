<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<?php
	// Start the Loop.
	while ( have_posts() ) : the_post(); ?>

	<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
		<div class="page-title">
			<div class="w-container">
				<h1><?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?></h1>
				<p class="body-text">Discover new trends and trading concepts</p>
			</div>
		</div>
	<?php endif; ?>

	<div class="catalog no-shadow">
		<div class="w-container">
			<div class="w-row search-row">
				<?php 
					/*
					 * Include the post format-specific template for the content. If you want to
					 * use this in a child theme, then include a file called called content-___.php
					 * (where ___ is the post format) and that will be used instead.
					 */
					get_template_part( 'content', get_post_format() );



					// If comments are open or we have at least one comment, load up the comment template.
					
					endwhile;
				?>
				
				 <div class="w-col w-col-4 w-col-stack search-results-column-2">
				 	<?php get_sidebar('category'); ?>
				 </div>
			</div>
		</div>
	</div>

<?php
// get_sidebar( 'content' );
// get_sidebar();
get_footer();
