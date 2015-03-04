<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */
?>
<div class="page-title">
	<div class="w-container">
		<h1><?php the_title(); ?></h1>
		<?php if ( $post->post_content ) { ?>
			<p class="body-text"><?php echo $post->post_content; ?></p>
		<?php } ?>
	</div>
</div>