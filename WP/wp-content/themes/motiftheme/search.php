<?php

/**

 * The template for displaying Search Results pages

 *

 * @package WordPress

 * @subpackage motiftheme

 * @since Twenty Fourteen 1.0

 */



get_header(); ?>

<?php if ( have_posts() ) : ?>
<div class="page-title search-title">

    <div class="w-container">

        <h1><?php the_field('search_heading_text', 'option'); ?></h1>

        <p class="body-text">

            Looking for a motif? Search our catalog <a href="https://www.motifinvesting.com/motifs#catalog=our&query=<?php printf( __( '%s', 'motiftheme' ), get_search_query() ); ?>">here</a>

        </p>

    </div>

</div>

<div class="catalog no-shadow search-body">

	<div class="w-container">

		<div class="w-row search-row">

			<div class="w-col w-col-6 w-col-stack search-column-1">

				<div class="search-results margin-bottom-20">
				
					<div class="show_category"> 
					
						<div class="search-results">
						
							<ul role="tablist" class="faq-nav" id="faq-tabs-nav">
							
								<li class="active" role="presentation">
								
									<a aria-expanded="true" aria-controls="tabs1" data-toggle="tab" role="tab"  href="#tabs1" class="text-link search">All</a>
								
								</li>
								
								<li  role="presentation">
								
									<a aria-expanded="true" aria-controls="tabs2" data-toggle="tab" role="tab"  href="#tabs2" class="text-link search">Pages</a>
								
								</li>
								<li role="presentation">
								
									<a aria-expanded="true" aria-controls="tabs3" data-toggle="tab" role="tab"  href="#tabs3" class="text-link search">Blogs</a>
								
								</li>
								
							</ul>
							
						</div>
						
					</div>
	
               			 </div>
               			 
                			<div class="article-wrap">
               
					<div  id="faq-tabs-Content" class="tab-content panel-container searchtab">
					
					<!--    ********************** All Search Result tab  *****************************  -->
					
						<div id="tabs1" class="tab-pane fade active in">
						
							<div class="w-row">
                    					         <div class="w-col w-col-5 w-col-small-7">
                 						      	      <div class="search-results-showing-bar">
	                            							<!--<p id="legend1"> </p>-->
	                            							<div id="element1" class="body-text"> </div>
	                            							
                        						     </div>	
                       				 		</div>
                    						<div class="w-col w-col-7 w-col-small-5 search-column-2">
                            							<span class="body-text">  
                           				 			<div class="wp-pagenavi">
											<span class="holder1 body-text wp-pagenavi"> <div class="wp-pagenavi"></div>	</span>
									</div>	
                          					  	</span>

                       					 	</div>

                		   				 </div> 
                		   				 <div class="break-2 padding"></div>
                		   				 <div id="itemContainer1">	
							 <?php 
                    					
								$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

								$AllSearch = new WP_Query("s=$s & showposts=-1");

 									if ( $AllSearch->have_posts() ) : ?>
						
                		    
                		 								
						 
											<?php

												while (  $AllSearch->have_posts() ) :  $AllSearch->the_post();
												
												if($post->post_type == 'page') { $page_ids[]=get_the_ID();  }
												 else{  $blog_ids[]=get_the_ID(); }	
					 	
					 									//if (is_page()) continue;
						
													get_template_part( 'content-search', get_post_format() );
								
											endwhile; wp_reset_query();
								
											else :  ?>
													<div class="page-content">
	
																<p>Sorry, No more pages found...</p>
													</div>
								
											<? endif;    
								                       
											?>
              					  				
								</div>
								</div>
					
					<!-- ************************    End Of All Result Tab     ****************************** -->
					
					<!-- ************************    Search Page Result Tab ******************************* -->
					
					
					<div id="tabs2" class="tab-pane fade">
					
					<div class="w-row">
                    					         <div class="w-col w-col-5 w-col-small-7">
                 						      	      <div class="search-results-showing-bar">
	                            							<!--<p id="legend2"> </p>-->
        										
        										<div id="element2" class="body-text"> </div>	 
                        						     </div>	
                       				 		</div>
                    						<div class="w-col w-col-7 w-col-small-5 search-column-2">
                            							<span class="body-text">  
                           				 			<div class="wp-pagenavi">
											<span class="holder2 body-text wp-pagenavi"> <div class="wp-pagenavi"></div>	</span>
									</div>	
                          					  	</span>

                       					 	</div>

                		   				 </div> 
                		   				  <div class="break-2 padding"></div>
                		   				 <div id="itemContainer2">	
				
							
							<?php
							if(!empty($page_ids)){
								
									$result = array_unique($page_ids);
								
									 foreach($result as $pid)	{
								 	
								 		$args = array(
													'p' => $pid, 
													'post_type' => 'any');
												
										$query =  new WP_Query($args);
									
										while ( $query->have_posts() ) : $query->the_post();  
									
											get_template_part( 'content-search', get_post_format() );
										
										endwhile; wp_reset_query();
										  
										} 
								
									} 	else 	 {  ?>
								
									<div class="page-content">
	
											<p>Sorry, No more pages found...</p>
									</div>
								<?php	}  ?>
				

						</div>
						</div>
					
					
					<!-- ************************    End Page Result Tab     ****************************** -->
					
					<!-- ************************    Search Blog Result Tab ******************************* -->
					
					
					<div id="tabs3" class="tab-pane fade">
					
							<div class="w-row">
                    					         <div class="w-col w-col-5 w-col-small-7">
                 						      	      <div class="search-results-showing-bar">
	                            							<!--<p id="legend3"> </p>-->
	                            							
	                            							<div id="element3" class="body-text"> </div>	 
        										
                        						     </div>	
                       				 		</div>
                    						<div class="w-col w-col-7 w-col-small-5 search-column-2">
                            							<span class="body-text">  
                           				 			<div class="wp-pagenavi">
											<span class="holder3 body-text wp-pagenavi"> <div class="wp-pagenavi"></div>	</span>
									</div>	
                          					  	</span>

                       					 	</div>

                		   				 </div>
                		   				  <div class="break-2 padding"></div> 
                		   				 <div id="itemContainer3">	
							
							<?php
							if(!empty($blog_ids)){
								
									$result = array_unique($blog_ids);
								
									 foreach($result as $bid)	{
								 	
								 		$args = array(
													'p' => $bid, 
													'post_type' => 'any');
												
										$query =  new WP_Query($args);
									
										while ( $query->have_posts() ) : $query->the_post();  
									
											get_template_part( 'content-search', get_post_format() );
										
										endwhile; wp_reset_query();
										  
										} 
								
									} 	else 	 {  ?>
								
									<div class="page-content">
	
											<p>Sorry, No more pages found...</p>
									</div>
								<?php	}  ?>
				

						</div>
					</div>
					
					
					
					<!-- ************************    End Blog Result Tab     ****************************** -->


				</div>
				
			</div>

            	<?php 

            	if (  $AllSearch->have_posts() ) {

            	?>

                <?php get_search_form(); ?>

                <?php 

            	}

                ?>

				</div><!-- .search-column-1 -->


				<div class="w-col w-col-6 w-col-stack search-results-column-2">

					

					<?php get_sidebar('search'); ?>



				</div><!-- .search-results-column-2 -->



		</div><!-- .search-row -->

	</div><!-- .w-container -->

</div><!-- .catalog --><?php
else :
						// If no content, include the "No posts found" template.
						get_template_part( 'content', 'none' );
endif;                        

 get_footer(); ?>

