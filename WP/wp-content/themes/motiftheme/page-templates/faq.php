<?php
/*
Template Name: FAQs
*/
get_header(); ?>
<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();

		// Include the page content template.
		get_template_part( 'content', 'page' );

	endwhile;
?>
<div class="catalog no-shadow">
    <div class="w-container faq-container">

		<div class="faq-tabs" role="tabpanel">
			<div class="break-2"></div>			
			<div class="search-results">
				<?php
					$terms = get_terms( 'faq_categories', array(
				    'hide_empty' => 0
				) );
				?>

				<?php

					echo'<ul id="faq-tabs-nav" class="faq-nav" role="tablist">';
					$counter = 0;
					// now run a query for each faq family
					foreach( $terms as $term ) {
					 	
					    // Define the query
					    $args = array(
					        'post_type' => 'faq',
					        'faq_categories' => $term->slug
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

					echo'<li role="presentation">';
		    		echo'<a class="text-link search" href="#all" id="all-tab" role="tab" data-toggle="tab" aria-controls="all" aria-expanded="true">';
				    echo 'All';
				    echo'</a>';
				    echo'</li>';
					echo'</ul>';
				    // use reset postdata to restore orginal query
				    wp_reset_postdata(); 
				?>
			</div><!-- .search-results -->
			<div class="break-2"></div>

			<div id="faq-tabs-Content" class="tab-content"> 

			<?php
				$x = 0;
				$accordion_counter = 0;
				// now run a query for each faq family
				foreach( $terms as $term ) {
				     
				    // Define the query
				    $args = array(
				        'post_type' => 'faq',
				        'faq_categories' => $term->slug
				    );

				    // output the term name in a heading tag 
				    echo'<div role="tabpanel" class="tab-pane fade';
					    if ( $x == 0 ) {
					    	echo' active in';
					    }
						
					    echo'" id="' . sanitize_title_with_dashes($term->name) . '" aria-labelledby="' . sanitize_title_with_dashes($term->name) . '-tab">'; 
					    	echo'<div class="panel panel-faq">';          
						    $query = new WP_Query( $args );
						        // Start the Loop
						        while ( $query->have_posts() ) : $query->the_post(); ?>
						 		<div id="post-<?php the_ID(); ?>" class="faq-content-block">
							        <h4 class="panel-title">
								        <a class="collapse-panel collapsed" data-toggle="collapse" data-parent="#accordion" href="#<?php the_ID(); ?>" aria-expanded="true" aria-controls="<?php the_ID(); ?>">
								        	<?php the_title(); ?><?php edit_post_link('edit', '<p class="pull-right">', '</p>'); ?>
								        </a>
							        </h4>

							        <div id="<?php the_ID(); ?>" class="panel-collapse collapse <?php if ( $x == 4 ) { echo 'in';} ?>" role="tabpanel" aria-labelledby="heading-<?php the_ID(); ?>">
							        	<div class="faq-block body-text">
							        		<?php the_content(); ?>
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
					<div class="panel panel-faq">
						<?php
							// now run a query for each faq family
							foreach( $terms as $term ) {
							     
							    // Define the query
							    $args = array(
							        'post_type' => 'faq',
							        'faq_categories' => $term->slug
							    );

								    $query = new WP_Query( $args );
								        // Start the Loop
								        while ( $query->have_posts() ) : $query->the_post(); ?>
								 		<div id="post-<?php the_ID(); ?>" class="faq-content-block">
											<h4 class="panel-title">
										        <a class="collapse-panel collapsed" data-toggle="collapse" data-parent="#accordion" href="#<?php the_ID(); ?>-all" aria-expanded="true" aria-controls="<?php the_ID(); ?>-all">
										        	<?php the_title(); ?>
										        </a>
									        </h4>
									        <div id="<?php the_ID(); ?>-all" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-<?php the_ID(); ?>">
									        	<div class="faq-block body-text">
									        		<?php the_content(); ?>
									        	</div>
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

<?php
// get_sidebar();
get_footer();