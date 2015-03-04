<div class="hero" style="background-image: url('<?php the_sub_field('img_src'); ?>');">
	<div class="w-container hero-container">
		<h1 class="hero-title"><?php the_sub_field('hero_title'); ?></h1>
		<div class="hero-text"><?php the_sub_field('hero_text'); ?></div>
		<a class="w-inline-block play-button" href="#">
			<img src="<?php bloginfo('template_url'); ?>/images/play-button.svg" width="70" alt="play-button.svg">
			<div class="video-text"><?php the_sub_field('video_text'); ?></div>
		</a>
	</div>
</div>