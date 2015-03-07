<?php 
    $reason_slug =  sanitize_title_with_dashes(get_sub_field('heading'));
?>
<div class="reason reasson-float-left" style="background-image: url('<?php the_sub_field('background_image'); ?>'); filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src='<?php the_sub_field('background_image'); ?>', sizingMethod='scale');">
    <a id="<?php echo $reason_slug; ?>" class="reason-anchor" href="#"></a>
    <div class="w-container">
        <div class="w-row reason-row">

           <div class="w-col w-col-4 reason-column-1">
                <div class="reason-image">
                    <img class="feature-image" src="<?php the_sub_field ('featured_image'); ?>" height="210" alt="invest-img.png" data-ix="scale">
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

        </div>
    </div>
</div>