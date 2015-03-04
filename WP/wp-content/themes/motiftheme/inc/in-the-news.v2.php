<div class="w-hidden-medium w-hidden-small w-hidden-tiny news">    
    <div class="w-container">
        <div id="in-the-news-desktop" class="tab-content">
                <!-- This tab-pane is here so there is something active when page loads -->
                <div role="tabpanel" class="tab-pane news-tab-pane active in" id="in-the-news-panel<?php echo ($x + 1); ?>" aria-labelledby="in-the-news-tab<?php echo ($x + 1); ?>">
                    <div class="quote-text">
                        <p>"Motif is making thematic investing available on a larger scale for lower fees."</p>
                    </div>
                    <div class="author-text">- Paul Sullivan,
                        <strong><em>New York Times</em></strong>
                    </div>
                </div>
            <?php 
                $x = 0;
                $repeater = get_sub_field('tabber');
                foreach( $repeater as $r ) {
            ?>

                <div role="tabpanel" class="tab-pane news-tab-pane <?php if ($counter == 0) { echo "active in"; }  ?>" id="in-the-news-panel<?php echo ($x + 1); ?>" aria-labelledby="in-the-news-tab<?php echo ($x + 1); ?>">
                    <div class="quote-text">
                        <?php echo $r['tab_content']; ?>
                    </div>
                    <div class="author-text">- <?php echo $r['author_text']; ?>,
                        <strong><em><?php echo $r['strong_text']; ?></em></strong>
                    </div>
                </div>
            <?php

                    $x++;
                }
            ?>

        </div>
        <ul id="myTab" class="nav news-nav-tabsv2" role="tablist">
            <?php 
                $counter = 0;
                foreach ($repeater as $r) {
            ?>
             <li role="presentation" class="<?php if ($counter == 0) { echo "active"; }  ?>">
                <a href="#in-the-news-panel<?php echo ($counter + 1); ?>" id="in-the-news-tab<?php echo ($counter + 1); ?>" role="tab" data-toggle="tab" aria-controls="in-the-news<?php echo ($counter + 1); ?>" aria-expanded="true">
                    <img width="<?php echo $r['tab_width']; ?>px" src="<?php echo $r['tab_title']; ?>" alt="nytimes-logo.svg">
                </a>
            </li>
            <?php
                $counter++;
                }
            ?>
        </ul>
    </div>
</div>