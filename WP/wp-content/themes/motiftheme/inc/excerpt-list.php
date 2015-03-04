<div class="catalog no-box-shadow <?php the_sub_field ('excerpt_class', false, false); ?>">
	<div class="w-container">
		<div class="w-row category-row">
			<div class="w-col w-col-8 category-column-1">

			<?php if( have_rows('excerpt_list_repeater') ): ?>
            <?php while( have_rows('excerpt_list_repeater') ): the_row(); ?>
				<div>
					<?php if ( get_sub_field('excerpt_list_heading') ) { ?>
                        <h4 class="heading-text padding">
                            <a href="<?php the_sub_field ('excerpt_list_url', false, false); ?>"><?php the_sub_field ('excerpt_list_heading', false, false); ?></a>
                        </h4>
                    <?php } ?>
					<?php if ( get_sub_field('excerpt_list_excerpt') ) { ?>
                        <p class="body-text-2 block">
                            <?php the_sub_field ('excerpt_list_excerpt', false, false); ?>
                        </p>
                    <?php } ?>
					<a class="feature-link padding" href="<?php the_sub_field ('excerpt_list_url', false, false); ?>">Read More ›</a>
					<div class="hairline padding"></div>
				</div>
			<?php endwhile; ?>
            <?php endif; ?>

			</div>
			<div class="w-col w-col-4">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</div>
</div>