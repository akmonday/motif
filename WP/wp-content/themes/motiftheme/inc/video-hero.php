<section class="inline-hero-image">
	<div class="hero hero-banner-inline-css hero" style="background-image: url('<?php the_sub_field('video_hero_img_src'); ?>');">
	<div class="w-container hero-container container video-container">
		<div class="hero-caption">
			<h1 class="hero-title"><?php the_sub_field('video_hero_hero_title'); ?></h1>
			<div class="hero-text"><?php the_sub_field('video_hero_hero_text'); ?></div>
			<?php if(get_sub_field('video_hero_video_text')) { ?>
			<a id="start-video" class="btn btn-purple-transparent">
				<img src="<?php bloginfo('template_url'); ?>/images/play-button.svg" width="70" alt="play-button.svg">
				<div class="video-text"><?php the_sub_field('video_hero_video_text'); ?></div>
			</a>
			<?php } ?>	
		</div><!-- hero-caption -->
	</div><!-- container -->
</div><!-- hero-banner-inline-css -->
</section><!-- Hero Banner -->