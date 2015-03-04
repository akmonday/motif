<?php if( get_sub_field('background_image') ): ?>
	<div class="reason what-motif
			    <?php 

			    if( get_sub_field('better_reasons_pull_left') )
			    {
			        echo "pull-left";
			    }
			    else
			    {
			  // do nothing
			    }
			    ?>" style="background-image: url('<?php the_sub_field('background_image'); ?>');  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src='<?php the_sub_field('background_image'); ?>', sizingMethod='scale');  -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src='<?php the_sub_field('background_image'); ?>', sizingMethod='scale');">
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
	<div class="better<?php 

        if( get_sub_field('better_reasons_no-border-bottom') )
        {
            echo " border-bottom";
        }
        else
        {
           echo " no-border-bottom";       
        }
        ?>
		<?php 

        if( get_sub_field('better_reasons_margin_bottom') )
        {
            echo " margin-bottom-100";
        }
        else
        {
           // do nothing    
        }
        ?>">
		<div class="w-container">
			<div class="w-row">
				<div class="w-col w-col-6 w-hidden-small w-hidden-tiny better-column-1
			    <?php 

			    if( get_sub_field('better_reasons_pull_left') )
			    {
			        echo "pull-left";
			    }
			    else
			    {
			    	echo "pull-right";
			    }
			    ?>">
					<img class="better-image" src="<?php the_sub_field('featured_image'); ?>" alt="Featured Image">
				</div>
				<div class="w-col w-col-6 better-column-2">
					<h4 class="heading-text"><?php the_sub_field('heading_text', false, false); ?></h4>
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
	