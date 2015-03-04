<?php
/**
 * The Search Sidebar
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

if ( ! is_active_sidebar( 'sidebar-7' ) ) {
	return;
}
?>

<div id="supplementary" class="newbs-sidebar">
	<div id="blog-sidebar" class="blog-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-7' ); ?>
	</div><!-- #Search-sidebar -->
</div><!-- #supplementary -->
