<?php
/**
 * The template for displaying posts in the Link post format
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */
?>
<div	class="formated-post">
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php motiftheme_post_thumbnail(); ?>

		<header class="entry-header">
		<?php //if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
		<!-- <div class="entry-meta">
			<span class="cat-links"><?php// echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?></span>
		</div>--><!-- .entry-meta -->
		<?php
			//endif;

			if ( is_single() ) :
				the_title( '<h4 class="entry-title heading-text blog">', '</h4>' );
			else :
				the_title( '<h4 class="entry-title heading-text blog"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );
			endif;
		?>

		<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
		<span class="blog-date no-margin-bottom">
			<span class="cat-links">
				<?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?> |</span>
		</span>
		<?php endif; ?>

		<span class="blog-date no-margin-bottom">
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

	<div class="entry-content">
		<?php
			the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'motiftheme' ) );
			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'motiftheme' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php the_tags( '<footer class="entry-meta"><span class="tag-links">', '', '</span></footer>' ); ?>
</article><!-- #post-## -->
</div>