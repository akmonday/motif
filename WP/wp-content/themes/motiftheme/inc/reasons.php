<div class="reason" style="background-image: url('<?php the_sub_field('reasons_background_image'); ?>');">
    <div class="w-container">
        <div class="w-row reason-row">
            <div class="w-col w-col-4 reason-column-1">
                <div class="reason-image">
                    <img class="feature-image" src="<?php the_sub_field ('reasons_featured_image'); ?>" height="210" alt="invest-img.png" data-ix="scale">
                </div>
            </div>

            <div class="w-col w-col-8">
                <h4 class="heading-text"><?php the_sub_field('reasons_heading'); ?></h4>
                <p class="body-text"><?php the_sub_field('reasons_body_text', false, false ); ?></p>
                <?php if( get_sub_field('reasons_button_text') ): ?>
                    <a class="button large" href="<?php the_sub_field('reasons_button_url'); ?>">
                        <?php the_sub_field('reasons_button_text'); ?>
                    </a>
                <?php endif; ?>
            </div>  

        </div>
    </div>
</div>