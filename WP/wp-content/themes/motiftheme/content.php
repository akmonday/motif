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

<article id="post-<?php the_ID(); ?>" <?php post_class('w-col w-col-8 w-col-stack search-column-1 blog-single'); ?>>
	<header class="entry-header">
		<?php

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
		<?php if ( in_array( 'press_type', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
		<span class="blog-date no-margin-bottom">
			<span class="cat-links">
				<?php echo get_the_term_list($post->ID, 'press_type' ); ?> |</span>
		</span>
		<?php endif; ?>
		<span class="blog-date no-margin-bottom">
			<?php
				if ( 'post' == get_post_type() || 'press' == get_post_type()  )
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
		<?php motiftheme_post_thumbnail(); ?>
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
	<?php endif; ?>
	<?php
	if ( 'press' != get_post_type()){
		motiftheme_post_nav();
	}
	 ?>
	 
	 <?php include (TEMPLATEPATH . '/inc/social-links-job-posting.php' ); ?>
	
<div class="break-2 padding"></div>
 <h4 class="related-heading">Related Articles</h4>
 <div class="w-row press-row related">
 <?php
			  $orig_post = $post;  global $post;
			  $tags = wp_get_post_tags($post->ID);
			     if ($tags) {  $tag_ids = array();  foreach($tags as $individual_tag) $tag_ids[] = $individual_tag->term_id;
			       $args=array(     'tag__in' => $tag_ids,
							 'post__not_in' => array($post->ID),
                						'posts_per_page'=>2, // Number of related posts to display.
            					       'caller_get_posts'=>1
          					  );
 			  $my_query = new wp_query( $args );
 
     			   while( $my_query->have_posts() ) {
        			    $my_query->the_post();
        			    ?>
		<div class="w-col w-col-6 press-column">
		<div class="w-row row">
			<div class="w-col w-col-3 w-col-small-3 w-col-tiny-3 column">
			<img src="<?php $src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), array(300, 300), false, ''); echo $src[0]; ?>" class="featured-press-image">
			</div>
			<div class="w-col w-col-9 w-col-small-9 w-col-tiny-9 column">
			<a href="<?php the_permalink(); ?>" class="text-link category"><?php the_title();?></a>
			<div class="blog-date"><?php motiftheme_posted_on(); ?>| <a href="#" class="text-link">In the News</a></div>
			<div class="body-text"><a href="<?php the_permalink(); ?>" class="text-link">Read More&nbsp;›</a></div></div>
		</div>
	</div>
     <!--   <li class="category-list-item"><a class="text-link category" href="<?php //the_permalink(); ?>"><?php //the_title();?></a></li>-->
        <?php }
        }
        $post = $orig_post;
        wp_reset_query();
        ?>
</div>
			<?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>
</article><!-- #post-## -->