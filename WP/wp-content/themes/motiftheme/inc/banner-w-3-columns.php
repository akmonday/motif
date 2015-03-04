<div class="catalog no-shadow">
	<div class="w-container">
		<h2><?php the_sub_field('heading'); ?></h2>
		<div class="w-row expenses-row">
<?php

// check if the flexible content field has rows of data
if( have_rows('column_block') ):

     // loop through the rows of data
    while ( have_rows('column_block') ) : the_row();

// ==============================================================================

		if( get_row_layout() == 'horizon' ): ?>

			<div class="w-col w-col-4 expenses-column">
				<div class="horizon-banner" style="background-image: url('<?php the_sub_field('horizon_banner_image'); ?>');">
					<div class="horizon-text"><?php the_sub_field('horizon_text', false, false); ?></div>
					<div class="horizon-percent"><?php the_sub_field('horizon_percent', false, false); ?></div>
				</div>
				<div class="expenses-text">
					<p><?php the_sub_field('expenses_text', false, false); ?></p>
				</div>
				<p class="body-text"><?php the_sub_field('body_text', false, false); ?></p>
				<a class="feature-link" href="<?php the_sub_field('feature_link_url', false, false); ?>">
					<?php the_sub_field('feature_link_text', false, false); ?> ›
				</a>

			</div>

		<?php  elseif( get_row_layout() == 'standard' ): ?>

			<div class="w-col w-col-4 expenses-column">
				<div class="graph">
					<img src="<?php the_sub_field('img_src'); ?>" alt="motif graph.png">
				</div>
				<div class="expenses-text"><?php the_sub_field('expenses_text', false, false); ?></div>
				<p class="body-text"><?php the_sub_field('body_text', false, false); ?></p>
			</div>

		    <?php   
		    		endif;

		    		endwhile;

					else :

		    		// no layouts found

					endif;
			?>

		</div>
	</div>
</div>

