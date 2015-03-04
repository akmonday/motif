
<?php if( have_rows('list_view_repeater') ): ?>

<?php while ( have_rows('list_view_repeater') ) : the_row(); ?>


    <div class="w-row catalog-row">
        <div class="w-col w-col-6">
            <h4 class="heading-text"><?php the_sub_field('heading'); ?></h4>
        </div>
    
        <div class="w-col-12 clearboth">

            <div class="w-col w-col-6 w-col-stack catalog-column-1">

                <?php if( have_rows('how_to_content_block') ): ?>

                <?php while ( have_rows('how_to_content_block') ) : the_row(); ?>

                <?php if( get_row_layout() == 'content' ): ?>

                <div class="w-row list-row">
                    <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                        <div class="marker">
                            <div><?php the_sub_field('marker'); ?></div>
                        </div>
                    </div>
                    <div class="w-col w-col-10 w-col-small-10 w-col-tiny-10 inner-column">
                        <div class="body-text"><?php the_sub_field('body_text'); ?></div>
                    </div>
                </div><!-- list-row (content) -->

                <?php  elseif( get_row_layout() == 'list' ): ?>

                <div class="w-row list-row">
                    <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                        <div class="marker">
                            <div><?php the_sub_field('marker'); ?></div>
                        </div>
                    </div>
                    <div class="w-col w-col-10 w-col-small-10 w-col-tiny-10 inner-column">
                        <div class="body-text"><?php the_sub_field('body_text'); ?></div>
                        <ul class="list margin-left-40">
                            <?php if( have_rows('list_item_repeater') ): ?>
                            <?php while ( have_rows('list_item_repeater') ) : the_row(); ?>
                            <li>
                                <span class="list-item"><?php  the_sub_field('list_item'); ?></span>
                            </li>
                            <?php  endwhile; ?>
                            <?php else : ?>
                            <?php endif; ?>                                       
                        </ul>
                    </div><!-- inner-column -->
                </div><!-- list-row -->
                <?php endif; ?>
                <?php endwhile; ?>
                <?php else : ?>
                <?php endif; ?>

            </div><!-- catalog-column-1 -->
			<?php 

			$image = get_sub_field('featured_image');

			if( !empty($image) ): 

				// vars
				$url = $image['url'];
				$title = $image['title'];
				$alt = $image['alt'];
				$caption = $image['caption'];

				// thumbnail
				$size = 'thumbnail';
				$thumb = $image['sizes'][ $size ];
				$width = $image['sizes'][ $size . '-width' ];
				$height = $image['sizes'][ $size . '-height' ]; ?>

		
            <div class="catalog-img-wrap">
                 <img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
            </div>

			<?php endif; ?>


        </div><!-- w-col-12 clearboth -->
    </div><!-- catalog-row --> 
    <div class="break"></div>



<?php  endwhile; ?>

<?php else : ?>

<?php endif; ?>