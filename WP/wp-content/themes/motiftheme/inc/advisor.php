<div class="advisor" style="background-image: url('<?php the_sub_field('advisor_img_src'); ?>');">
	<div class="w-container">
		<h3>
			<?php the_sub_field('advisor_heading_line_1'); ?><br>
			<?php the_sub_field('advisor_heading_line_2'); ?>
		</h3>
		<div class="advisor-text"><?php the_sub_field('advisor_text'); ?>&nbsp;</div>
		<a class="button large" href="<?php the_sub_field('advisor_button_url'); ?>">
			<?php the_sub_field('advisor_button_text'); ?>
		</a>
	</div>
</div>