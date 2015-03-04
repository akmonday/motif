<div class="category left-align table-2-column">
	<div class="w-container table">
	<?php
		$left_column_width = get_sub_field ('table2_left_column_width');
		$right_column_width = get_sub_field ('table2_right_column_width'); 
	?>

		<?php if ( get_sub_field('table_2_column_heading') ) { ?>
			<h4 class="heading-text left-align"><?php the_sub_field('table_2_column_heading'); ?></h4>
		<?php } ?>

		<div class="table w-col-<?php the_sub_field ('table2_width'); ?> <?php the_sub_field ('table2_class'); ?>">
			<div class="w-row grid-title-row">
				<div class="w-col w-col-<?php if ($left_column_width)  { echo $left_column_width; } else { echo '8';}?> grid-block no-break">
					<div class="grid-title"><?php the_sub_field('table_2_column1_heading_text'); ?></div>
				</div>
				<div class="w-col w-col-<?php if ($right_column_width)  { echo $right_column_width; } else { echo '4';}?> grid-block no-break">
					<div class="grid-title">&nbsp;<?php the_sub_field('table_2_column2_heading_text'); ?></div>
				</div>
			</div>

		<?php if( have_rows('table_2_column_repeater') ): ?>
		<?php while( have_rows('table_2_column_repeater') ): the_row(); ?>

			<div class="w-row grid-row stroke">
				<div class="w-col w-col-<?php if ($left_column_width)  { echo $left_column_width; } else { echo '8';}?> grid-block stroke">
					<?php the_sub_field('table_2_column1_row_text'); ?>
				</div>
				<div class="w-col w-col-<?php if ($right_column_width)  { echo $right_column_width; } else { echo '4';}?> grid-block border-left">
					<?php the_sub_field('table_2_column2_row_text'); ?>
				</div>
			</div>

		<?php endwhile; ?>
		<?php endif; ?>

		</div>
	</div>
</div>