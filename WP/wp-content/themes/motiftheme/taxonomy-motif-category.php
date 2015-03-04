<?php
/*
*  Template Name: Motif Category Landing
*/
get_header();

function motif_get_logo( $term ) {

	$img = get_field('category_image_src'  , $term->taxonomy . '_' . $term->term_id );

	return $img;
}

function motif_get_excerpt( $term ){

	remove_filter('acf_the_content', 'wpautop');

	$excerpt = get_field('excerpt'  , $term->taxonomy . '_' . $term->term_id );

	return $excerpt;
}

function motif_get_end_of_content_excerpt( $term ){

	remove_filter('acf_the_content', 'wpautop');

	$end_of_content_excerpt = get_field('end_of_content_excerpt'  , $term->taxonomy . '_' . $term->term_id );

	return $end_of_content_excerpt;
}

function motif_get_cat_land_desc( $term ){

	remove_filter('acf_the_content', 'wpautop');

	$cat_land_desc = get_field('cat_land_desc'  , $term->taxonomy . '_' . $term->term_id );

	return $cat_land_desc;
}



// ==============================================================================================

$term = get_queried_object();

if($term instanceof WP_Post) {  // This is a page view


	$taxo = 'motif-category';
	
	$args = array(
					'type'                     => 'post',
					'child_of'                 => 0,
					'parent'                   => 0,
					'orderby'                  => 'name',
					'order'                    => 'ASC',
					'hide_empty'               => false,
					'hierarchical'             => true,
					'exclude'                  => '',
					'include'                  => '',
					'number'                   => '',
					'taxonomy'                 => $taxo,
					'pad_counts'               => false,
	); 

	$categories_list = get_categories($args);

// ===========================================================
// ===========================================================
?>
	<div class="page-title">
		<div class="w-container">
			<h1>Motif Categories</h1>
			<p class="body-text margin-bottom-30">We group our extensive catalog of motifs into broad categories that range from industry to mega trends to trading strategies. Start discovering motifs through the categories that interest you most.</p>
		</div>
	</div>
    
   
    
		<?php
		//echo "<PRE>";print_r($categories_list);echo "</pre>";
		foreach( $categories_list as $category ) {
		?>
		<div class="category-divider">
			<div class="w-container">
				<?php $logo_url = motif_get_logo( $category );
					if($logo_url){ ?>
			        <div class="category-image">
						<a class="motif-category-link" href="<?php echo get_term_link( $category ); ?>">
							<img src="<?php echo $logo_url; ?>">
						</a>
			        </div><!-- .category-image -->
				<?php } ?>
					
					<h2 class="category-heading-text">
						<a class="motif-category-link" href="<?php echo get_term_link( $category ); ?>">
							<?php echo $category->name; ?>
						</a>
					</h2>
					
			        <p class="expenses-text">
			            <?php echo $category->count; ?> motifs
			        </p>
			        <p class="body-text"><?php echo motif_get_cat_land_desc( $category); ?></p>
				<?php   
					$args = array(
					  'orderby' 	=> 'name',
					  'order' 		=> 'ASC',
					  'parent' 		=> $category->term_id,
					  'taxonomy'	=> $category->taxonomy,
					  'hide_empty'	=> false,
					  );

					$subcat_list = get_categories($args);
					if(!empty($subcat_list)) {
					
					?>

						<div class="sub-category padding">
							<p>Subcategories</p>
						</div>
					<?php		
						foreach($subcat_list as $subcat) {
					?>
						<div class="body-text block">
							<a class="text-link padding" href="<?php echo get_term_link( $subcat ); ?>"><?php echo $subcat->name; ?></a>
						</div>
				<?php 			
						}  // foreach($subcat_list as $subcat)
					} // if !empty($subcat_list)
				?>

			</div><!-- .w-container -->
		</div><!-- .category-divider -->
<?php
	}
?>
    

    
    


<?php

	
// ===========================================================
// ===========================================================

} else { // This is a taxonomy view
	


// ===========================================================

?>

   <div class="page-title">
   		<div class="w-container category-container">
			<?php $logo_url = motif_get_logo( $term );
				if($logo_url){ ?>
	            <div class="category-image">
					<img src="<?php echo $logo_url; ?>">
	            </div>
			<?php } ?>
	        <h1 class="category-headline"><?php echo $term->name; ?></h1>
	        <div class="expenses-text"> <?php echo $term->count; ?> motifs</div>
	        <p class="body-text margin-bottom-30"><?php echo $term->description; ?></p> 
	    </div>
    </div>


    <div class="divider">
    	<div class="w-container">
    		<div class="w-row">
    			<div class="w-col w-col-8 w-col-small-6">
    				<h4><?php the_field('motif_category_divider_text', 'option'); ?></h4>
    			</div>
    			<div class="w-col w-col-4 w-col-small-6 w-clearfix">
    				<a class="motif-link" href="<?php the_field('motif_category_divider_button_url', 'option'); ?>"><?php the_field('motif_category_divider_button_text', 'option'); ?> ›</a>
    			</div>
    		</div>
    	</div>
    </div>


	<?php include (TEMPLATEPATH . '/inc/high-performing-motifs.php' ); ?>





	<div class="catalog no-shadow">
		<div class="w-container">
			<div class="w-row category-row">
				<div class="w-col w-col-8 category-column-1">
					<?php

						$args = array(
						  'orderby' 	=> 'name',
						  'order' 		=> 'ASC',
						  'parent' 		=> $term->term_id,
						  'taxonomy'	=> $term->taxonomy,
						  'hide_empty'	=> false,
						  );

						$categories_list = get_categories($args);

						if(!empty($categories_list)){
					?>    
		        	<h3 class="category-text text-align-left">Explore all subcategories:</h3>
					<?php
						foreach($categories_list as $category) {
					?>        
					<div class="motif-single-subcategory">
						<h4 class="heading-text padding">
							<a class="motif-category-link" href="<?php echo get_term_link( $category ); ?>">
								<?php echo $category->name; ?>
							</a>
						</h4>
						
						<p class="body-text-2">
							<?php echo motif_get_excerpt( $category ); ?>
						</p>
						<a class="feature-link padding clear-both" href="<?php echo get_term_link( $category ); ?>">Learn More ›</a>
					</div>
					<?php
							}
						} else {
					?>
					<div class="body-text">
						<?php echo motif_get_end_of_content_excerpt( $term ); ?>
					</div>
					<?php
						}
					?>
				</div><!-- .w-col w-col-8 category-column-1 -->   

				<div class="w-col w-col-4">
					<?php get_sidebar( 'blog' ); ?>		
				</div>

				<?php	
					} // This is a taxonomy view
				?>
			</div><!-- .w-row category-row -->
		</div><!-- .w-container -->
	</div><!-- .catalog no-shadow -->

	<div class="sign-up">
		<div class="w-container">
			<div class="promo-text">
				<?php //the_field('motif_category_bottom_text', 'option'); ?>
Start investing in <?php echo $term->name; ?> motifs!
			</div>
			<a class="button large" href="<?php the_field('motif_category_bottom_button_url', 'option'); ?>">
				<?php the_field('motif_category_bottom_button_text', 'option'); ?>
			</a>
		</div>
	</div>
<?php get_footer('motif-category'); ?>