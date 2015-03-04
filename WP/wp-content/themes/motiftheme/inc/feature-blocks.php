<div class="services">
    <div class="w-container">

        <div class="w-row learn-row">
            <?php if( have_rows('feature_blocks_repeater') ): ?>
            <?php while( have_rows('feature_blocks_repeater') ): the_row(); ?>

            <div class="w-col w-col-6">
                <div class="feature-block">
                    <div class="w-clearfix reason-image">
                        <a class="w-inline-block image-link" href="#" data-ix="hover">
                            <img class="image-mask" src="<?php bloginfo('template_url'); ?>/images/motif-mask.png" alt="motif-mask.png" height="210">
                            <img style="transform: scale(0.9); transition: transform 500ms ease 0s;" class="feature-image" src="<?php the_sub_field ('image'); ?>" alt="newbs-icons.png" data-ix="scale" height="210">
                        </a>
                    </div>
                    <div class="expenses-text"><?php the_sub_field ('heading'); ?></div>
                    <div class="body-text"><?php the_sub_field ('text'); ?></div>
                    <a class="feature-link" href="<?php the_sub_field ('link_url'); ?>"><?php the_sub_field ('link_text'); ?> ›</a>
                </div>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>
</div><!-- learn-row -->

<div class="w-row learn-row">
    <?php if( have_rows('feature_blocks_repeater1') ): ?>
    <?php while( have_rows('feature_blocks_repeater1') ): the_row(); ?>

    <div class="w-col w-col-6">
        <div class="feature-block">
            <div class="w-clearfix reason-image">
                <a class="w-inline-block image-link" href="#" data-ix="hover">
                    <img class="image-mask" src="<?php bloginfo('template_url'); ?>/images/motif-mask.png" alt="motif-mask.png" height="210">
                    <img style="transform: scale(0.9); transition: transform 500ms ease 0s;" class="feature-image" src="<?php the_sub_field ('image'); ?>" alt="newbs-icons.png" data-ix="scale" height="210">
                </a>
            </div>
            <div class="expenses-text"><?php the_sub_field ('heading'); ?></div>
            <div class="body-text"><?php the_sub_field ('text'); ?></div>
            <a class="feature-link" href="<?php the_sub_field ('link_url'); ?>"><?php the_sub_field ('link_text'); ?> ›</a>
        </div>
    </div>

<?php endwhile; ?>
<?php endif; ?>

</div><!-- learn-row -->

</div>
</div>