<div class="features <?php if( get_sub_field('category_image')) { echo "page-title"; } ?>">
    <div class="w-container">
        <div class="features-item-container">
        <?php if( get_sub_field('category_image')) { ?>

            <div class="category-image">
                <img src="<?php the_sub_field ('category_image'); ?>" alt="consumer-icons.png">
            </div>

        <?php } ?>

        <?php if( get_sub_field('features_heading')) { ?>
            <h2><?php the_sub_field('features_heading'); ?></h2>
         <?php } ?>

        <?php if( get_sub_field('expenses_text')) { ?>

                <div class="expenses-text"><?php the_sub_field ('expenses_text'); ?></div>
           
        <?php } ?>


        <?php if( get_sub_field('body_text') ): ?>
            <p class="body-text">
                <?php the_sub_field('body_text', false, false); ?>
            </p>
        <?php endif; ?>

<?php if( have_rows('features') ): ?>
<?php while( have_rows('features') ): the_row(); ?>
    <div class="feature-row padding-<?php the_sub_field('padding'); ?>">
        <?php if( have_rows('features_row') ): ?>
        <?php while( have_rows('features_row') ): the_row(); ?>

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
    </div>
<?php endwhile; ?>
<?php endif; ?>

</div><!-- .feature-row -->




</div>
</div>
</div>