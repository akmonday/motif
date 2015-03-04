<div class="share-post-block">
    <div class="sub-category"><p><?php the_field('social_links_heading', 'option'); ?></p></div>
    <?php if(get_field('social_links', 'option')): ?>

        <ul>

        <?php while(has_sub_field('social_links', 'option')): ?>
            <?php 

            $image = get_sub_field('social_link_image');

            if( !empty($image) ): 

                // vars
                $url = $image['url'];
                $title = $image['title'];
                $alt = $image['alt'];
                $caption = $image['caption'];

                ?>

            <li>
                <a class="w-inline-block social-link no-padding" href="<?php the_sub_field('social_link_url'); ?>">
                    <img width="32" src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
                </a>    
            </li>
            
            <?php endif; ?>

        <?php endwhile; ?>

        </ul>

    <?php endif; ?>
</div>