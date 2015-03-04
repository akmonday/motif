<div class="catalog">
    <div class="w-container">
        <div class="w-row category-row">
            <div class="w-col w-col-8 category-column-1">
                <p class="category-text"><?php the_sub_field('heading'); ?></p>
                <?php query_posts( 'post_type=motif_post_type'); ?>
                <?php
                    // Start the Loop.
                    while ( have_posts() ) : the_post(); ?>

                    <h4 class="heading-text padding"><?php the_title(); ?></h4>
                
                     <p class="body-text-2"><?php the_excerpt(); ?></p>
                     <a class="feature-link padding" href="<?php echo get_permalink(); ?>"> Read More ›</a>

                    <?php  // If comments are open or we have at least one comment, load up the comment template.
                        if ( comments_open() || get_comments_number() ) {
                            comments_template();
                        }
                    endwhile;
                ?>
            </div>

            <?php get_sidebar('motif-post-type'); ?>
 
        </div>
    </div>
</div>