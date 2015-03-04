<?php
/**
 * The template for displaying Archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each specific one. For example, Twenty Fourteen
 * already has tag.php for Tag archives, category.php for Category archives,
 * and author.php for Author archives.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
	
			<?php
				// ref: http://marcosiebert.com/2014/06/wordpress-order-custom-taxonomies-with-children/
				// Set your custom taxonomy
				$taxonomy = "motif-category";
				
				$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); 
			?>
			
			<div class="category-divider page-title">
				<div class="w-container">
					<div class="container">
						<div class="category-image">
							<img src="<?php bloginfo('template_url'); ?>/images/recession-icons_1.png" alt="recession-icons.png">
						</div>
					</div>
					<h2 class="category-heading-text"><?php echo $term->name; ?></h2>
					<div class="page_summary"><?php echo $term->description; ?></div>
				</div>
			</div>

<?php echo '<pre>' . get_the_term_list( $post->ID, 'motif-category', '<br>', '<br>' ). '</pre>'; ?>
				        <!-- echo '<pre><h4>Term Name</h4><br>'.$term->name . '<br>';
				        echo '<h4>currentterm Name</h4><br>'.$currentterm->name.'<br>';
				        echo '<h4>Cterm Name</h4><br>'.$cterm->name.'</pre>'; -->
			<?php //include (TEMPLATEPATH . '/inc/motif-category-parent-child.php' ); ?>

		</div><!-- #content -->
	</section><!-- #primary -->

<?php
get_footer();
