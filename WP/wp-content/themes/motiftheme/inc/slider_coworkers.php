<div class="coworkers">
    <div id="slider-coworkers" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#slider-coworkers" data-slide-to="0" class="active">1</li>
            <li data-target="#slider-coworkers" data-slide-to="1">2</li>
            <li data-target="#slider-coworkers" data-slide-to="2">3</li>
        </ol>

        <!-- Wrapper for slides -->
        <h2><?php the_sub_field ('slider_coworkers_heading', false, false); ?></h2>
        <div class="carousel-inner slider-carousel-inner" role="listbox">

            <?php if( have_rows('slider_coworkers_slide') ): ?>
            <?php while( have_rows('slider_coworkers_slide') ): the_row(); ?>
                <div class="item <?php the_sub_field('first_slide'); ?>">
                    <div class="w-container spark-container co-workers">
                        <div class="w-row learn-row motifers">


                            <?php if( have_rows('slider_coworkers_slide_item') ): ?>
                            <?php while( have_rows('slider_coworkers_slide_item') ): the_row(); ?>

                                <div class="w-col w-col-3 w-col-medium-6">
                                    <div class="feature-block">

                                        <?php 
                                            $image = get_sub_field('slider_coworkers_slide_item_image');
                                            if( !empty($image) ):
                                        ?>

                                        <div class="reason-image">
                                            <div class="ini-center-image">
                                            <img class="" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                            </div>    
                                            <img class="image-mask ini-image-mask" src="http://saltbranding.net/motif/wp-content/themes/motiftheme/images/motif-mask.png" alt="motif-mask.png" height="210">    
                                        </div>

                                        <?php
                                            endif; 
                                        ?>
                                        <div class="expenses-text top-padding"><?php the_sub_field ('slider_coworkers_slide_item_name', false, false); ?></div>
                                        <div class="title-text"><?php the_sub_field ('slider_coworkers_slide_item_title', false, false); ?></div>
                                        <div class="body-text padding small"><?php the_sub_field ('slider_coworkers_slide_item_text', false, false); ?></div>
                                    </div>
                                </div>

                            <?php endwhile; ?>
                            <?php endif; ?> 

                            
                        </div><!-- .w-row.learn-row.motifers -->
                    </div><!-- .w-container.spark-container.co-workers -->
                </div><!-- .item active -->

            <?php endwhile; ?>
            <?php endif; ?> 

        </div>

        <!-- Controls -->
       <a href="#slider-coworkers" role="button" data-slide="prev">
            <div class="w-slider-arrow-left w-hidden-small w-hidden-tiny">
                <div class="icon-slider-left slider-nav-icon">&#x276c;</div>
            </div>
            <span class="sr-only">Previous</span>
        </a>
        <a href="#slider-coworkers" role="button" data-slide="next">
            <div class="w-slider-arrow-right w-hidden-small w-hidden-tiny">
                <div class="icon-slider-right slider-nav-icon">&#x276d;</div>
            </div>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>