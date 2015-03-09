<div class="catalog no-shadow">
	<div class="w-container news-container">
		<h4 class="heading-text">Motif in the News</h4>
		<div class="break-2 padding"></div>
		<div class="w-row">
			<?php global $post;
			global $all_post_titles; //?possibly needed//
			$counter = 0;
			$all_post_titles = array();
			$args = array( 'numberposts' => 7, 'category_name' => 'motif-in-the-news' );
			$myposts = get_posts( $args );
			foreach( $myposts as $post ) :	setup_postdata($post); ?>
				<?php 
				if ($counter < 6) {
				?>
				<div class="w-col w-col-6">
					<div class="news-block news-align">
					    <?php the_title( '<div class="text-link category"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">','</a></div>' ); ?>
					    <?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
					        <span class="blog-date">
				                <?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?>
					        </span>
					    <?php endif; ?>

					        <span class="blog-date">
					            | 
					            <?php
					                if ( 'post' == get_post_type() )
					                    motiftheme_posted_on();

					                if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
					            ?>
					            <?php
					                endif;

					                edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
					            ?>
					        </span><!-- .entry-meta -->
					    </div><!--.news-block -->

				</div>
				<?php	
				} elseif ($counter > 6) {
				?>
				<div class="w-col w-col-6">
					<div class="news-block news-align">
					    <?php the_title( '<div class="text-link category"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">','</a></div>' ); ?>
					    <?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>
					        <span class="blog-date">
				                <?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?>
					        </span>
					    <?php endif; ?>

					        <span class="blog-date">
					            | 
					            <?php
					                if ( 'post' == get_post_type() )
					                    motiftheme_posted_on();

					                if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
					            ?>
					            <?php
					                endif;

					                edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
					            ?>
					        </span><!-- .entry-meta -->
					    </div><!--.news-block -->

				</div>

				<?php
				}
				?>
			<?php
			$counter++; 
			endforeach; 
			?>
			<?php wp_reset_postdata(); ?>

			<? if($counter==1) { ?>
					<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" target="_blank" class="text-link category" href="http://www.forbes.com/sites/laurashin/2013/10/29/10-investing-tricks-that-will-help-you-outperform-most-investors/">10 Investing Tricks That Will Help You Outperform Most Investors </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 29, 2013</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" target="_blank" class="text-link category" href="http://www.forbes.com/sites/laurashin/2013/10/03/how-mr-money-mustache-retired-at-age-30-and-how-you-can-too/">How Mr. Money Mustache Retired At Age 30 </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | March 10, 2013</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 03, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 28, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/02/3-hurdles-standing-in-the-way-of-the-internet-of-things-2/">3 Hurdles Standing In The Way Of The Internet Of Things</a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 01, 2015</div>
					</div>
				</div>
					
			<?php }?>
			
			<? if($counter==2) { ?>
					
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/laurashin/2013/10/03/how-mr-money-mustache-retired-at-age-30-and-how-you-can-too/">How Mr. Money Mustache Retired At Age 30 </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | March 10, 2013</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 03, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 28, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/02/3-hurdles-standing-in-the-way-of-the-internet-of-things-2/">3 Hurdles Standing In The Way Of The Internet Of Things</a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 01, 2015</div>
					</div>
				</div>
					
			<?php }?>		
			<? if($counter==3) { ?>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 03, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 28, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/02/3-hurdles-standing-in-the-way-of-the-internet-of-things-2/">3 Hurdles Standing In The Way Of The Internet Of Things</a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 01, 2015</div>
					</div>
				</div>
					
			<?php }?>
				<? if($counter==4) { ?>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 03, 2015</div>
					</div>
				</div>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | January 28, 2015</div>
					</div>
				</div>
									
			<?php }?>
			<? if($counter==5) { ?>
				<div class="w-col w-col-6">
					<div class="news-block"><a target="_blank" class="text-link category" href="http://www.forbes.com/sites/centurylink/2015/01/28/saying_ahead-with-bimodal-it/?sr_source=lift_polar">How IT Leaders Are Staying A Step Ahead With Bi-Modal IT </a>
						<div class="blog-date"><a href="http://motif.msidevelopment.com/motif-blog-categories/motif-in-the-news/" class="text-link">Motif In The News</a> | October 03, 2015</div>
					</div>
				</div>
													
			<?php }?>		
			
		</div>
		<div class="break-2"></div>
		<div class="search-results padding">
			<div class="body-text-2">
				<a class="text-link" href="/about/press/">See all ›</a>
			</div>
		</div>
	</div>
</div>
