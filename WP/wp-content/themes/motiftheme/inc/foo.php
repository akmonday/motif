<?php if( get_sub_field('background_image') ): ?>
	<div class="reason what-motif" style="background-image: url('<?php the_sub_field('background_image'); ?>');">
		<div class="w-container">
			<div class="w-row reason-row">
				<div class="w-col w-col-6">
					<h4 class="heading-text"><?php the_sub_field('heading_text', false, false); ?></h4>
					<p class="body-text"><?php the_sub_field('body_text', false, false); ?></p>
					<a class="button large" href="<?php the_sub_field('button_url'); ?>">
						<?php the_sub_field('button_text'); ?>
					</a>
				</div>
				<div class="w-col w-col-6 w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny"></div>
			</div>
		</div>
	</div>
<?php else : ?>
	<div class="better">
		<div class="w-container">
			<div class="w-row">
				<div class="w-col w-col-6 w-hidden-small w-hidden-tiny better-column-1">
					<img class="better-image" src="<?php the_sub_field('featured_image'); ?>" alt="Featured Image">
				</div>
				<div class="w-col w-col-6 better-column-2">
					<h4 class="heading-text"><?php the_sub_field('heading_text1', false, false); ?></h4>
					<p class="body-text"><?php the_sub_field('body_text', false, false); ?></p>


					<?php if ( get_sub_field('button_text') ) { ?>
						<a class="button large" href="<?php the_sub_field('button_url'); ?>">
							<?php the_sub_field('button_text'); ?>
						</a>
					<?php } ?>

					<img class="w-hidden-main w-hidden-medium better-image" src="<?php the_sub_field('featured_image'); ?>" alt="Featured Image">
				</div>
			</div>
		</div> 
	</div>   
<?php endif; ?>
	