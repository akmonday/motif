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
	<div id="motif-post-type-sidebar" class="motif-post-type-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-motif-post-type' ); ?>
	</div><!-- #Search-sidebar -->
</div><!-- #supplementary -->
