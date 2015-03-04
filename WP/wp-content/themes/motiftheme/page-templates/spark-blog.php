<?php
/*
Template Name: Spark Blog
*/
get_header(); ?>

<?php if ( have_posts() ) : ?>
<div class="page-title">
	<div class="w-container">
		<h1>Investing Sparks</h1>
	</div>
</div>
<div class="sparkline image-bg">
	<div class="w-container">
        <?php if( get_sub_field('sparkline_heading')) { ?>
        	<h2 class="heading-white"><?php the_sub_field ('sparkline_heading'); ?></h2>
        <?php } ?>
		<div class="w-row sparks-row">
			<?php
				$categories = get_categories();
				foreach ($categories as $cat) { 
					if ($cat->cat_name == 'trading-ideas') {
			?>
				<div class="sparkline-block">
					<h2 class="spark-heading"><?php echo $cat->cat_name; ?></h1>
					<div class="body-text padding small sparkline-body-text">
					<?php
						if ($cat->category_description != '') {
					 		echo $cat->category_description;
						}
					?>
					</div>
					<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/'.$cat->category_nicename.'/">More ›</a>'; ?>
					</div>
				</div><!-- sparkline-block -->
			<?php
					} // End != 'Uncategorized'
				} // End foreach loop
			?>
		</div>
	</div>
</div>

<div class="catalog no-shadow">
	<div class="w-container">
		<h4 class="heading-text">Latest Sparks</h4>
					<div class="break-2 padding"></div>
		<div class="w-row search-row">
			<div class="w-col w-col-8 w-col-stack search-column-1">
                <div class="article-wrap">
					<?php
					// Start the Loop.
					while ( have_posts() ) : the_post();
					 if (is_page()) continue;

						/*
						 * Include the post format-specific template for the content. If you want to
						 * use this in a child theme, then include a file called called content-___.php
						 * (where ___ is the post format) and that will be used instead.
						 */
						get_template_part( 'content-search', get_post_format() );

					endwhile;

					else :
						// If no content, include the "No posts found" template.
						get_template_part( 'content', 'none' );

					endif;

					?>
				</div><!-- .article-wrap -->

				<div class="search-results">
                    <div class="w-row">
                        <div class="w-col w-col-5 w-col-small-5 search-column-2">
                            <span class="body-text">
                            	<?php
                            		$mySearch = new WP_Query("s=$s & showposts=-1");
									$NumResults = $mySearch->post_count;
                            	 ?>
                            	<?php 
                            	if ($NumResults > 10 ) {
                            		echo 'Page:';
                            	}

                            	?>   
                            	<?php motiftheme_paging_nav(); ?> 
                            </span>
                        </div>
                    </div>
                </div><!-- search-results -->

				</div><!-- .search-column-1 -->


				<div class="w-col w-col-4 w-col-stack search-results-column-2">
					
					<?php get_sidebar('search'); ?>

				</div><!-- .search-results-column-2 -->
		</div><!-- .search-row -->
	</div><!-- .w-container -->
</div><!-- .catalog -->
<?php include (TEMPLATEPATH . '/inc/sign-up-static.php' ); ?>
<?php get_footer(); ?>
