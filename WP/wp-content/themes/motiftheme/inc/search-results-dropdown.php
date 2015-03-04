
<ul class="nav nav-pills" role="tablist">
  <li role="presentation" class="dropdown">
    <a id="drop4" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
      Dropdown
      <span class="caret"></span>
    </a>
    <ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="drop4">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Action</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Another action</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Something else here</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Separated link</a></li>
    </ul>
  </li>
</ul> <!-- /pills --><?php
/**
 * The template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */

get_header(); 

	global $query_string;

	$query_args = explode("&", $query_string);
	$search_query = array();

	foreach($query_args as $key => $string) {
		$query_split = explode("=", $string);
		$search_query[$query_split[0]] = urldecode($query_split[1]);
	} // foreach

	$search = new WP_Query($search_query);

	global $wp_query;
	$total_results = $wp_query->found_posts;

	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	$posts_per_page = 4;
	$args = array(
		'posts_per_page' => $posts_per_page,
		's' => $s,
		'paged' => $paged
	);

	query_posts( $args );

	if ( have_posts('showposts=3') ) :

	$page_count = $paged * $posts_per_page;

?>
<div class="page-title">
	<div class="w-container">
		<h1><?php printf( __( 'Search Results for: %s', 'motiftheme' ), get_search_query() ); ?></h1>
		<?php get_search_form(); ?>
	</div>
</div>

<div class="catalog no-shadow">
	<div class="w-container">
		<div class="w-row search-row">
			<div class="w-col w-col-8 w-col-stack search-column-1">
				<div class="search-results">
                    <div class="w-row">
                        <div class="w-col w-col-7 w-col-small-7">
                            <div class="search-results-showing-bar">
	                            <p class="body-text">Showing</p>
	                            <ul class="nav nav-pills search-dropdown-menu" role="tablist">
	                            	<li role="presentation" class="dropdown">
	                            		<a id="drop4" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
	                            			<?php
												if($wp_query->found_posts < $page_count) { echo $wp_query->found_posts; }
												else { echo $page_count; }
											?>
	                            			<span class="caret"></span>
	                            		</a>
	                            		<ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="drop4">
	                            			<li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Action</a></li>
	                            			<li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Another action</a></li>
	                            			<li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">Something else here</a></li>
	                            		</ul>
	                            	</li>
	                            </ul> <!-- /pills -->
	                            <p class="body-text">of <?php echo $wp_query->found_posts; ?> results</p>
                        	</div>
                        </div>
                        <div class="w-col w-col-5 w-col-small-5 search-column-2">
                            <div class="body-text-2">Page: <strong>
                                <a class="text-link" href="#">‹</a></strong> 1 <a class="text-link" href="#">2</a> <a class="text-link" href="#">3</a> <a class="text-link" href="#">4</a> <a class="text-link" href="#">5</a> … <a class="text-link" href="#">23</a> <strong class="text-link">›</strong>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="break-2"></div>
                    <div class="search-results-bar">
                        <div class="body-text-2 padded">All</div>
                        <a class="text-link search" href="#">Site Pages</a>
                        <a class="text-link search" href="#">Blog Posts</a>
                    </div>
  					<div class="break-2 padding"></div>

					<?php
						// Start the Loop.
						while ( have_posts() ) : the_post();

							/*
							 * Include the post format-specific template for the content. If you want to
							 * use this in a child theme, then include a file called called content-___.php
							 * (where ___ is the post format) and that will be used instead.
							 */
							// get_template_part( 'content', get_post_format() ); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>

								<div class="featured-image-wrap-outer-border">
									<div class="featured-image-wrap-inner-border">
										<div class="featured-image-wrap">
											<?php motiftheme_post_thumbnail(); ?>
										</div>
									</div>
								</div>

							<div class="w-col w-col-9 w-col-small-9 w-col-tiny-9">
								<header class="entry-header">
									<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) && motiftheme_categorized_blog() ) : ?>

										<!-- <div class="entry-meta">
											<span class="cat-links"><?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'motiftheme' ) ); ?></span>
										</div> -->

									<?php
										endif;

										if ( is_single() ) :
											the_title( '<h1 class="entry-title">', '</h1>' );
										else :
											the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
										endif;
									?>

									<div class="entry-meta">
										<?php
											if ( 'post' == get_post_type() )
												motiftheme_posted_on();

											if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) :
										?>
										<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'motiftheme' ), __( '1 Comment', 'motiftheme' ), __( '% Comments', 'motiftheme' ) ); ?></span>
										<?php
											endif;

											edit_post_link( __( 'Edit', 'motiftheme' ), '<span class="edit-link">', '</span>' );
										?>
									</div><!-- .entry-meta -->
								</header><!-- .entry-header -->

								<?php if ( is_search() ) : ?>
								<div class="entry-summary">
									<?php the_excerpt(); ?>
								</div><!-- .entry-summary -->
								<?php else : ?>
								<div class="entry-content">
									<?php
										the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'motiftheme' ) );
										wp_link_pages( array(
											'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'motiftheme' ) . '</span>',
											'after'       => '</div>',
											'link_before' => '<span>',
											'link_after'  => '</span>',
										) );
									?>
								</div><!-- .entry-content -->
								<?php endif; ?>
<!-- 
								<?php the_tags( '<footer class="entry-meta"><span class="tag-links">', '', '</span></footer>' ); ?>
								 -->
								</div><!-- .w-col w-col-9 w-col-small-9 w-col-tiny-9 -->
							</article><!-- #post-## -->							

					<?php	endwhile;
						// Previous/next post navigation.
						motiftheme_paging_nav();

						else :
							// If no content, include the "No posts found" template.
							get_template_part( 'content', 'none' );

						endif;
					?>


				</div><!-- .search-column-1 -->


				<div class="w-col w-col-4 w-col-stack search-results-column-2">
					
					<div class="w-col w-col-4 w-col-stack search-results-column-2">
						<div class="w-clearfix motif padding">
							<div class="flag float">
								<div class="banner-title">FEATURED&nbsp;MOTIF</div>
							</div>
							<div class="motif-info">
								<div class="motif-title">FIGHTING&nbsp;EBOLA</div>
								<div class="return-text">ONE&nbsp;MONTH&nbsp;RETURN</div>
								<img class="arrow" src="<?php bloginfo('template_url'); ?>/images/up-arrow.svg" width="30" height="25" alt="545284ff6d56a6c126a6a643_up-arrow.svg">
								<div class="percentage">11.5%</div>
							</div>
							<img class="motif-image" src="<?php bloginfo('template_url'); ?>/images/ebola-img-2.jpg" height="300" alt="545d3d28038a60b221209bf6_ebola-img-2.jpg">
						</div>
						<div class="sub-category">ADDITIONAL&nbsp;INFO</div>
						<ul class="category-list">
							<li class="category-list-item">
								<a class="text-link category" href="#">Full catalog of motifs</a>
							</li>
							<li class="category-list-item">
								<a class="text-link category" href="#">Investing DNA Quiz</a>
							</li>
						</ul>
					</div>

				</div><!-- .search-results-column-2 -->
		</div><!-- .search-row -->
	</div><!-- .w-container -->
</div><!-- .catalog -->

<?php get_footer(); ?>
