<?php
/**
 * The template for displaying Category pages
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>


<?php if ( have_posts() ) : ?>
	<div class="page-title">
		<div class="w-container">
			<h1><?php printf( __( '%s', 'motiftheme' ), single_cat_title( '', false ) ); ?></h1>
			<?php
				// Show an optional term description.
				$term_description = term_description();
				if ( ! empty( $term_description ) ) :
					printf( '<div class="body-text">%s</div>', $term_description );
				endif;
			?>
		</div>
	</div>
	<div class="catalog no-shadow">
		<div class="w-container">
			<!--<h4 class="heading-text">Latest Posts</h4>
			<div class="break-2 padding"></div>-->
				<div class="w-row search-row">
					<div class="w-col w-col-8 w-col-stack search-column-1">
						<div class="article-wrap">
							<?php 
							$counter = 0;
							?>
							<?php


									// Start the Loop.
									while ( have_posts() ) : the_post();

									/*
									 * Include the post format-specific template for the content. If you want to
									 * use this in a child theme, then include a file called called content-___.php
									 * (where ___ is the post format) and that will be used instead.
									 */
									get_template_part( 'content-search', get_post_format() );

									$counter++;

									endwhile;


									
								else :
									// If no content, include the "No posts found" template.
									get_template_part( 'content', 'none' );

								endif;
							?>
						<div class="search-results padding-top-25">
		                    <div class="w-row">
							<?php 
		                    	if ( have_posts() ) {
		                    ?>
		                       <div class="w-col w-col-5 w-col-small-5">
		                            <div class="search-results-showing-bar">
		                            	<?php
		                            		$mySearch = new WP_Query("s=$s & showposts=-1");
											$NumResults = $mySearch->post_count;
		                            	 ?>
			                            <p class="body-text">Showing 
			                             <?php 
			                             if ($counter < 10) {
			                             	echo $counter;
			                             } elseif ($NumResults > 10) {
			                             	echo "10";
			                             }
			                             ?> of <?php echo $counter; ?></p>
			                            <p class="body-text">&nbsp;of results</p>
		                        	</div>
		                        </div>
		                        <div class="w-col w-col w-col-7 w-col-small-7 search-column-2no-padding-top">
		                            <span class="body-text pull-right">  
		                            	<?php wp_pagenavi(); ?>
		                            </span>
		                        </div>
		                	<?php 
		                	} 
		                	?>
		                    </div>
		                </div><!-- search-results -->
					</div>
					</div>
  				<div class="w-col w-col-4 w-col-stack search-results-column-2">
					
					<?php get_sidebar('category'); ?>

				</div><!-- .search-results-column-2 -->

             

				</div><!-- .search-column-1 -->



		</div><!-- .search-row -->
	</div><!-- .w-container -->
</div><!-- .catalog -->
<?php include (TEMPLATEPATH . '/inc/sign-up-static.php' ); ?>
<?php get_footer(); ?>
