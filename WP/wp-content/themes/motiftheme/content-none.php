<?php
/**
 * The template for displaying a "No posts found" message
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */
?>

	<div id="primary" class="content-area">

<div id="content" class="site-content" role="main">
            <div class="page-title  margin-bottom"> 
                <div class="w-container">
				<h1><?php _e( 'Nothing Found', 'motiftheme' ); ?></h1>
                <div class="body-text"></div>
                </div>
			</div>


<div class="page-content w-container">
	<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

	<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'motiftheme' ), admin_url( 'post-new.php' ) ); ?></p>

	<?php elseif ( is_search() ) : ?>

	<p class="body-text"><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'motiftheme' ); ?></p>
	<?php if ( is_active_sidebar( 'sidebar-4' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-4' ); ?>
	<?php endif; ?>
	<?php get_search_form(); ?>

	<?php else : ?>

	<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'motiftheme' ); ?></p>
	<?php get_search_form(); ?>

	<?php endif; ?>
</div><!-- .page-content -->
</div><!-- #primary -->