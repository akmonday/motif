<?php

/**

 * The template for displaying 404 pages (Not Found)

 *

 * @package WordPress

 * @subpackage motiftheme

 * @since Twenty Fourteen 1.0

 */



get_header(); ?>





	<div id="primary" class="content-area">

		<div id="content" class="site-content" role="main">
            <div class="page-title  margin-bottom"> 
                <div class="w-container">
				<h1><?php _e( 'Page Not Found', 'motiftheme' ); ?></h1>
                </div>
			</div>



			<div class="page-content w-container">
<br>

			<br>
				<p class="body-text"><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'motiftheme' ); ?></p>
				<?php if ( is_active_sidebar( 'sidebar-4' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-4' ); ?>
	<?php endif; ?>
<?php get_search_form(); ?>
			</div><!-- .page-content -->

			

		</div><!-- #content -->

	</div><!-- #primary -->

 

<?php

//get_sidebar( 'content' );

//get_sidebar();

get_footer();

