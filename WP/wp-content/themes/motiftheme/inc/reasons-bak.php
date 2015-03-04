
<div class="reason" style="background-image: url('<?php the_sub_field('background_image'); ?>');">
    <div class="w-container">
        <div class="w-row reason-row">

        <?php if(get_sub_field('page_layout') == "float_left") { ?> 
            <div class="w-col w-col-4 reason-column-1">
                <div class="reason-image">
                    <?php 

                        $image = get_sub_field('featured_image');

                        if( !empty($image) ): ?>

                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

                    <?php endif; ?>
                </div>
            </div>

            <div class="w-col w-col-8">
                <h4 class="heading-text"><?php the_sub_field('heading'); ?></h4>
                <p class="body-text"><?php the_sub_field('body_text', false, false ); ?></p>
                <?php if( get_sub_field('button_text') ): ?>
                    <a class="button large" href="<?php the_sub_field('button_url'); ?>">
                        <?php the_sub_field('button_text'); ?>
                    </a>
                <?php endif; ?>
            </div>  
        <?php } ?>

        <?php if(get_sub_field('page_layout') == "float_right") { ?> 

            <div class="w-col w-col-8">
                <h4 class="heading-text"><?php the_sub_field('heading'); ?></h4>
                <p class="body-text"><?php the_sub_field('body_text', false, false ); ?></p>
                <?php if( get_sub_field('button_text') ): ?>
                    <a class="button large" href="<?php the_sub_field('button_url'); ?>">
                        <?php the_sub_field('button_text'); ?>
                    </a>
                <?php endif; ?>
            </div> 

            <div class="w-col w-col-4 reason-column-1">
                <div class="reason-image">
                    <?php 

                        $image = get_sub_field('featured_image');

                        if( !empty($image) ): ?>

                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

                    <?php endif; ?>
                </div>
            </div> 
        <?php } ?>





        </div>
    </div>
</div>