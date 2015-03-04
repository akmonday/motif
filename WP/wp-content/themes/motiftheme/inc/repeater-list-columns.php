<div class="category-divider">
    <div class="w-container">
        <?php if( get_sub_field('list_columns_heading') ): ?>
            <h4 class="heading-text">
                <?php the_sub_field('list_columns_heading', false, false); ?>
            </h4>
        <?php endif; ?>
        <div class="w-row facts-row">

           <?php
                if(get_sub_field('number_of_columns') == "one")
                {
            ?>
            <?php if( have_rows('column_one_list') ): ?>
            <?php while( have_rows('column_one_list') ): the_row(); ?>

                <div class="w-col w-col-6 benefit-column-1">
                    <ul class="job-list padded">
                    <?php if ( get_sub_field('list_item_column1') ) { ?>
                        <li class="job-list-item">
                            <span class="job-text"><?php the_sub_field ('list_item_column1', false, false); ?></span>
                        </li>
                    <?php } ?>
                    </ul>
                </div>

            <?php endwhile; ?>
            <?php endif; ?>


            <?php
                }
            ?>

            <?php
                 if (get_sub_field('number_of_columns') == "two")
                {
            ?>
                <div class="w-col w-col-6 benefit-column-1">
                    <ul class="job-list padded">
                        <?php if( have_rows('column_one_list') ): ?>
                        <?php while( have_rows('column_one_list') ): the_row(); ?>

                                <?php if ( get_sub_field('list_item_column1') ) { ?>
                                    <li class="job-list-item">
                                        <span class="job-text"><?php the_sub_field ('list_item_column1', false, false); ?></span>
                                    </li>
                                <?php } ?>

                        <?php endwhile; ?>
                        <?php endif; ?>
                    </ul>
                </div>

                <div class="w-col w-col-6 benefit-column-1">
                    <ul class="job-list padded">
                        <?php if( have_rows('column_two_list') ): ?>
                        <?php while( have_rows('column_two_list') ): the_row(); ?>


                                <?php if ( get_sub_field('list_item_column2') ) { ?>
                                    <li class="job-list-item">
                                        <span class="job-text"><?php the_sub_field ('list_item_column2', false, false); ?></span>
                                    </li>
                                <?php } ?>


                        <?php endwhile; ?>
                        <?php endif; ?>
                    </ul>
                </div>

            <?php
                }
            ?>
        </div>


        <?php
             if (get_sub_field('list_columns_horizontal_list') == "yes")
            {
        ?>
            <?php if ( get_sub_field('list_columns_horizontal_list_heading') ) { ?>
                <h4 class="heading-text"><?php the_sub_field ('list_columns_horizontal_list_heading', false, false); ?></h4>
            <?php } ?>

            <div class="w-row">

                <?php if( have_rows('list_columns_horizontal_list_repeater') ): ?>
                <?php while( have_rows('list_columns_horizontal_list_repeater') ): the_row(); ?>
                        <div class="w-col w-col-3 w-col-small-6 w-col-medium-6 fact-column">
                           
                            <?php 

                            $image = get_sub_field('list_columns_horizontal_list_image');

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


                            <img class="list-columns-image" src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">

                            <?php endif; ?>

                       
                            <div class="horizon-percent <?php the_sub_field('list_columns_horizontal_list_color'); ?> <?php the_sub_field('list_columns_horizontal_list_font-size'); ?>">
                                <?php the_sub_field('list_columns_horizontal_list_heading', false, false); ?>
                            </div>
                            <div class="horizon-text green <?php the_sub_field('list_columns_horizontal_list_font-size'); ?> italic-font">
                                <?php the_sub_field('list_columns_horizontal_list_text', false, false); ?>
                            </div>
                        </div>
                <?php endwhile; ?>
                <?php endif; ?>

            </div><!-- .w-row -->

        <?php
            }
        ?>
    </div>
</div>

