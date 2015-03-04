<?php
/**
* The default template for displaying content
*
* Used for both single and index/archive/search.
*
* @package WordPress
* @subpackage motiftheme
* @since Twenty Fourteen 1.0
*/
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
	<?php if ( has_post_thumbnail() ) { ?>
		<div class="featured-image-wrap-outer-border">
			<div class="featured-image-wrap-inner-border">
				<div class="featured-image-wrap">
					<?php motiftheme_post_thumbnail(); ?>
				</div>
			</div>
		</div>
	<?php } ?>

	<div class="blog-content-excerpt w-col w-col-9 w-col-small-9 w-col-tiny-9">
		<header class="entry-header">
			<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>

			<?php
				endif;

				if ( is_single() ) :
					the_title( '<h1 class="entry-title">', '</h1>' );
				else :
					the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
				endif;
			?>

			<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
			<span class="blog-date">
				<span class="cat-links">
					<?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?> |</span>
			</span>
			<?php endif; ?>

			<span class="blog-date">
				<?php
					if ( 'post' == get_post_type() )
						motiftheme_posted_on();

					if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
				?>
				<?php
					endif;

					edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
				?>
			</span><!-- .entry-meta -->
		</header><!-- .entry-header -->

		<?php if ( is_search() ) : ?>
		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">

		<?php remove_filter('the_excerpt', 'wpautop'); ?>

		<?php
			the_excerpt('Read more...'); 
			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'motiftheme' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
			) );
		?>
		
	</div><!-- .entry-content -->

	<?php endif; ?> 
	</div><!-- .w-col w-col-9 w-col-small-9 w-col-tiny-9 -->
</article><!-- #post-## -->	
