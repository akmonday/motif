<?php
/**
 * Template Name: Site Map
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<div class="catalog no-shadow">
    <div class="w-container">
		<ul>
		<?php 
	
	wp_list_pages( 'exclude=103,109,157,7813,169,7972,7940,8919,7946' );
	
	?>
		</ul>
	</div>
</div>
<?php

get_footer();
