<div class="feature-row four-column-feature-row">
    <?php if( have_rows('features_repeater') ): ?>
    <?php while( have_rows('features_repeater') ): the_row(); ?>

        <div class="features-items">

            <div class="w-clearfix reason-image">
                <a class="w-inline-block image-link" href="#" data-ix="hover">
                    <img class="image-mask" src="<?php bloginfo('template_url'); ?>/images/motif-mask.png" height="210" alt="motif-mask.png">
                    <img class="feature-image" src="<?php the_sub_field ('feature_image'); ?>" height="210" alt="invest-img.png" data-ix="scale">
                </a>
            </div>
            <?php if ( get_sub_field('heading_text') ) { ?>
                <div class="expenses-text">
                    <?php the_sub_field ('heading_text'); ?> <br>
                </div>
            <?php } ?>
            <?php if ( get_sub_field('feature_text') ) { ?>
                <div class="feature-text">
                    <?php the_sub_field ('feature_text'); ?> <br>
                    <?php the_sub_field ('feature_text1'); ?>
                </div>
            <?php } ?>
            <?php if ( get_sub_field('body_text') ) { ?>
                <div class="body-text padding">
                     <?php the_sub_field ('body_text'); ?>
                </div>
            <?php } ?>
            <a class="feature-link" href="<?php the_sub_field ('feature_link_url'); ?>">
                <?php the_sub_field ('feature_link_text'); ?> ›
            </a>
        </div>
        
    <?php endwhile; ?>
    <?php endif; ?>
</div><!-- .4-column-feature-row -->