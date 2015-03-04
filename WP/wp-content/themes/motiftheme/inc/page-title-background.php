<div class="page-title <?php 
						if ( get_sub_field('background_image') ) {
							echo "background-2";
						}
						?>
				        <?php 

				        if( get_sub_field('page_title_background_margin_bottom') )
				        {
				            echo "margin-bottom";
				        }
				        else
				        {
				           echo "no-margin-bottom";       
				        }
				        ?>" 
						<?php if ( get_sub_field('background_image') ) {
							echo 'style="background-image: url(';
							echo the_sub_field('background_image');
							echo ');"';	
						}
						?>
						><!-- page-title -->
	<div class="w-container">
		<h1><?php the_sub_field('heading_text', false, false); ?></h1>
		<div class="body-text"><?php the_sub_field('body_text'); ?></div>

		<?php if ( get_sub_field('large_cta_button_text') ) { ?>
			<div>
				<a class="button large button-padding wide" href="<?php the_sub_field('large_cta_button_url'); ?>">
					<?php the_sub_field('large_cta_button_text'); ?>
				</a>
			</div>
		<?php } ?>

	</div>
</div>