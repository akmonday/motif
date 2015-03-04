<div class="features <?php if( get_sub_field('category_image')) { echo "page-title"; } ?> 
        <?php if( get_sub_field('repeater_features_class')) { ?>
        <?php the_sub_field ('repeater_features_class'); ?>
        <?php } ?>
        <?php 

        if( get_sub_field('divider_box_shadow_bottom') )
        {
            echo "divider-box-shadow-bottom";
        }
        else
        {
           echo "no-divider-box-shadow-bottom";       
        }
        ?>
        <?php 

        if( get_sub_field('divider_box_shadow_top') )
        {
            echo "divider-box-shadow-top";
        }
        else
        {
           echo "no-divider-box-shadow-top";       
        }
        ?>
        <?php 

        if( get_sub_field('repeater_features_border_bottom') )
        {
            echo "border-bottom";
        }
        else
        {
           echo "no-border-bottom";       
        }
        ?>
        ">
    <?php  

        $box_shadow = get_sub_field('box_shadow'); 

        if( is_array($box_shadow) && in_array( 'top', $box_shadow ) ): 

        echo '<div class="box-shadow-top"></div>'; 

        else: 

        endif; 

    ?>

    <?php  

        $box_shadow = get_sub_field('box_shadow'); 

        if( is_array($box_shadow) && in_array( 'bottom', $box_shadow ) ): 

        echo '<div class="box-shadow-bottom"></div>'; 

        else: 

        endif; 

    ?>

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
    <div class="feature-row padding-<?php the_sub_field('padding'); ?> font-<?php the_sub_field('font_size'); ?> font-color-<?php the_sub_field('features_font_color'); ?>">
        <?php if( have_rows('features_row') ): ?>
        <?php while( have_rows('features_row') ): the_row(); ?>

            <div class="features-items infonam-features-items">

                <div class="reason-image">
                    <a class="w-inline-block image-link" href="<?php the_sub_field ('feature_link_url'); ?>" data-ix="hover">
                        <img class="image-mask" src="<?php bloginfo('template_url'); ?>/images/motif-mask.png" height="210" alt="motif-mask.png">
                        <img class="scale-hover" src="<?php the_sub_field ('feature_image'); ?>" height="210" alt="invest-img.png">
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