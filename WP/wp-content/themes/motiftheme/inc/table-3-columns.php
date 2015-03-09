<div class="category left-align table-3-column">
	<div class="w-container table">
		<div class="w-hidden-small w-hidden-tiny table">


<?php
		$left_column_width = get_sub_field ('table3_left_column_width');
		$mid_column_width = get_sub_field ('table3_mid_column_width');
		$right_column_width = get_sub_field ('table3_right_column_width'); 
	?>

		<?php if ( get_sub_field('table_3_column_heading') ) { ?>
			<h4 class="heading-text left-align"><?php the_sub_field('table_3_column_heading'); ?></h4>
		<?php } ?>
		    
			<div class="w-row grid-title-row">
				
				<div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 grid-title-block">

					<div class="grid-title">&nbsp;<?php the_sub_field('table_3_column1_heading_text'); ?></div>
				</div>

				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-title-block">

					<div class="grid-title"><?php the_sub_field('table_3_column2_heading_text'); ?></div>
				</div>
				
				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-title-block">

					<div class="grid-title"><?php the_sub_field('table_3_column3_heading_text'); ?></div>
				</div>
			</div>

		<?php if( have_rows('table_3_column_repeater') ): ?>
		<?php while( have_rows('table_3_column_repeater') ): the_row(); ?>

			<div class="w-row grid-row">

				<div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 grid-block">
					<div class="grid-text bold">
					    <?php the_sub_field('table_3_column1_row_text'); ?>
					</div>
				</div>
				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-block">
					<div class="grid-text">
					<?php the_sub_field('table_3_column2_row_text'); ?>
				    </div>
				</div>
				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-block">
					<div class="grid-text">
					<?php the_sub_field('table_3_column3_row_text'); ?>
				  </div>
				</div>

			</div>

		<?php endwhile; ?>
		<?php endif; ?>

		</div>



		<!-- small table here -->



		<div class="w-hidden-main w-hidden-medium table">



		<?php if ( get_sub_field('table_3_column_heading') ) { ?>
			<h4 class="heading-text left-align"><?php the_sub_field('table_3_column_heading'); ?></h4>
		<?php } ?>


		
		 <!-- title 1 -->
		<div class="w-row grid-title-row">
				
				<div class="w-col w-col-8 grid-block no-break">

					<div class="grid-title">&nbsp;<?php the_sub_field('table_3_column2_heading_text'); ?></div>
				</div>
		    </div>
		<?php if( have_rows('table_3_column_repeater') ): ?>
		<?php while( have_rows('table_3_column_repeater') ): the_row(); ?>
		    
		    <div class="w-row grid-row">
		    	<div class="w-col w-col-8 grid-block">
		    		<div class="grid-text">
                     <strong><?php the_sub_field('table_3_column1_row_text'); ?></strong>
					 <?php the_sub_field('table_3_column2_row_text'); ?>
		    		</div>
		    	</div>
		    </div>

		<?php endwhile; ?>
		<?php endif; ?>
				
				<!-- title 2 -->
		<div class="w-row grid-title-row">
				
				<div class="w-col w-col-8 grid-block no-break">

					<div class="grid-title">&nbsp;<?php the_sub_field('table_3_column3_heading_text'); ?></div>
				</div>
		 </div>
		<?php if( have_rows('table_3_column_repeater') ): ?>
		<?php while( have_rows('table_3_column_repeater') ): the_row(); ?>
		    
		    <div class="w-row grid-row">
		    	<div class="w-col w-col-8 grid-block">
		    		<div class="grid-text">
                     <strong><?php the_sub_field('table_3_column1_row_text'); ?></strong>
					 <?php the_sub_field('table_3_column3_row_text'); ?>
		    		</div>
		    	</div>
		    </div>

		<?php endwhile; ?>
		<?php endif; ?>




			</div>

		

	



		</div>
</div>
</div>