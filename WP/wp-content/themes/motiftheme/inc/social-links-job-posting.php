<div class="share-post-block share-job-listing">
    <div class="sub-category"><p>Share this post</p></div>
    <?php if(get_field('social_links_job_posting', 'option')): ?>

        <ul>

        <?php while(has_sub_field('social_links_job_posting', 'option')): ?>
            <?php 

            $image = get_sub_field('social_link_job_posting_image');

            if( !empty($image) ): 

                // vars
                $url = $image['url'];
                $title = $image['title'];
                $alt = $image['alt'];
                $caption = $image['caption'];

                ?>

            <li>
                <a class="w-inline-block social-link no-padding" href="<?php the_sub_field('social_link_job_posting_url'); ?>">
                    <img width="32" src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
                </a>    
            </li>
            
            <?php endif; ?>

        <?php endwhile; ?>

        </ul>

    <?php endif; ?>
</div>