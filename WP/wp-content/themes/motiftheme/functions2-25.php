<?php
/**
 * Motif Theme functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link http://codex.wordpress.org/Theme_Development
 * @link http://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * @link http://codex.wordpress.org/Plugin_API
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Motif Theme 1.0
 */

/**
 * Set up the content width value based on the theme's design.
 *
 * @see motiftheme_content_width()
 *
 * @since Motif Theme 1.0
 */
if ( ! isset( $content_width ) ) {
	$content_width = 474;
}

/**
 * Motif Theme only works in WordPress 3.6 or later.
 */
if ( version_compare( $GLOBALS['wp_version'], '3.6', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
}

if ( ! function_exists( 'motiftheme_setup' ) ) :
/**
 * Motif Theme setup.
 *
 * Set up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support post thumbnails.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_setup() {

	/*
	 * Make Motif Theme available for translation.
	 *
	 * Translations can be added to the /languages/ directory.
	 * If you're building a theme based on Motif Theme, use a find and
	 * replace to change 'motiftheme' to the name of your theme in all
	 * template files.
	 */
	load_theme_textdomain( 'motiftheme', get_template_directory() . '/languages' );

	// This theme styles the visual editor to resemble the theme style.
	add_editor_style( array( 'css/editor-style.css', motiftheme_font_url(), 'genericons/genericons.css' ) );

	// Add RSS feed links to <head> for posts and comments.
	add_theme_support( 'automatic-feed-links' );

	// Enable support for Post Thumbnails, and declare two sizes.
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 672, 372, true );
	add_image_size( 'Motiftheme-full-width', 1038, 576, true );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary'   => __( 'Top primary menu', 'motiftheme' ),
		'secondary' => __( 'Secondary menu in left sidebar', 'motiftheme' ),
		'footer' => __( 'Footer theme', 'motiftheme' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'audio', 'quote', 'link', 'gallery',
	) );

	// This theme allows users to set a custom background.
	add_theme_support( 'custom-background', apply_filters( 'motiftheme_custom_background_args', array(
		'default-color' => 'f5f5f5',
	) ) );

	// Add support for featured content.
	add_theme_support( 'featured-content', array(
		'featured_content_filter' => 'motiftheme_get_featured_posts',
		'max_posts' => 6,
	) );

	// This theme uses its own gallery styles.
	add_filter( 'use_default_gallery_style', '__return_false' );
}
endif; // motiftheme_setup
add_action( 'after_setup_theme', 'motiftheme_setup' );

/**
 * Adjust content_width value for image attachment template.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_content_width() {
	if ( is_attachment() && wp_attachment_is_image() ) {
		$GLOBALS['content_width'] = 810;
	}
}
add_action( 'template_redirect', 'motiftheme_content_width' );

/**
 * Getter function for Featured Content Plugin.
 *
 * @since Motif Theme 1.0
 *
 * @return array An array of WP_Post objects.
 */
function motiftheme_get_featured_posts() {
	/**
	 * Filter the featured posts to return in Motif Theme.
	 *
	 * @since Motif Theme 1.0
	 *
	 * @param array|bool $posts Array of featured posts, otherwise false.
	 */
	return apply_filters( 'motiftheme_get_featured_posts', array() );
}

/**
 * A helper conditional function that returns a boolean value.
 *
 * @since Motif Theme 1.0
 *
 * @return bool Whether there are featured posts.
 */
function motiftheme_has_featured_posts() {
	return ! is_paged() && (bool) motiftheme_get_featured_posts();
}

/**
 * Register three Motif Theme widget areas.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_widgets_init() {
	require get_template_directory() . '/inc/widgets.php';
	register_widget( 'motiftheme_Ephemera_Widget' );

	register_sidebar( array(
		'name'          => __( 'Primary Sidebar', 'motiftheme' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Main sidebar that appears on the left.', 'motiftheme' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	// register_sidebar( array(
	// 	'name'          => __( 'Content Sidebar', 'motiftheme' ),
	// 	'id'            => 'sidebar-2',
	// 	'description'   => __( 'Additional sidebar that appears on the right.', 'motiftheme' ),
	// 	'before_widget' => '<aside id="%1$s" class="widget %2$s">',
	// 	'after_widget'  => '</aside>',
	// 	'before_title'  => '<h1 class="widget-title">',
	// 	'after_title'   => '</h1>',
	// ) );
	// register_sidebar( array(
	// 	'name'          => __( 'Footer Widget Area', 'motiftheme' ),
	// 	'id'            => 'sidebar-3',
	// 	'description'   => __( 'Appears in the footer section of the site.', 'motiftheme' ),
	// 	'before_widget' => '<aside id="%1$s" class="widget %2$s">',
	// 	'after_widget'  => '</aside>',
	// 	'before_title'  => '<h1 class="widget-title">',
	// 	'after_title'   => '</h1>',
	// ) );
		register_sidebar( array(
		'name'          => __( 'Search Page Widget Area', 'motiftheme' ),
		'id'            => 'sidebar-4',
		'description'   => __( 'Appears on the Search results page.', 'motiftheme' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Blog Page Widget Area', 'motiftheme' ),
		'id'            => 'sidebar-5',
		'description'   => __( 'Appears on the Blog results page.', 'motiftheme' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Category Page Widget Area', 'motiftheme' ),
		'id'            => 'sidebar-6',
		'description'   => __( 'Appears on the Category results page.', 'motiftheme' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<div class="sub-category">',
		'after_title'   => '</div>',
	) );
	// register_sidebar( array(
	// 	'name'          => __( 'Newbs Page Widget Area', 'motiftheme' ),
	// 	'id'            => 'sidebar-7',
	// 	'description'   => __( 'Appears on the Newbs results page.', 'motiftheme' ),
	// 	'before_widget' => '<aside id="%1$s" class="widget %2$s">',
	// 	'after_widget'  => '</aside>',
	// 	'before_title'  => '<h1 class="widget-title">',
	// 	'after_title'   => '</h1>',
	// ) );
}
add_action( 'widgets_init', 'motiftheme_widgets_init' );

// Custom Widget for category page

/**
 * Register Lato Google font for Motif Theme.
 *
 * @since Motif Theme 1.0
 *
 * @return string
 */
function motiftheme_font_url() {
	$font_url = '';
	/*
	 * Translators: If there are characters in your language that are not supported
	 * by Lato, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Lato font: on or off', 'motiftheme' ) ) {
		$font_url = add_query_arg( 'family', urlencode( 'Lato:300,400,700,900,300italic,400italic,700italic' ), "//fonts.googleapis.com/css" );
	}

	return $font_url;
}

/**
 * Enqueue scripts and styles for the front end.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_scripts() {
	// Add Lato font, used in the main stylesheet.
	wp_enqueue_style( 'Motiftheme-lato', motiftheme_font_url(), array(), null );

	// Add Genericons font, used in the main stylesheet.
	wp_enqueue_style( 'genericons', get_template_directory_uri() . '/genericons/genericons.css', array(), '3.0.3' );

	// Load Motiftheme styles.
	wp_enqueue_style( 'motiftheme', get_template_directory_uri() .'/css/motiftheme.css' );
	wp_enqueue_style( 'colorbox', get_template_directory_uri() .'/css/colorbox.css' );

	// Load Team Motif styles.
	wp_enqueue_style( 'team-motif', get_template_directory_uri() .'/css/team-motif.css' );

        //videojs css
	wp_enqueue_style( 'videojs', get_template_directory_uri() .'/css/video-js.min.css' );
	// Load our main stylesheet.
	wp_enqueue_style( 'Motiftheme-style', get_stylesheet_uri(), array( 'genericons' ) );

	// Load the Internet Explorer specific stylesheet.
	wp_enqueue_style( 'Motiftheme-ie', get_template_directory_uri() . '/css/ie.css', array( 'Motiftheme-style', 'genericons' ), '20131205' );
	
	wp_style_add_data( 'Motiftheme-ie', 'conditional', 'lt IE 9' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( 'Motiftheme-keyboard-image-navigation', get_template_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20130402' );
	}

	if ( is_active_sidebar( 'sidebar-3' ) ) {
		wp_enqueue_script( 'jquery-masonry' );
	}

	if ( is_front_page() && 'slider' == get_theme_mod( 'featured_content_layout' ) ) {
		wp_enqueue_script( 'Motiftheme-slider', get_template_directory_uri() . '/js/slider.js', array( 'jquery' ), '20131205', true );
		wp_localize_script( 'Motiftheme-slider', 'featuredSliderDefaults', array(
			'prevText' => __( 'Previous', 'motiftheme' ),
			'nextText' => __( 'Next', 'motiftheme' )
		) );
	}
// Tabes js 
	if(is_page('press')){

		//wp_enqueue_script( 'waterfall-js', get_template_directory_uri() . '/js/jquery.waterfall.js', array( 'jquery' ), '',true );
		
		//wp_enqueue_script( 'waterfall-handlebars', get_template_directory_uri() . '/js/handlebars.js', array( 'jquery' ), '',false );
		
		
			function waterfall_js() {
				?>
			<script type="text/javascript">
				jQuery(function(){
					// For All Press
    					size_all = jQuery("#allpress li").size();
   					 all=10;
   					  jQuery('#allpress li:lt('+all+')').css("visibility", "visible");
   					   jQuery('#allpress li:lt('+all+')').addClass('showmore');
  					  jQuery('#loadMore').click(function () {
     					   all= (all+10 <= size_all) ? all+10 : size_all;
    					  jQuery('#allpress li:lt('+all+')').css("visibility", "visible");
    					  jQuery('#allpress li:lt('+all+')').addClass('showmore');
    					  jQuery("#allpress").waterfall();
   					 });
   				     // End All Press
   				     // Television
   					 size_tv = jQuery("#television li").size();
   					 tv=2;
   					  jQuery('#television li:lt('+tv+')').css("visibility", "visible");
   					  jQuery('#television li:lt('+tv+')').addClass('showmore');
  					  jQuery('#Moretelevision').click(function () {
     					   tv= (tv+2 <= size_tv) ? tv+2 : size_tv;
    					   jQuery('#television li:lt('+tv+')').css("visibility", "visible");
    					     jQuery('#television li:lt('+tv+')').addClass('showmore');
    					  jQuery("#television").waterfall();
   					 });
   				    // End All Press
   				     // Article
   					 size_art = jQuery("#article li").size();
   					 art=2;
   					  jQuery('#article li:lt('+art+')').css("visibility", "visible");
   					 jQuery('#article li:lt('+art+')').addClass('showmore');
  					  jQuery('#Morearticle').click(function () {
     					   art= (art+2 <= size_art) ? art+2 : size_art;
    					  jQuery('#article li:lt('+art+')').css("visibility", "visible");
    					  jQuery('#article li:lt('+art+')').addClass('showmore');
    					  jQuery("#article").waterfall();
   					 });
   					  // End All Press
   				     // Radio
   					 size_rdo = jQuery("#radio li").size();
   					 rdo=2;
   					  jQuery('#radio li:lt('+rdo+')').css("visibility", "visible");
   					 jQuery('#radio li:lt('+rdo+')').addClass('showmore');
  					  jQuery('#Moreradio').click(function () {
     					   rdo= (rdo+2 <= size_art) ? rdo+2 : size_art;
    					  jQuery('#radio li:lt('+rdo+')').css("visibility", "visible");
    					  jQuery('#radio li:lt('+rdo+')').addClass('showmore');
    					  jQuery("#radio").waterfall();
   					 });
   					 
   					 size_rel = jQuery("#press_releases li").size();
   					 rel=2;
   				
   					 jQuery('#press_releases li:lt('+rel+')').css("visibility", "visible");
   					   jQuery('#press_releases li:lt('+rel+')').addClass('showmore');
  					  jQuery('#Morepress_releases').click(function () {
     					   rel= (rel+2 <= size_rel) ? rel+2 : size_rel;
    					  jQuery('#press_releases li:lt('+rel+')').css("visibility", "visible");
    					  jQuery('#press_releases li:lt('+rel+')').addClass('showmore');
    					  jQuery("#press_releases").waterfall();
   					 });
   					 
				});
				
			</script>
			<?php
			}
add_action('wp_footer', 'waterfall_js');


function add_styles()
{
    ?>
    	<style type="text/css">
  
	</style>

    <?php
}
add_action('wp_head', 'add_styles');
	}
	
	wp_enqueue_script( 'Motiftheme-script', get_template_directory_uri() . '/js/functions.js', array( 'jquery' ), '20140616', true );
	//wp_enqueue_script( 'selectivizr-js', get_template_directory_uri() . '/js/selectivizr.js', array( 'jquery' ), '20140616',false )
        wp_enqueue_script( 'videojs', get_template_directory_uri() . '/dist/video.js');
        wp_enqueue_script( 'videojs-youtube', get_template_directory_uri() . '/dist/youtube.js');
	wp_enqueue_script( 'Motiftheme-js', get_template_directory_uri() . '/dist/motiftheme.js', array( 'jquery' ), '20140616', true );
	
}
add_action( 'wp_enqueue_scripts', 'motiftheme_scripts' );

/**
 * Enqueue Google fonts style to admin screen for custom header display.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_admin_fonts() {
	wp_enqueue_style( 'Motiftheme-lato', motiftheme_font_url(), array(), null );
}
add_action( 'admin_print_scripts-appearance_page_custom-header', 'motiftheme_admin_fonts' );

if ( ! function_exists( 'motiftheme_the_attached_image' ) ) :
/**
 * Print the attached image with a link to the next attached image.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_the_attached_image() {
	$post                = get_post();
	/**
	 * Filter the default Motif Theme attachment size.
	 *
	 * @since Motif Theme 1.0
	 *
	 * @param array $dimensions {
	 *     An array of height and width dimensions.
	 *
	 *     @type int $height Height of the image in pixels. Default 810.
	 *     @type int $width  Width of the image in pixels. Default 810.
	 * }
	 */
	$attachment_size     = apply_filters( 'motiftheme_attachment_size', array( 810, 810 ) );
	$next_attachment_url = wp_get_attachment_url();

	/*
	 * Grab the IDs of all the image attachments in a gallery so we can get the URL
	 * of the next adjacent image in a gallery, or the first image (if we're
	 * looking at the last image in a gallery), or, in a gallery of one, just the
	 * link to that image file.
	 */
	$attachment_ids = get_posts( array(
		'post_parent'    => $post->post_parent,
		'fields'         => 'ids',
		'numberposts'    => -1,
		'post_status'    => 'inherit',
		'post_type'      => 'attachment',
		'post_mime_type' => 'image',
		'order'          => 'ASC',
		'orderby'        => 'menu_order ID',
	) );

	// If there is more than 1 attachment in a gallery...
	if ( count( $attachment_ids ) > 1 ) {
		foreach ( $attachment_ids as $attachment_id ) {
			if ( $attachment_id == $post->ID ) {
				$next_id = current( $attachment_ids );
				break;
			}
		}

		// get the URL of the next image attachment...
		if ( $next_id ) {
			$next_attachment_url = get_attachment_link( $next_id );
		}

		// or get the URL of the first image attachment.
		else {
			$next_attachment_url = get_attachment_link( array_shift( $attachment_ids ) );
		}
	}

	printf( '<a href="%1$s" rel="attachment">%2$s</a>',
		esc_url( $next_attachment_url ),
		wp_get_attachment_image( $post->ID, $attachment_size )
	);
}
endif;

if ( ! function_exists( 'motiftheme_list_authors' ) ) :
/**
 * Print a list of all site contributors who published at least one post.
 *
 * @since Motif Theme 1.0
 */
function motiftheme_list_authors() {
	$contributor_ids = get_users( array(
		'fields'  => 'ID',
		'orderby' => 'post_count',
		'order'   => 'DESC',
		'who'     => 'authors',
	) );

	foreach ( $contributor_ids as $contributor_id ) :
		$post_count = count_user_posts( $contributor_id );

		// Move on if user has not published a post (yet).
		if ( ! $post_count ) {
			continue;
		}
	?>

	<div class="contributor">
		<div class="contributor-info">
			<div class="contributor-avatar"><?php echo get_avatar( $contributor_id, 132 ); ?></div>
			<div class="contributor-summary">
				<h2 class="contributor-name"><?php echo get_the_author_meta( 'display_name', $contributor_id ); ?></h2>
				<p class="contributor-bio">
					<?php echo get_the_author_meta( 'description', $contributor_id ); ?>
				</p>
				<a class="button contributor-posts-link" href="<?php echo esc_url( get_author_posts_url( $contributor_id ) ); ?>">
					<?php printf( _n( '%d Article', '%d Articles', $post_count, 'motiftheme' ), $post_count ); ?>
				</a>
			</div><!-- .contributor-summary -->
		</div><!-- .contributor-info -->
	</div><!-- .contributor -->

	<?php
	endforeach;
}
endif;

/**
 * Extend the default WordPress body classes.
 *
 * Adds body classes to denote:
 * 1. Single or multiple authors.
 * 2. Presence of header image except in Multisite signup and activate pages.
 * 3. Index views.
 * 4. Full-width content layout.
 * 5. Presence of footer widgets.
 * 6. Single views.
 * 7. Featured content layout.
 *
 * @since Motif Theme 1.0
 *
 * @param array $classes A list of existing body class values.
 * @return array The filtered body class list.
 */
function motiftheme_body_classes( $classes ) {
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	if ( get_header_image() ) {
		$classes[] = 'header-image';
	} elseif ( ! in_array( $GLOBALS['pagenow'], array( 'wp-activate.php', 'wp-signup.php' ) ) ) {
		$classes[] = 'masthead-fixed';
	}

	if ( is_archive() || is_search() || is_home() ) {
		$classes[] = 'list-view';
	}

	if ( ( ! is_active_sidebar( 'sidebar-2' ) )
		|| is_page_template( 'page-templates/full-width.php' )
		|| is_page_template( 'page-templates/contributors.php' )
		|| is_attachment() ) {
		$classes[] = 'full-width';
	}

	if ( is_active_sidebar( 'sidebar-3' ) ) {
		$classes[] = 'footer-widgets';
	}

	if ( is_singular() && ! is_front_page() ) {
		$classes[] = 'singular';
	}

	if ( is_front_page() && 'slider' == get_theme_mod( 'featured_content_layout' ) ) {
		$classes[] = 'slider';
	} elseif ( is_front_page() ) {
		$classes[] = 'grid';
	}

	return $classes;
}
add_filter( 'body_class', 'motiftheme_body_classes' );

/**
 * Extend the default WordPress post classes.
 *
 * Adds a post class to denote:
 * Non-password protected page with a post thumbnail.
 *
 * @since Motif Theme 1.0
 *
 * @param array $classes A list of existing post class values.
 * @return array The filtered post class list.
 */
function motiftheme_post_classes( $classes ) {
	if ( ! post_password_required() && ! is_attachment() && has_post_thumbnail() ) {
		$classes[] = 'has-post-thumbnail';
	}

	return $classes;
}
add_filter( 'post_class', 'motiftheme_post_classes' );

/**
 * Create a nicely formatted and more specific title element text for output
 * in head of document, based on current view.
 *
 * @since Motif Theme 1.0
 *
 * @global int $paged WordPress archive pagination page count.
 * @global int $page  WordPress paginated post page count.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function motiftheme_wp_title( $title, $sep ) {
	global $paged, $page;

	if ( is_feed() ) {
		return $title;
	}

	// Add the site name.
	$title .= get_bloginfo( 'name', 'display' );

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title = "$title $sep $site_description";
	}

	// Add a page number if necessary.
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title = "$title $sep " . sprintf( __( 'Page %s', 'motiftheme' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'motiftheme_wp_title', 10, 2 );

// Implement Custom Header features.
require get_template_directory() . '/inc/custom-header.php';

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

// Add Theme Customizer functionality.
require get_template_directory() . '/inc/customizer.php';

/*
 * Add Featured Content functionality.
 *
 * To overwrite in a plugin, define your own Featured_Content class on or
 * before the 'setup_theme' hook.
 */
if ( ! class_exists( 'Featured_Content' ) && 'plugins.php' !== $GLOBALS['pagenow'] ) {
	require get_template_directory() . '/inc/featured-content.php';
}

add_filter('upload_mimes', 'custom_upload_mimes');

function custom_upload_mimes ( $existing_mimes=array() ) {

	// add the file extension to the array

	$existing_mimes['svg'] = 'mime/type';

        // call the modified list of extensions

	return $existing_mimes;

}

function load_fonts() {
	wp_register_style('et-googleFonts', 'http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic');
	wp_enqueue_style( 'et-googleFonts');
}
add_action('wp_print_styles', 'load_fonts'); 

// Modify Time posted on blog posts
function motiftheme_posted_on() {
	printf( __( '
			<time class="entry-date" datetime="%3$s" pubdate>%4$s</time>
			<span class="sep"> | </span>
		', 'motiftheme' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'motiftheme' ), get_the_author() ) ),
		get_the_author()
	);
}
function motiftheme_posted_on_list() {
	printf( __( '
			<time class="entry-date" datetime="%3$s" pubdate>%4$s</time>
		', 'motiftheme' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'motiftheme' ), get_the_author() ) ),
		get_the_author()
	);
}

// Excerpt Length
function custom_excerpt_length( $length ) {
	return 25;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

// Excerpt Read More
function new_excerpt_more( $more ) {
	return '... <a class="read-more" href="'. get_permalink( get_the_ID() ) . '">' . __('Read More  ›', 'your-text-domain') . '</a>';
}


add_filter( 'excerpt_more', 'new_excerpt_more' );


// Hide Annoying Meta Boxes
add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
	#cpt_info_box {
	display: none !important;
	} 
  </style>';
}

// Add Body Text Class to the Excerpt()
add_filter( "the_excerpt", "add_class_to_excerpt" );
function add_class_to_excerpt( $excerpt ) {
    return str_replace('<p', '<p class="body-text"', $excerpt);
}

// Add ACF Options Page
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}

// Make Pagination Work for category page
function my_post_queries( $query ) {
  // do not alter the query on wp-admin pages and only alter it if it's the main query
  if (!is_admin() && $query->is_main_query()){

    // alter the query for the home and category pages 
    if(is_category()){
      $query->set('posts_per_page', 10);
    }

  }
}
add_action( 'pre_get_posts', 'my_post_queries' );

// Allow Shortcodes inside ACF
function my_acf_format_value( $value, $post_id, $field ) {
	
	// run do_shortcode on all textarea values
	$value = do_shortcode($value);
	
	
	// return
	return $value;
}
 
// filter for a value load based on it's field type
add_filter('acf/format_value/type=textarea', 'my_acf_format_value', 10, 3);
 
 

if (class_exists('MultiPostThumbnails')) {
    new MultiPostThumbnails(
        array(
            'label' => 'Press Icon',
            'id' => 'secondary-image',
            'post_type' => 'press'
        )
    );
}

function custom_resize($url, $width, $height = null, $crop = null, $single = true) {

//validate inputs
    if (!$url OR !$width)
        return false;

//define upload path & dir
    $upload_info = wp_upload_dir();
    $upload_dir = $upload_info['basedir'];
    $upload_url = $upload_info['baseurl'];

//check if $img_url is local
    if (strpos($url, $upload_url) === false)
        return false;

//define path of image
    $rel_path = str_replace($upload_url, '', $url);
    $img_path = $upload_dir . $rel_path;

//check if img path exists, and is an image indeed
    if (!file_exists($img_path) OR !getimagesize($img_path))
        return false;

//get image info
    $info = pathinfo($img_path);
    $ext = $info['extension'];
    list($orig_w, $orig_h) = getimagesize($img_path);

//get image size after cropping
    $dims = image_resize_dimensions($orig_w, $orig_h, $width, $height, $crop);
    $dst_w = $dims[4];
    $dst_h = $dims[5];

//use this to check if cropped image already exists, so we can return that instead
    $suffix = "{$dst_w}x{$dst_h}";
    $dst_rel_path = str_replace('.' . $ext, '', $rel_path);
    $destfilename = "{$upload_dir}{$dst_rel_path}-{$suffix}.{$ext}";

    if (!$dst_h) {
//can't resize, so return original url
        $img_url = $url;
        $dst_w = $orig_w;
        $dst_h = $orig_h;
    }
//else check if cache exists
    elseif (file_exists($destfilename) && getimagesize($destfilename)) {
        $img_url = "{$upload_url}{$dst_rel_path}-{$suffix}.{$ext}";
    }
//else, we resize the image and return the new resized image url
    else {

// Note: pre-3.5 fallback check 
        if (function_exists('wp_get_image_editor')) {

            $editor = wp_get_image_editor($img_path);

            if (is_wp_error($editor) || is_wp_error($editor->resize($width, $height, $crop)))
                return false;

            $resized_file = $editor->save();

            if (!is_wp_error($resized_file)) {
                $resized_rel_path = str_replace($upload_dir, '', $resized_file['path']);
                $img_url = $upload_url . $resized_rel_path;
            } else {
                return false;
            }
        } else {

            $resized_img_path = image_resize($img_path, $width, $height, $crop);
            if (!is_wp_error($resized_img_path)) {
                $resized_rel_path = str_replace($upload_dir, '', $resized_img_path);
                $img_url = $upload_url . $resized_rel_path;
            } else {
                return false;
            }
        }
    }

//return the output
    if ($single) {
//str return
        $image = $img_url;
    } else {
//array return
        $image = array(
            0 => $img_url,
            1 => $dst_w,
            2 => $dst_h
        );
    }

    return $image;
}
/****************************
***    Custom Post Press
****************************/
function create_press()

{  

    register_post_type('press', 
        array(
        'labels' => array(
            'name' => __('Motif Press', 'motiftheme'), // Rename these to suit
            'singular_name' => __('Motif Press', 'motiftheme'),
            'add_new' => __('Add New', 'motiftheme'),
            'add_new_item' => __('Add New Press', 'motiftheme'),
            'edit' => __('Edit', 'motiftheme'),
            'edit_item' => __('Edit Press', 'motiftheme'),
            'new_item' => __('New Press', 'motiftheme'),
            'view' => __('View Press', 'motiftheme'),
            'view_item' => __('View Press', 'motiftheme'),
            'search_items' => __('Search Press', 'motiftheme'),
            'not_found' => __('No Press Post found', 'motiftheme'),
            'not_found_in_trash' => __('No Press found in Trash', 'motiftheme')
        ),
        'public' => true,
        'has_archive' => true,
	'taxonomies' => array('post_tag'),
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail','post-format'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
		'show_admin_column' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
        'query_var' => true,
		'rewrite' => array('slug'=>'media/%press_type%', 'with_front'=>false),    	
    	'capability_type' => 'post',
    	'hierarchical' => true,
    	'menu_position' => null,
		'has_archive' => true
    ));
register_taxonomy("press_type", array("press"), array("hierarchical" => true, 'query_var' => 'press_type', "label" => "Press Categories", "singular_label" => "Press Categories", 'rewrite' => array( 'slug' => 'media', '_builtin' => false )));

}

add_action('init', 'create_press');

add_filter('post_link', 'press_permalink', 1, 3);
add_filter('post_type_link', 'press_permalink', 1, 3);

function press_permalink($permalink, $post_id, $leavename) {
	//con %brand% catturo il rewrite del Custom Post Type
    if (strpos($permalink, '%press_type%') === FALSE) return $permalink;
        // Get post
        $post = get_post($post_id);
        if (!$post) return $permalink;

        // Get taxonomy terms
        $terms = wp_get_object_terms($post->ID, 'press_type');
        if (!is_wp_error($terms) && !empty($terms) && is_object($terms[0]))
        	$taxonomy_slug = $terms[0]->slug;
        else $taxonomy_slug = 'no-media';

    return str_replace('%press_type%', $taxonomy_slug, $permalink);

}

function new_excerpt_mores($more) {
   global $post;
   return '.';
   }
   add_filter('excerpt_more', 'new_excerpt_mores');
   
   
      //---------------------------------------- External Link Meta box -----------------------------------------------------

/**
 * Adds a meta box to the post editing screen
 */
function motif_custom_meta() {
    add_meta_box( 'motif_meta', __( 'External Link', 'motif-textdomain' ), 'motif_meta_callback', 'press','normal' );
}
add_action( 'add_meta_boxes', 'motif_custom_meta' );

/**
 * Outputs the content of the meta box
 */
function motif_meta_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'motif_nonce' );
    $motif_stored_meta = get_post_meta( $post->ID,'external_link',true );
  ?>
  
    <p>
    <span class="motif-row-title"><?php _e( 'Enter External Link', 'motif-textdomain' )?></span>
    <div class="motif-row-content"> 
 	<label for="external_link">
           <input type="text" name="external_link" id="external_link" value="<?php echo $motif_stored_meta; ?>" size="50" />
        </label>
    </div>
</p>
 
    <?php
}
/**
 * Saves the custom meta input
 */
function motif_meta_save( $post_id ) {
 
    // Checks save status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'motif_nonce' ] ) && wp_verify_nonce( $_POST[ 'motif_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';
 
    // Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }
 	// Checks for input and saves
 if( isset( $_POST['external_link'] ) ) {    
 $linkval=$_POST["external_link"];
 update_post_meta( $post_id,'external_link',$linkval );  }
 }
add_action( 'save_post', 'motif_meta_save' );
	                   