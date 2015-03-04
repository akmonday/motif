<div class="sparkline image-bg">
	<div class="w-container">
        <?php if( get_sub_field('sparkline_heading')) { ?>
        	<h2 class="heading-white"><?php the_sub_field ('sparkline_heading'); ?></h2>
        <?php } ?>
		<div class="w-row sparks-row">
			
			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Trading<br>Ideas</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('trading-ideas')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/trading-ideas/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Investing<br>Insights</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('investing-insights')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/investing-insights/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Hardeeps<br>Thoughts</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('hardeeps-thoughts')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/hardeeps-thoughts/">More ›</a>'; ?>
					</div>
				</div>
			</div>

			<div class="w-col w-col-3 expenses-column blog-tout">
				<div class="sparkline-block">
					<div class="spark-heading">Community<br>Voice</div>
					<div class="body-text padding small sparkline-body-text">
				 		<?php echo category_description( get_category_by_slug('community-voice')->term_id ); ?> 
				 	</div>
				 	<div>
						<?php echo '<a class="feature-link" href="'.get_option('home').'/'.get_option('category_base').'/community-voice/">More ›</a>'; ?>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
