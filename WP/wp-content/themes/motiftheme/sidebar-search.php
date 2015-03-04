<?php
/**
 * The Search Sidebar
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

if ( ! is_active_sidebar( 'sidebar-4' ) ) {
	return;
}
?>

<div id="supplementary">
	<div id="search-sidebar" class="search-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-4' ); ?>
		<?php include (TEMPLATEPATH . '/inc/social-links.php' ); ?>
	</div><!-- #Search-sidebar -->
</div><!-- #supplementary -->
