<?php
/*
Template Name: Leadership
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
				<?php
					$terms = get_terms( 'leadership_categories', array(
				    'hide_empty' => 0
				) );
				?>

				<?php

					echo'<ul id="leadership-tabs-nav" class="leadership-nav" role="tablist">';
					$counter = 0;
					// now run a query for each leadership family
					foreach( $terms as $term ) {
					 	
					    // Define the query
					    $args = array(
					        'post_type' => 'leadership',
					        'leadership_categories' => $term->slug
					    );
					    
					    $query = new WP_Query( $args );
					             
					    // output the term name in a heading tag               
					    echo'<li role="presentation" class="';
					    if ($counter == 0) {
					    	echo 'active';
					    }
					    echo '">';
					    echo'<a class="text-link search" href="#' . sanitize_title_with_dashes($term->name) . '" id="' . sanitize_title_with_dashes($term->name) . '-tab" role="tab" data-toggle="tab" aria-controls="' . sanitize_title_with_dashes($term->name) . '" aria-expanded="true">';
					    echo $term->name;
					    echo'</a>';
					    echo'</li>';
					    $counter++; 
					} 
				    // use reset postdata to restore orginal query
				    wp_reset_postdata(); 
				?>
			</div><!-- .search-results -->

			<div id="leadership-tabs-Content" class="tab-content"> 

			<?php
				$x = 0;
				$accordion_counter = 0;
				// now run a query for each leadership family
				foreach( $terms as $term ) {
				     
				    // Define the query
				    $args = array(
				        'post_type' => 'leadership',
				        'leadership_categories' => $term->slug
				    );

				    // output the term name in a heading tag 
				    echo'<div role="tabpanel" class="tab-pane fade';
					    if ( $x == 0 ) {
					    	echo' active in';
					    }
					    echo'" id="' . sanitize_title_with_dashes($term->name) . '" aria-labelledby="' . sanitize_title_with_dashes($term->name) . '-tab">'; 
					    	echo'<div class="panel panel-leadership">';          
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
						    $x++;
					    echo'</div>'; //.panel.panel-default
				    echo'</div>';//.tab-pane
				 
				} ?>
				<div role="tabpanel" class="tab-pane fade" id="all" aria-labelledby="all-tab">
					<div class="panel panel-leadership">
						<?php
							// now run a query for each leadership family
							foreach( $terms as $term ) {
							     
							    // Define the query
							    $args = array(
							        'post_type' => 'leadership',
							        'leadership_categories' => $term->slug
							    );

								    $query = new WP_Query( $args );
								        // Start the Loop
								        while ( $query->have_posts() ) : $query->the_post(); ?>
								 		<div id="post-<?php the_ID(); ?>" class="leadership-content-block">
											<h4 class="panel-title">
										        <?php the_title(); ?>
									        </h4>
								        	<div class="leadership-block">
								        		<p class="body-text"><?php echo $post->post_content; ?></p>
								        	</div>
								    	</div>
								         
								    <?php endwhile;
								    // use reset postdata to restore orginal query
								    wp_reset_postdata();
							} 
						?>
					</div><!-- .panel.panel-default -->
				</div><!-- .all-tab -->

			</div><!-- .tab-content -->
		</div><!-- #content -->
	</div><!-- #primary -->
</div><!-- #main-content -->
<?php include (TEMPLATEPATH . '/inc/our-investors.php' ); ?>

<?php
// get_sidebar();
get_footer();