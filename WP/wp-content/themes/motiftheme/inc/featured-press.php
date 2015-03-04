<div class="featured-spark">
    <?php
        if ( motiftheme_has_featured_posts() ) {
    ?>
        <div id="carousel-featured-content" class="carousel slide" data-ride="carousel-false">
            <div class="w-container spark-container">
                <div id="featured-content" class="featured-content">
                    <div class="featured-content-inner">
                        <div class="w-container">
                            <h4 class="heading-text left-align">Featured Press</h4>
                        </div>
                        <div class="carousel-inner" role="listbox">
                            <?php
                                $counter = 0;
                                $featured_posts = motiftheme_get_featured_posts();
                                foreach ( (array) $featured_posts as $order => $post ) :
                                    setup_postdata( $post );

                            ?>
                                <div class="item <?php if ($counter == 0) {
                                        echo 'active';
                                    } ?>">

                                    <div id="post-<?php the_ID(); ?>" class="w-row sparkline-row">
                                    
                                        <?php
                                            // Output the featured image.
                                            if ( has_post_thumbnail() ) :
                                        ?>
                                        <div class="w-col w-col-3 spark-column-1">
                                            <div class="featured-image-wrap-outer-border">
                                                <div class="featured-image-wrap-inner-border">
                                                    <div class="featured-image-wrap">
                                                        <a class="post-thumbnail" href="<?php the_permalink(); ?>">
                                                            <?php motiftheme_post_thumbnail(); ?>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- .spark-column-1 -->

                                        <?php
                                            endif;
                                        ?>
                                        
                                        <div class="w-col w-col-9 spark-column-2">
                                            <header class="entry-header">
                                                <?php the_title( '<h4 class="entry-title heading-text spark"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">','</a></h4>' ); ?>
                                                <?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
                                                    <span class="blog-date">
                                                        <span class="cat-links">
                                                            <?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?></span>
                                                    </span>
                                                <?php endif; ?>

                                                    <span class="blog-date">
                                                        | 
                                                        <?php
                                                            if ( 'post' == get_post_type() )
                                                                motiftheme_posted_on();

                                                            if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
                                                        ?>
                                                        <?php
                                                            endif;

                                                            edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
                                                        ?>
                                                    </span><!-- .entry-meta -->
                                            </header><!-- .entry-header -->
                                            <?php the_excerpt(); ?>
                                        </div><!-- .spark-column-2 -->
                                    </div><!-- .sparkline-row -->
                                </div><!-- .item -->

                            <?php   
                                $counter++;    
                                endforeach;

                                wp_reset_postdata();
                            ?>
                        </div><!-- .carousel-inner -->
                        <ol class="carousel-indicators">
                            <?php

                                $x = 0;
                                $featured_posts = motiftheme_get_featured_posts();
                                foreach ( (array) $featured_posts as $order => $post ) :
                                    setup_postdata( $post );

                            ?>
                                <li class="<?php if ($x == 0) {
                                        echo 'active';
                                    } ?> w-slider-dot" data-target="#carousel-featured-content" data-slide-to="<?php echo $x; ?>">
                                </li>
                            <?php   
                                
                                $x++;    
                                endforeach;

                                wp_reset_postdata();  
                            ?>
                        </ol>
                        <a class="carousel-featured-content-next-prev" href="#carousel-featured-content" role="button" data-slide="prev">
                            <div class="w-slider-arrow-left w-hidden-small w-hidden-tiny">
                                <div class="icon-slider-left slider-nav-icon">&#x276c;</div>
                            </div>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-featured-content-next-prev" href="#carousel-featured-content" role="button" data-slide="next">
                            <div class="w-slider-arrow-right w-hidden-small w-hidden-tiny">
                                <div class="icon-slider-right slider-nav-icon">&#x276d;</div>
                            </div>
                            <span class="sr-only">Next</span>
                        </a>
                    </div><!-- .featured-content-inner -->
                </div><!-- #featured-content .featured-content -->
            </div><!-- .spark-container -->
        </div><!-- .carousel-slide -->
    <?php
        } // end if ( motiftheme_has_featured_posts()) {}
    ?>
</div><!-- .featured-spark -->

