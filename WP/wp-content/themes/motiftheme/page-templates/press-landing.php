<?php
/*
Template Name: Press Landing
*/
get_header(); ?>
<div class="press-landing-page">
	<?php
		// Start the Loop.
		while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'content', 'page' );

		endwhile;
	?>

	<?php include (TEMPLATEPATH . '/inc/featured-press.php' ); ?>
	<div class="catalog no-shadow press-landing">
		<div class="w-container">
			<div class="w-row search-row">
				<div class="w-col w-col-8 w-col-stack search-column-1">
					<div class="faq-tabs" role="tabpanel">
						<div class="search-results margin-bottom-30">
						    <div class="break-2"></div>			
						    <ul id="myTab" class="faq-nav" role="tablist">
						        <li role="presentation" class="active">
						            <a class="body-text-2 padded" href="#in-the-news" id="in-the-news-tab" role="tab" data-toggle="tab" aria-controls="in-the-news" aria-expanded="true">In The News</a>
						        </li>
						        <li class="" role="presentation">
						            <a class="body-text-2 padded" aria-expanded="false" href="#press-releases" role="tab" id="press-releases-tab" data-toggle="tab" aria-controls="press-releases">Press Releases</a>
						        </li>
						    </ul>
						    <div class="break-2"></div>
						</div>
					    <div id="myTabContent" class="tab-content">
					        <div role="tabpanel" class="tab-pane fade active in padding-top-40" id="in-the-news" aria-labelledby="in-the-news-tab">
								
								<?php


								$args = array( 'posts_per_page' => 5, 'offset'=> 1, 'category_name' => 'motif-in-the-news' );

								$myposts = get_posts( $args );
								foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
								<div class="w-row row">
									<div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 column">
										<a class="w-inline-block press-image" href="<?php the_permalink(); ?>">
											<?php the_post_thumbnail(); ?>
										</a>
									</div>
									<div class="w-col w-col-10 w-col-small-10 w-col-tiny-10">

										<?php if ( get_field('alternative_url') ) { ?>
											<a class="text-link category" href="<?php esc_url( the_field('alternative_url') ) ?>"><?php the_title(); ?></a>
										<?php } else { ?>
											<a class="text-link category" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										<?php } ?>
		
										<?php if ( has_post_format( 'audio' ) ) { ?>
											<img class="press-video-icon" height="20" width="20" alt="Play Button" src="<?php bloginfo('template_url'); ?>/images/play-btn-sm.svg">
										<?php } if ( has_post_format( 'video' ) ) { ?>
											<img class="press-video-icon" height="20" width="20" alt="Audio Button" src="<?php bloginfo('template_url'); ?>/images/audio-btn-sm.svg">
										<?php } else {
						
										}
										?>
										<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
										<div class="blog-date">
											<?php
											if ( 'post' == get_post_type() ) 
												?>

											<?php motiftheme_posted_on(); ?>
											<?php

											if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
												?>
											<?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?>
											<?php
											endif;

											edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
											?>
											
										<?php endif; ?>
										</div><!-- blog-date -->

										
										<div class="body-text">
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

												<?php if ( get_field('alternative_url') ) { ?>
													<a class="text-link" href="<?php esc_url( the_field('alternative_url') ) ?>">Read More ›</a>
												<?php } elseif (get_field('alternative_url')) { ?>
													<a class="text-link" href="<?php the_permalink(); ?>">Read More foo</a>
												<?php } ?>											
													
											</div><!-- .entry-content -->
										</div>
									</div>
									
								</div>
								<div class="break-2 padding"></div>
								<?php endforeach; 
								wp_reset_postdata();?>	

								
					        </div>
					        <div role="tabpanel" class="tab-pane fade padding-top-40" id="press-releases" aria-labelledby="press-releases-tab">
								<?php


								$args = array( 'posts_per_page' => 5, 'category_name' => 'press-releases' );

								$myposts = get_posts( $args );
								foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
								<div class="w-row row">
									<div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 column">
										<a class="w-inline-block press-image" href="<?php the_permalink(); ?>">
											<?php the_post_thumbnail(); ?>
										</a>
									</div>
									<div class="w-col w-col-10 w-col-small-10 w-col-tiny-10">
										<?php if ( get_field('alternative_url') ) { ?>
											<a class="text-link category" href="<?php esc_url( the_field('alternative_url') ) ?>"><?php the_title(); ?></a>
										<?php } else { ?>
											<a class="text-link category" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										<?php } ?>
		
										<?php if ( has_post_format( 'audio' ) ) { ?>
											<img class="press-video-icon" height="20" width="20" alt="Play Button" src="<?php bloginfo('template_url'); ?>/images/play-btn-sm.svg">
										<?php } if ( has_post_format( 'video' ) ) { ?>
											<img class="press-video-icon" height="20" width="20" alt="Audio Button" src="<?php bloginfo('template_url'); ?>/images/audio-btn-sm.svg">
										<?php } else {
						
										}
										?>
										<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
										<div class="blog-date">
											<?php
											if ( 'post' == get_post_type() ) 
												?>

											<?php motiftheme_posted_on(); ?>
											<?php

											if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
												?>
											<?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?>
											<?php
											endif;

											edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
											?>
											
										<?php endif; ?>
										</div><!-- blog-date -->

										
										<div class="body-text">
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

												<?php if ( get_field('alternative_url') ) { ?>
													<a class="text-link" href="<?php esc_url( the_field('alternative_url') ) ?>">Read More ›</a>
												<?php } elseif (get_field('alternative_url')) { ?>
													<a class="text-link" href="<?php the_permalink(); ?>">Read More foo</a>
												<?php } ?>											
													
											</div><!-- .entry-content -->
										</div>
									</div>
									
								</div>
								<?php endforeach; 
								wp_reset_postdata();?>	


	   
					        </div>
					    </div>
					</div><!-- /example -->
				</div>
				<?php get_sidebar(); ?>
			</div>
		</div>
	</div>
</div>


<?php
// get_sidebar();
get_footer();