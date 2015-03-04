<div class="w-hidden-main w-hidden-medium list-section">
    <img src="<?php bloginfo('template_url'); ?>/images/chart-image.jpg" alt="545d31abd61602d4452b8d56_chart-image.jpg" width="100%">
</div>

<div class="check-list-header">
    <div class="w-container w-hidden-small w-hidden-tiny">
        <div class="w-row check-list-row">
            <div class="w-col w-col-7 w-col-small-7 w-col-tiny-7 list-column">
                <div class="bold-body-text"><?php the_sub_field('check_list_col1_text'); ?></div>
            </div>
            <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 green-list-column">
                <div class="bold-body-text white"><?php the_sub_field('check_list_col2_text'); ?></div>
            </div>

            <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 centered-list-column">
                <div class="bold-body-text"><?php the_sub_field('check_list_col3_text'); ?></div>
            </div>

            <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 centered-list-column">
                <div class="bold-body-text"><?php the_sub_field('check_list_col4_text'); ?></div>
            </div>

            <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 centered-list-column">
                <div class="bold-body-text"><?php the_sub_field('check_list_col5_text'); ?></div>
            </div>
        </div>
    </div>
</div>


<div class="w-hidden-small w-hidden-tiny list-section">

<?php if( have_rows('check_list_repeater') ): ?>
<?php while( have_rows('check_list_repeater') ): the_row(); ?>


    <div class="list-section-wrapper">
        <div class="w-container">
            <div class="w-row check-list-row">
                <div class="w-col w-col-7 w-col-small-7 w-col-tiny-7 list-column">
                    <div class="body-text listed"><?php the_sub_field('check_list_column1_benefit'); ?></div>
                </div>

                <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 green-list-column">
                    <?php
                        if(get_sub_field('check_list_checkbox2') == "yes")
                        {
                    ?>
                    <img class="white-check" src="<?php bloginfo('template_url'); ?>/images/white-check.png" alt="white-check.png">
                    <?php 
                        }
                    ?>
                </div>

                <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 centered-list-column">
                    <?php
                        if(get_sub_field('check_list_checkbox3') == "yes")
                        {
                    ?>
                    <img class="grey-check" alt="grey-check.png" src="<?php bloginfo('template_url'); ?>/images/grey-check.png">
                    <?php 
                        }
                    ?>
                </div>

                <div class="w-col w-col-2 w-col-small-2 w-col-tiny-2 centered-list-column">
                    <?php
                        if(get_sub_field('check_list_checkbox4') == "yes")
                        {
                    ?>
                    <img class="grey-check" alt="grey-check.png" src="<?php bloginfo('template_url'); ?>/images/grey-check.png">
                    <?php 
                        }
                    ?>
                </div>

                <div class="w-col w-col-1 w-col-small-1 w-col-tiny-1 centered-list-column">
                    <?php
                        if(get_sub_field('check_list_checkbox5') == "yes")
                        {
                    ?>
                    <img class="grey-check" alt="grey-check.png" src="<?php bloginfo('template_url'); ?>/images/grey-check.png">
                    <?php 
                        }
                    ?>
                </div>

            </div>
        </div>
    </div>

<?php endwhile; ?>
<?php endif; ?>



</div>