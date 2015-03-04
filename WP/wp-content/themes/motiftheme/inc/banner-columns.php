<?php
    if(get_sub_field('banner_columns_number_of_columns') == "one")
    {
?>

<div class="category-divider">
 	<div class="w-container centered-containter">
		<?php if ( get_sub_field('banner_columns_heading') ) { ?>
 			<h2 class="heading-text big-heading-text"><?php the_sub_field ('banner_columns_heading', false, false); ?></h2>
		<?php } ?>
		<?php if ( get_sub_field('column_1_horizontal_banner_text') ) { ?>
 		<div>
 			<div class="horizon-banner">
 				<div class="horizon-text"><?php the_sub_field ('column_1_horizontal_banner_text', false, false); ?></div>
 				<div class="horizon-percent"><?php the_sub_field ('column_1_horizontal_banner_percent', false, false); ?></div>
 			</div>
 		</div>
		<?php } ?>

		<?php if ( get_sub_field('column_1_body_content') ) { ?>
 				<p class="body-text padding"><?php the_sub_field ('column_1_body_content', false, false); ?></p>
			 		<?php if ( get_sub_field('column_1_body_content_disclaimer_text') ) { ?>
			 		<br>
			 		<p class="required-text"><?php the_sub_field ('column_1_body_content_disclaimer_text', false, false); ?>
				 		<!-- Button trigger modal -->
				 		<a type="button" class="disclaimer-text-modal-btn" data-toggle="modal" data-target="#myModal">
				 			<?php the_sub_field ('column_1_body_content_disclaimer_button_text', false, false); ?>
				 		</a>

				 		<!-- Modal -->
				 		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				 			<div class="modal-dialog">
				 				<div class="modal-content">
				 					<a href="#" class="close" data-dismiss="modal" aria-label="Close"><img class="close-button" width="20" alt="close-btn.svg" src="<?php bloginfo('template_url'); ?>/images/close-btn.png"></a>
				 					<div class="modal-body">
				 						<?php the_sub_field ('column_1_body_content_modal_body_text', false, false); ?>
				 					</div>
				 				</div>
				 			</div>
				 		</div>

			 		</p>
					<?php } ?>
		<?php } ?>
 	</div>
 </div>

<?php
    } elseif (get_sub_field('banner_columns_number_of_columns') == "two") {
 ?>
 <div class="category-divider grey">
 	<div class="w-container centered-containter">
 		<?php if ( get_sub_field('banner_columns_heading') ) { ?>
 			<h2 class="heading-text big-heading-text"><?php the_sub_field ('banner_columns_heading', false, false); ?></h2>
		<?php } ?>
 		<div class="w-row row">
 			<div class="w-col w-col-6 column">
 				<div class="padded-block">
		  		<?php if ( get_sub_field('banner_columns_column_1_graph_image') ) { ?>
		  			<div class="graph">
		  				<img src="<?php the_sub_field ('banner_columns_column_1_graph_image', false, false); ?>" alt="5499c1599cddb0ad4a55767e_graph-03.png">
					</div>
				<?php } ?>
		  		<?php if ( get_sub_field('banner_columns_column_1_heading') ) { ?>
		  			<div class="expenses-text"><?php the_sub_field ('banner_columns_column_1_heading', false, false); ?></div>
				<?php } ?>
				<?php if ( get_sub_field('banner_columns_column_1_body_text') ) { ?>
		  			<p class="body-text padding"><?php the_sub_field ('banner_columns_column_1_body_text', false, false); ?></p>
				<?php } ?>
 				</div>
 			</div>
 			<div class="w-col w-col-6 column">
 				<div class="padded-block">
		  		<?php if ( get_sub_field('banner_columns_column_2_graph_image') ) { ?>
		  			<div class="graph">
		  				<img src="<?php the_sub_field ('banner_columns_column_2_graph_image', false, false); ?>" alt="5499c1599cddb0ad4a55767e_graph-03.png">
					</div>
				<?php } ?>
		  		<?php if ( get_sub_field('banner_columns_column_2_heading') ) { ?>
		  			<div class="expenses-text"><?php the_sub_field ('banner_columns_column_2_heading', false, false); ?></div>
				<?php } ?>
				<?php if ( get_sub_field('banner_columns_column_2_body_text') ) { ?>
		  			<p class="body-text padding"><?php the_sub_field ('banner_columns_column_2_body_text', false, false); ?></p>
				<?php } ?>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>


<?php
    } elseif (get_sub_field('banner_columns_number_of_columns') == "three") {
 ?>

 <div class="category-divider grey">
 	<div class="w-container centered-containter">
 		<h2 class="heading-text">3 Minimize Your Investment Expenses</h2>
 		<div class="w-row row">
 			<div class="w-col w-col-6 column">
 				<div class="padded-block">
 					<div class="graph"><img src="images/graph-03.png" alt="5499c1599cddb0ad4a55767e_graph-03.png">
 					</div>
 					<div class="expenses-text">Management Fees</div>
 					<p class="body-text padding">Mutual funds and ETFs charge management fees. Motif does not charge monthly fees.</p>
 				</div>
 			</div>
 			<div class="w-col w-col-6 column">
 				<div class="padded-block">
 					<div class="graph"><img src="images/graph-04.png" alt="5499c16189e1eb365817b97c_graph-04.png">
 					</div>
 					<div class="expenses-text">Trading Commissions</div>
 					<p class="body-text padding">Pay just $9.95 to trade up to 30 stocks within a motif.</p>
 				</div>
 			</div>
 			<div class="w-col w-col-6 column">
 				<div class="padded-block">
 					<div class="graph"><img src="images/graph-04.png" alt="5499c16189e1eb365817b97c_graph-04.png">
 					</div>
 					<div class="expenses-text">Trading Commissions</div>
 					<p class="body-text padding">Pay just $9.95 to trade up to 30 stocks within a motif.</p>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>

<?php   	
    } 
?>