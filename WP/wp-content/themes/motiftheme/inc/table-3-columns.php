<div class="category left-align table-3-column">
	<div class="w-container table">

		<?php if ( get_sub_field('table_3_column_heading') ) { ?>
			<h4 class="heading-text left-align"><?php the_sub_field('table_3_column_heading'); ?></h4>
		<?php } ?>
		<div class="overscroll">
		<div class="widthfull table">
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

			<div class="w-row grid-row <?php if( get_sub_field('category_image')) { echo "page-title"; } ?>">
				<div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 grid-block">
					<div class="grid-text"><?php the_sub_field('table_3_column1_row_text'); ?></div>
				</div>
				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-block">
					<div class="grid-text"><?php the_sub_field('table_3_column2_row_text'); ?></div>
				</div>
				<div class="w-col w-col-5 w-col-small-5 w-col-tiny-5 grid-block">
					<div class="grid-text"><?php the_sub_field('table_3_column3_row_text'); ?></div>
				</div>
			</div>

		<?php endwhile; ?>
		<?php endif; ?>

		</div>
		</div>
	</div>
</div>