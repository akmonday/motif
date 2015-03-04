<?php
/*
Template Name: Our Board of Directors
*/
get_header(); ?>
<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();

		// Include the page content template.
		get_template_part( 'content', 'page' );

	endwhile;
?>
<div class="category-divider">
	<div class="w-container">

		<div class="leadership-tabs" role="tabpanel">		
			<div class="search-results">
				<ul id="leadership-tabs-nav" class="leadership-nav" role="tablist">
					<li class="" role="presentation">
						<a class="text-link search" href="<?php echo site_url(); ?>/about/leadership-team">Our Leadership Team</a>
					</li>
					<li class="active" role="presentation">
						<a class="text-link search" href="<?php echo site_url(); ?>/about/board-directors">Our Board of Directors</a>
					</li>
					<li class="" role="presentation">
						<a class="text-link search" href="<?php echo site_url(); ?>/about/advisors">Our Advisors</a>
					</li>
				</ul>
			</div><!-- .search-results -->

			<div id="leadership-tabs-Content" class="tab-content"> 
				<?php
				     
				    // Define the query
				    $args = array(
				        'post_type' => 'leadership',
				        'leadership_categories' => 'Our Board of Directors'
				    );

				    // output the term name in a heading tag 
				    ?>
				    <div class="tab-wrapper">
					    	<div class="bpoo"> 
					    	<?php       
						    $query = new WP_Query( $args );
						        // Start the Loop
						        while ( $query->have_posts() ) : $query->the_post(); ?>
						 		<div id="post-<?php the_ID(); ?>" class="leader-block">
					        		<div class="row">
					        			<div class="w-col w-col-4">
							        		<?php 
												if ( has_post_thumbnail() ) {
													the_post_thumbnail('bio-image');
												} 
							        		?>
							        	</div>
							        	<div class="w-col w-col-8">
									        <h4 class="heading-text padding centered">
										        <?php the_title(); ?>
									        </h4>
									        <div class="title-text">
									        	<h5><?php the_field('title'); ?></h5>
									        </div>
						        			<p class="body-text"><?php echo $post->post_content; ?></p>
						        			<?php edit_post_link(); ?>
						        		</div>
						        	</div>
						    	</div>
						         
						    <?php endwhile;
						     
						    // use reset postdata to restore orginal query
						    wp_reset_postdata();
					    echo'</div>'; //.panel.panel-default
				    echo'</div>';//.tab-pane
				 
				 ?>

			</div><!-- .tab-content -->
		</div><!-- #content -->
	</div><!-- #primary -->
</div><!-- #main-content -->
<?php include (TEMPLATEPATH . '/inc/our-investors.php' ); ?>

<?php
// get_sidebar();
get_footer();