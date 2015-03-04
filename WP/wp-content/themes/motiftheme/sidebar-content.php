<?php
/**
 * The Content Sidebar
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

if ( ! is_active_sidebar( 'sidebar-4' ) ) {
	return;
}
?>
<div id="content-sidebar" class="content-sidebar widget-area" role="complementary">
	<?php dynamic_sidebar( 'sidebar-4' ); ?>
</div><!-- #content-sidebar -->
