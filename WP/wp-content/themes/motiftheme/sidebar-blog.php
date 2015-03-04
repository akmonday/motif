<?php
/**
 * The Search Sidebar
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

if ( ! is_active_sidebar( 'sidebar-5' ) ) {
	return;
}
?>

<div id="supplementary" class="supplementary-sidebar">
	<div id="blog-sidebar" class="blog-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-5' ); ?>
	</div><!-- #Search-sidebar -->
</div><!-- #supplementary -->