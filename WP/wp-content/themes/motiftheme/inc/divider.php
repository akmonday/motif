<div class="divider">
	<div class="w-container">
		<h4><?php the_sub_field('heading'); ?></h4>
		<?php if(get_sub_field('see_more_text')): ?>
		<a class="motif-link" href="<?php the_sub_field('see_more_url'); ?>"><?php the_sub_field('see_more_text'); ?> ›</a>
		<?php endif; ?>
	</div>
</div>