<div class="category-divider">
    <div class="w-container">
        <h2><?php the_sub_field ('list_image_heading', false, false); ?></h2>
        <div class="feature-row feature-row-wide-padding">
            <?php if( have_rows('list_image') ): ?>
            <?php while( have_rows('list_image') ): the_row(); ?>
                <div class="investor-logo">
                    <?php 

                    $image = get_sub_field('image');

                    if( !empty($image) ): ?>

                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

                    <?php endif; ?>
                </div>

            <?php endwhile; ?>
            <?php endif; ?>
        </div><!-- .4-column-feature-row -->
    </div>
</div>
