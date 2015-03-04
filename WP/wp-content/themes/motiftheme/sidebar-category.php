<?php
/**
 * The Search Sidebar
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

?>
<?php include (TEMPLATEPATH . '/inc/social-links.php' ); ?>
<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	<?php endif; ?>

<?php if ( is_active_sidebar( 'sidebar-6' ) ) : ?>
		<?php dynamic_sidebar( 'sidebar-6' ); ?>
	<?php endif; ?>

   <?php //if ( $wp_query->have_posts() ) : ?>
<!--<div class="sub-category">RELATED&nbsp;ARTICLES</div> 
    <ul class="category-list">-->
<?php // else : ?>
	<!--<div class="sub-category">NO RELATED ARTICLES</div> -->
<?php // endif; ?>
		<?php
			//$args = array(
			//    	'posts_per_page' => 5,
			//    	'category_name' => 'motif-category',
			//    );
			//$loop = new WP_Query( $args );
		?>
		<?php // if ( $wp_query->have_posts() ) : ?>
		<?php //while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
     <!--   <li class="category-list-item"><a class="text-link category" href="<?php //the_permalink(); ?>"><?php //the_title();?></a></li>-->
        <?php //endwhile; ?>
		<?php //endif; ?>
<?php //if ( $wp_query->have_posts() ) : ?>
  <!--  </ul> -->
<?php //endif; ?> 



