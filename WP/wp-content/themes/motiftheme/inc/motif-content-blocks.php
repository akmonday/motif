<?php

// check if the flexible content field has rows of data
if( have_rows('motif_content_block') ):

     // loop through the rows of data
    while ( have_rows('motif_content_block') ) : the_row();

// ==============================================================================

		if( get_row_layout() == 'hero' ): ?>

		<?php include (TEMPLATEPATH . '/inc/hero.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'video_hero' ): ?>

		<?php include (TEMPLATEPATH . '/inc/video-hero.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'features' ): ?>

		<?php include (TEMPLATEPATH . '/inc/repeater-features.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'slider_coworkers' ): ?>

		<?php include (TEMPLATEPATH . '/inc/slider-coworkers.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'repeater_list_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/repeater-list-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'excerpt_list' ): ?>

		<?php include (TEMPLATEPATH . '/inc/excerpt-list.php' ); ?>

<!-- ============================================================================== -->


		<?php  elseif( get_row_layout() == 'feature_blocks' ): ?>

		<?php include (TEMPLATEPATH . '/inc/feature-blocks.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'images_list' ): ?>

		<?php include (TEMPLATEPATH . '/inc/images-list.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'divider' ): ?>

		<?php include (TEMPLATEPATH . '/inc/divider.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'newsworthy_motifs' ): ?>

		<?php // include (TEMPLATEPATH . '/inc/newsworthy-motifs.php' ); ?>

		<?php // include (TEMPLATEPATH . '/inc/newsworthy-motifs-carousel-3.php' ); ?>
		<?php include (TEMPLATEPATH . '/inc/motif-of-the-week.v4.php' ); ?>


<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'high_performing_motifs' ): ?>

		<?php include (TEMPLATEPATH . '/inc/newsworthy-motifs-carousel.v4.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'jobs_list' ): ?>

		<?php include (TEMPLATEPATH . '/inc/jobs-list.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'advisor' ): ?>

		<?php include (TEMPLATEPATH . '/inc/advisor.php' ); ?>

<!-- ============================================================================== -->



		<?php  elseif( get_row_layout() == 'content_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/content-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'in_the_news' ): ?>		

		<?php include (TEMPLATEPATH . '/inc/in-the-news-mobile.php' ); ?>

		<?php include (TEMPLATEPATH . '/inc/in-the-news-desktop.php' ); ?>

		<?php // include (TEMPLATEPATH . '/inc/in-the-news.v3.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'better_reasons' ): ?>

		<?php include (TEMPLATEPATH . '/inc/better-reasons.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'contact_banner' ): ?>

		<?php include (TEMPLATEPATH . '/inc/contact-banner.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'banner_team' ): ?>

		<?php include (TEMPLATEPATH . '/inc/banner-team.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'banner_careers' ): ?>

		<?php include (TEMPLATEPATH . '/inc/banner-careers.php' ); ?>

<!-- ============================================================================== -->


		<?php  elseif( get_row_layout() == 'sign_up' ): ?>

		<?php include (TEMPLATEPATH . '/inc/sign-up.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'page_title_background' ): ?>

		<?php include (TEMPLATEPATH . '/inc/page-title-background.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'featured_spark' ): ?>

		<?php include (TEMPLATEPATH . '/inc/featured-spark.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'sparkline_news' ): ?>

		<?php include (TEMPLATEPATH . '/inc/sparkline-news.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'latest_sparks' ): ?>

		<?php include (TEMPLATEPATH . '/inc/latest-sparks.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'reasons' ): ?>

		<?php include (TEMPLATEPATH . '/inc/reasons.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'reasons_float_left' ): ?>

		<?php include (TEMPLATEPATH . '/inc/reasons-float-left.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'reasons_float_right' ): ?>

		<?php include (TEMPLATEPATH . '/inc/reasons-float-right.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'banner' ): ?>

		<?php include (TEMPLATEPATH . '/inc/banner.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'how_to' ): ?>

		<?php include (TEMPLATEPATH . '/inc/how-to.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'banner_w_3_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/banner-w-3-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'banner_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/banner-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'check_list_table' ): ?>

		<?php include (TEMPLATEPATH . '/inc/check-list-table.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'motif_post_type' ): ?>

		<?php include (TEMPLATEPATH . '/inc/motif-post-type.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'motif_in_the_news' ): ?>

		<?php include (TEMPLATEPATH . '/inc/motif-in-the-news.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'cat_sub_cat_list' ): ?>

		<?php include (TEMPLATEPATH . '/inc/cat-sub-cat-list.php' ); ?>


<!-- ============================================================================== -->


		<?php  elseif( get_row_layout() == 'sparkline_news' ): ?>

		<?php include (TEMPLATEPATH . '/inc/sparkline-news.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'newbs_banner' ): ?>

		<?php include (TEMPLATEPATH . '/inc/newbs-banner.php' ); ?>


<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'newbs_post_section' ): ?>

		<?php include (TEMPLATEPATH . '/inc/newbs-post-section.php' ); ?>


<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'list_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/list-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'table_3_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/table-3-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'table_2_columns' ): ?>

		<?php include (TEMPLATEPATH . '/inc/table-2-columns.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'wysiwyg' ): ?>

		<?php include (TEMPLATEPATH . '/inc/wysiwyg.php' ); ?>

<!-- ============================================================================== -->

		<?php  elseif( get_row_layout() == 'footer_disclaimer' ): ?>

		<?php include (TEMPLATEPATH . '/inc/footer-disclaimer.php' ); ?>


    <?php   endif;

    endwhile;

else :

    // no layouts found

endif;

?>