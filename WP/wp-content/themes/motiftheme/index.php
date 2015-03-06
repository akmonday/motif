<?php
/**
 * The template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<?php if ( have_posts() ) : ?>
<div class="page-title">
	<div class="w-container">
		<h1><?php the_field('blog_page_heading', 'option'); ?></h1>
		<div class="body-text"></div>
	</div>
</div>
	
<!--<div class="sparkline image-bg">
	<div class="w-container">

		<div class="w-row sparks-row">
 
 			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Trading Ideas</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('trading-ideas')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/trading-ideas/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Investing Insights</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('investing-insights')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/investing-insights/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Hardeeps Thoughts</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('hardeeps-thoughts')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/hardeeps-thoughts/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Community Voice</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('community-voice')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/community-voice/">More ›</a>'; ?>
					</div>
				</div>
			</div>

		</div>
	</div>
</div> -->

<div class="catalog no-shadow">
	<div class="w-container">
		<!--<h4 class="heading-text">Latest Sparks</h4>
					<div class="break-2 padding"></div> -->
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
					<?php 
                    	if ( have_posts() ) {
                    ?>

                        <div class="w-col w-col-7 w-col-small-7 search-column-2 no-padding-top">
                            <span class="body-text pull-right">  
                            	<?php wp_pagenavi(); ?>
                            </span>
                        </div>
                	<?php 
                	} 
                	?>
                    </div>
                </div><!-- search-results -->

				</div><!-- .search-column-1 -->


				<div class="w-col w-col-4 w-col-stack search-results-column-2">
					
					<?php get_sidebar('category'); ?>

				</div><!-- .search-results-column-2 -->
		</div><!-- .search-row -->
	</div><!-- .w-container -->
</div><!-- .catalog -->
<!-- <div class="sign-up">
	<div class="w-container">
		<div class="promo-text"><?php the_sub_field('promo_text'); ?></div>
		<a class="button large" href="<?php the_sub_field('button_url'); ?>"><?php the_sub_field('button_text'); ?></a>
	</div>
</div> -->
<?php include (TEMPLATEPATH . '/inc/sign-up-static.php' ); ?>
<?php get_footer('blog'); ?>
