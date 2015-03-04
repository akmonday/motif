
<?php 
	if( get_sub_field('heading') ): 
?>
<div class="difference" style="background-image: url('<?php the_sub_field('banner_image'); ?>');">
	<div class="w-container">
		<h1 class="heading-white">
			<?php the_sub_field('heading', false, false); ?>
		</h1>
		<p class="body-text white"><?php the_sub_field('banner_body_text', false, false ); ?></p>
	</div>
</div>
<?php 
	else : 
?>
<div class="difference about" style="background-image: url('<?php the_sub_field('banner_image'); ?>');">
	<div class="w-container">
		<div class="w-container about-containter">
			<p class="category-text white"><?php the_sub_field('banner_body_text', false, false ); ?></p>
		</div>
	</div>
</div>
<?php 
	endif; 
?>
