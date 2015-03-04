<?php

/*
Options:
jetpack_options (array)
	An array of options.
	@see Jetpack_Options::get_option_names()

jetpack_register (string)
	Temporary verification secrets.

jetpack_activated (int)
	1: the plugin was activated normally
	2: the plugin was activated on this site because of a network-wide activation
	3: the plugin was auto-installed
	4: the plugin was manually disconnected (but is still installed)

jetpack_active_modules (array)
	Array of active module slugs.

jetpack_do_activate (bool)
	Flag for "activating" the plugin on sites where the activation hook never fired (auto-installs)
*/

class Jetpack {
	var $xmlrpc_server = null;

	private $xmlrpc_verification = null;

	var $HTTP_RAW_POST_DATA = null; // copy of $GLOBALS['HTTP_RAW_POST_DATA']

	/**
	 * @var array The handles of styles that are concatenated into jetpack.css
	 */
	var $concatenated_style_handles = array(
		'jetpack-carousel',
		'grunion.css',
		'the-neverending-homepage',
		'jetpack_likes',
		'jetpack_related-posts',
		'sharedaddy',
		'jetpack-slideshow',
		'presentations',
		'jetpack-subscriptions',
		'tiled-gallery',
		'widget-conditions',
		'jetpack_display_posts_widget',
		'gravatar-profile-widget',
		'widget-grid-and-list',
		'jetpack-widgets',
	);

	var $plugins_to_deactivate = array(
		'stats'               => array( 'stats/stats.php', 'WordPress.com Stats' ),
		'shortlinks'          => array( 'stats/stats.php', 'WordPress.com Stats' ),
		'sharedaddy'          => array( 'sharedaddy/sharedaddy.php', 'Sharedaddy' ),
		'twitter-widget'      => array( 'wickett-twitter-widget/wickett-twitter-widget.php', 'Wickett Twitter Widget' ),
		'after-the-deadline'  => array( 'after-the-deadline/after-the-deadline.php', 'After The Deadline' ),
		'contact-form'        => array( 'grunion-contact-form/grunion-contact-form.php', 'Grunion Contact Form' ),
		'contact-form'        => array( 'mullet/mullet-contact-form.php', 'Mullet Contact Form' ),
		'custom-css'          => array( 'safecss/safecss.php', 'WordPress.com Custom CSS' ),
		'random-redirect'     => array( 'random-redirect/random-redirect.php', 'Random Redirect' ),
		'videopress'          => array( 'video/video.php', 'VideoPress' ),
		'widget-visibility'   => array( 'jetpack-widget-visibility/widget-visibility.php', 'Jetpack Widget Visibility' ),
		'widget-visibility'   => array( 'widget-visibility-without-jetpack/widget-visibility-without-jetpack.php', 'Widget Visibility Without Jetpack' ),
		'sharedaddy'          => array( 'jetpack-sharing/sharedaddy.php', 'Jetpack Sharing' ),
		'omnisearch'          => array( 'jetpack-omnisearch/omnisearch.php', 'Jetpack Omnisearch' ),
		'gravatar-hovercards' => array( 'jetpack-gravatar-hovercards/gravatar-hovercards.php', 'Jetpack Gravatar Hovercards' ),
		'latex'               => array( 'wp-latex/wp-latex.php', 'WP LaTeX' ),
	);

	var $capability_translations = array(
		'administrator' => 'manage_options',
		'editor'        => 'edit_others_posts',
		'author'        => 'publish_posts',
		'contributor'   => 'edit_posts',
		'subscriber'    => 'read',
	);

	/**
	 * Map of modules that have conflicts with plugins and should not be auto-activated
	 * if the plugins are active.  Used by filter_default_modules
	 *
	 * Plugin Authors: If you'd like to prevent a single module from auto-activating,
	 * change `module-slug` and add this to your plugin:
	 *
	 * add_filter( 'jetpack_get_default_modules', 'my_jetpack_get_default_modules' );
	 * function my_jetpack_get_default_modules( $modules ) {
	 *     return array_diff( $modules, array( 'module-slug' ) );
	 * }
	 *
	 * @var array
	 */
	private $conflicting_plugins = array(
		'comments'          => array(
			'Intense Debate'                 => 'intensedebate/intensedebate.php',
			'Disqus'                         => 'disqus-comment-system/disqus.php',
			'Livefyre'                       => 'livefyre-comments/livefyre.php',
			'Comments Evolved for WordPress' => 'gplus-comments/comments-evolved.php',
			'Google+ Comments'               => 'google-plus-comments/google-plus-comments.php',
			'WP-SpamShield Anti-Spam'        => 'wp-spamshield/wp-spamshield.php',
		),
		'contact-form'      => array(
			'Contact Form 7'                 => 'contact-form-7/wp-contact-form-7.php',
			'Gravity Forms'                  => 'gravityforms/gravityforms.php',
			'Contact Form Plugin'            => 'contact-form-plugin/contact_form.php',
			'Easy Contact Forms'             => 'easy-contact-forms/easy-contact-forms.php',
			'Fast Secure Contact Form'       => 'si-contact-form/si-contact-form.php',
		),
		'minileven'         => array(
			'WPtouch'                        => 'wptouch/wptouch.php',
		),
		'latex'             => array(
			'LaTeX for WordPress'            => 'latex/latex.php',
			'Youngwhans Simple Latex'        => 'youngwhans-simple-latex/yw-latex.php',
			'Easy WP LaTeX'                  => 'easy-wp-latex-lite/easy-wp-latex-lite.php',
			'MathJax-LaTeX'                  => 'mathjax-latex/mathjax-latex.php',
			'Enable Latex'                   => 'enable-latex/enable-latex.php',
			'WP QuickLaTeX'                  => 'wp-quicklatex/wp-quicklatex.php',
		),
		'random-redirect'   => array(
			'Random Redirect 2'              => 'random-redirect-2/random-redirect.php',
		),
		'related-posts'     => array(
			'YARPP'                          => 'yet-another-related-posts-plugin/yarpp.php',
			'WordPress Related Posts'        => 'wordpress-23-related-posts-plugin/wp_related_posts.php',
			'nrelate Related Content'        => 'nrelate-related-content/nrelate-related.php',
			'Contextual Related Posts'       => 'contextual-related-posts/contextual-related-posts.php',
			'Related Posts for WordPress'    => 'microkids-related-posts/microkids-related-posts.php',
			'outbrain'                       => 'outbrain/outbrain.php',
			'Shareaholic'                    => 'shareaholic/shareaholic.php',
			'Sexybookmarks'                  => 'sexybookmarks/shareaholic.php',
		),
		'sharedaddy'        => array(
			'AddThis'                        => 'addthis/addthis_social_widget.php',
			'Add To Any'                     => 'add-to-any/add-to-any.php',
			'ShareThis'                      => 'share-this/sharethis.php',
			'Shareaholic'                    => 'shareaholic/shareaholic.php',
		),
		'verification-tools' => array(
			'WordPress SEO by Yoast'         => 'wordpress-seo/wp-seo.php',
			'WordPress SEO Premium by Yoast' => 'wordpress-seo-premium/wp-seo-premium.php',
			'All in One SEO Pack'            => 'all-in-one-seo-pack/all_in_one_seo_pack.php',
		),
		'widget-visibility' => array(
			'Widget Logic'                   => 'widget-logic/widget_logic.php',
			'Dynamic Widgets'                => 'dynamic-widgets/dynamic-widgets.php',
		),
	);

	/**
	 * Plugins for which we turn off our Facebook OG Tags implementation.
	 *
	 * Note: WordPress SEO by Yoast and WordPress SEO Premium by Yoast automatically deactivate
	 * Jetpack's Open Graph tags via filter when their Social Meta modules are active.
	 *
	 * Plugin authors: If you'd like to prevent Jetpack's Open Graph tag generation in your plugin, you can do so via this filter:
	 * add_filter( 'jetpack_enable_open_graph', '__return_false' );
	 */
	private $open_graph_conflicting_plugins = array(
		'2-click-socialmedia-buttons/2-click-socialmedia-buttons.php',
		                                                         // 2 Click Social Media Buttons
		'add-link-to-facebook/add-link-to-facebook.php',         // Add Link to Facebook
		'add-meta-tags/add-meta-tags.php',                       // Add Meta Tags
		'all-in-one-seo-pack/all_in_one_seo_pack.php',           // All in One SEO Pack
		'easy-facebook-share-thumbnails/esft.php',               // Easy Facebook Share Thumbnail
		'facebook/facebook.php',                                 // Facebook (official plugin)
		'facebook-awd/AWD_facebook.php',                         // Facebook AWD All in one
		'facebook-featured-image-and-open-graph-meta-tags/fb-featured-image.php',
		                                                         // Facebook Featured Image & OG Meta Tags
		'facebook-meta-tags/facebook-metatags.php',              // Facebook Meta Tags
		'wonderm00ns-simple-facebook-open-graph-tags/wonderm00n-open-graph.php',
		                                                         // Facebook Open Graph Meta Tags for WordPress
		'facebook-revised-open-graph-meta-tag/index.php',        // Facebook Revised Open Graph Meta Tag
		'facebook-thumb-fixer/_facebook-thumb-fixer.php',        // Facebook Thumb Fixer
		'facebook-and-digg-thumbnail-generator/facebook-and-digg-thumbnail-generator.php',
		                                                         // Fedmich's Facebook Open Graph Meta
		'header-footer/plugin.php',                              // Header and Footer
		'network-publisher/networkpub.php',                      // Network Publisher
		'nextgen-facebook/nextgen-facebook.php',                 // NextGEN Facebook OG
		'social-networks-auto-poster-facebook-twitter-g/NextScripts_SNAP.php',
		                                                         // NextScripts SNAP
		'opengraph/opengraph.php',                               // Open Graph
		'open-graph-protocol-framework/open-graph-protocol-framework.php',
		                                                         // Open Graph Protocol Framework
		'seo-facebook-comments/seofacebook.php',                 // SEO Facebook Comments
		'seo-ultimate/seo-ultimate.php',                         // SEO Ultimate
		'sexybookmarks/sexy-bookmarks.php',                      // Shareaholic
		'shareaholic/sexy-bookmarks.php',                        // Shareaholic
		'sharepress/sharepress.php',                             // SharePress
		'simple-facebook-connect/sfc.php',                       // Simple Facebook Connect
		'social-discussions/social-discussions.php',             // Social Discussions
		'social-sharing-toolkit/social_sharing_toolkit.php',     // Social Sharing Toolkit
		'socialize/socialize.php',                               // Socialize
		'only-tweet-like-share-and-google-1/tweet-like-plusone.php',
		                                                         // Tweet, Like, Google +1 and Share
		'wordbooker/wordbooker.php',                             // Wordbooker
		'wpsso/wpsso.php',                                       // WordPress Social Sharing Optimization
		'wp-caregiver/wp-caregiver.php',                         // WP Caregiver
		'wp-facebook-like-send-open-graph-meta/wp-facebook-like-send-open-graph-meta.php',
		                                                         // WP Facebook Like Send & Open Graph Meta
		'wp-facebook-open-graph-protocol/wp-facebook-ogp.php',   // WP Facebook Open Graph protocol
		'wp-ogp/wp-ogp.php',                                     // WP-OGP
		'zoltonorg-social-plugin/zosp.php',                      // Zolton.org Social Plugin
	);

	/**
	 * Plugins for which we turn off our Twitter Cards Tags implementation.
	 */
	private $twitter_cards_conflicting_plugins = array(
		'eewee-twitter-card/index.php',              // Eewee Twitter Card
		'ig-twitter-cards/ig-twitter-cards.php',     // IG:Twitter Cards
		'jm-twitter-cards/jm-twitter-cards.php',     // JM Twitter Cards
		'kevinjohn-gallagher-pure-web-brilliants-social-graph-twitter-cards-extention/kevinjohn_gallagher___social_graph_twitter_output.php',
		                                             // Pure Web Brilliant's Social Graph Twitter Cards Extension
		'twitter-cards/twitter-cards.php',           // Twitter Cards
		'twitter-cards-meta/twitter-cards-meta.php', // Twitter Cards Meta
		'wp-twitter-cards/twitter_cards.php',        // WP Twitter Cards
	);

	/**
	 * Message to display in admin_notice
	 * @var string
	 */
	var $message = '';

	/**
	 * Error to display in admin_notice
	 * @var string
	 */
	var $error = '';

	/**
	 * Modules that need more privacy description.
	 * @var string
	 */
	var $privacy_checks = '';

	/**
	 * Stats to record once the page loads
	 *
	 * @var array
	 */
	var $stats = array();

	/**
	 * Jetpack_Sync object
	 */
	var $sync;

	/**
	 * Verified data for JSON authorization request
	 */
	var $json_api_authorization_request = array();

	/**
	 * Holds the singleton instance of this class
	 * @since 2.3.3
	 * @var Jetpack
	 */
	static $instance = false;

	/**
	 * Singleton
	 * @static
	 */
	public static function init() {
		if ( ! self::$instance ) {
			if ( did_action( 'plugins_loaded' ) )
				self::plugin_textdomain();
			else
				add_action( 'plugins_loaded', array( __CLASS__, 'plugin_textdomain' ), 99 );

			self::$instance = new Jetpack;

			self::$instance->plugin_upgrade();
		}

		return self::$instance;
	}

	/**
	 * Must never be called statically
	 */
	function plugin_upgrade() {
		// Upgrade: 1.1 -> 1.2
		if ( get_option( 'jetpack_id' ) ) {
			// Move individual jetpack options to single array of options
			$options = array();
			foreach ( Jetpack_Options::get_option_names() as $option ) {
				if ( false !== $value = get_option( "jetpack_$option" ) ) {
					$options[$option] = $value;
				}
			}

			if ( $options ) {
				Jetpack_Options::update_options( $options );

				foreach ( array_keys( $options ) as $option ) {
					delete_option( "jetpack_$option" );
				}
			}

			// Add missing version and old_version options
			if ( ! $version = Jetpack_Options::get_option( 'version' ) ) {
				$version = $old_version = '1.1:' . time();
				Jetpack_Options::update_options( compact( 'version', 'old_version' ) );
			}
		}

		// Upgrade from a single user token to a user_id-indexed array and a master_user ID
		if ( ! Jetpack_Options::get_option( 'user_tokens' ) ) {
			if ( $user_token = Jetpack_Options::get_option( 'user_token' ) ) {
				$token_parts = explode( '.', $user_token );
				if ( isset( $token_parts[2] ) ) {
					$master_user = $token_parts[2];
					$user_tokens = array( $master_user => $user_token );
					Jetpack_Options::update_options( compact( 'master_user', 'user_tokens' ) );
					Jetpack_Options::delete_option( 'user_token' );
				} else {
					// @todo: is this even possible?
					trigger_error( sprintf( 'Jetpack::plugin_upgrade found no user_id in user_token "%s"', $user_token ), E_USER_WARNING );
				}
			}
		}

		// Clean up legacy G+ Authorship data.
		if ( get_option( 'gplus_authors' ) ) {
			delete_option( 'gplus_authors' );
			delete_option( 'hide_gplus' );
			delete_metadata( 'post', 0, 'gplus_authorship_disabled', null, true );
		}

		if ( Jetpack::is_active() && Jetpack::maybe_set_version_option() ) {
			do_action( 'jetpack_sync_all_registered_options' );
		}

	}

	/**
	 * Constructor.  Initializes WordPress hooks
	 */
	private function Jetpack() {
		/*
		 * Check for and alert any deprecated hooks
		 */
		add_action( 'init', array( $this, 'deprecated_hooks' ) );

		/*
		 * Do things that should run even in the network admin
		 * here, before we potentially fail out.
		 */
		add_filter( 'jetpack_require_lib_dir', 		array( $this, 'require_lib_dir' ) );
		/**
		 * Update the main_network_site on .com
		 */
		add_filter( 'pre_option_jetpack_main_network_site', array( $this, 'jetpack_main_network_site_option' ) );
		add_action( 'update_option_siteurl', 			array( $this, 'update_jetpack_main_network_site_option' ) );
		// Update jetpack_is_main_network on .com
		add_filter( 'pre_option_jetpack_is_main_network', array( $this, 'is_main_network_option' ) );
		/*
		 * Load things that should only be in Network Admin.
		 *
		 * For now blow away everything else until a more full
		 * understanding of what is needed at the network level is
		 * available
		 */
		if( is_multisite() ) {
			Jetpack_Network::init();

			if( is_network_admin() )
			    return; // End here to prevent single site actions from firing
		}



		$this->sync = new Jetpack_Sync;

		// Modules should do Jetpack_Sync::sync_options( __FILE__, $option, ... ); instead
		// We access the "internal" method here only because the Jetpack object isn't instantiated yet
		$this->sync->options(
			JETPACK__PLUGIN_DIR . 'jetpack.php',
			'home',
			'siteurl',
			'blogname',
			'gmt_offset',
			'timezone_string',
			'jetpack_main_network_site',
			'jetpack_is_main_network'
		);

		add_action( 'update_option', array( $this, 'log_settings_change' ), 10, 3 );

		if ( defined( 'XMLRPC_REQUEST' ) && XMLRPC_REQUEST && isset( $_GET['for'] ) && 'jetpack' == $_GET['for'] ) {
			@ini_set( 'display_errors', false ); // Display errors can cause the XML to be not well formed.

			require_once JETPACK__PLUGIN_DIR . 'class.jetpack-xmlrpc-server.php';
			$this->xmlrpc_server = new Jetpack_XMLRPC_Server();

			$this->require_jetpack_authentication();

			if ( Jetpack::is_active() ) {
				// Hack to preserve $HTTP_RAW_POST_DATA
				add_filter( 'xmlrpc_methods', array( $this, 'xmlrpc_methods' ) );

				$signed = $this->verify_xml_rpc_signature();
				if ( $signed && ! is_wp_error( $signed ) ) {
					// The actual API methods.
					add_filter( 'xmlrpc_methods', array( $this->xmlrpc_server, 'xmlrpc_methods' ) );
				} else {
					add_filter( 'xmlrpc_methods', '__return_empty_array' );
				}
			} else {
				// The bootstrap API methods.
				add_filter( 'xmlrpc_methods', array( $this->xmlrpc_server, 'bootstrap_xmlrpc_methods' ) );
			}

			// Now that no one can authenticate, and we're whitelisting all XML-RPC methods, force enable_xmlrpc on.
			add_filter( 'pre_option_enable_xmlrpc', '__return_true' );
		} elseif ( is_admin() && isset( $_POST['action'] ) && 'jetpack_upload_file' == $_POST['action'] ) {
			$this->require_jetpack_authentication();
			$this->add_remote_request_handlers();
		} else {
			if ( Jetpack::is_active() ) {
				add_action( 'login_form_jetpack_json_api_authorization', array( &$this, 'login_form_json_api_authorization' ) );
				add_filter( 'xmlrpc_methods', array( $this, 'public_xmlrpc_methods' ) );
			}
		}

		if ( Jetpack::is_active() ) {
			Jetpack_Heartbeat::init();
		}

		add_action( 'jetpack_clean_nonces', array( 'Jetpack', 'clean_nonces' ) );
		if ( ! wp_next_scheduled( 'jetpack_clean_nonces' ) ) {
			wp_schedule_event( time(), 'hourly', 'jetpack_clean_nonces' );
		}

		add_filter( 'xmlrpc_blog_options', array( $this, 'xmlrpc_options' ) );

		add_action( 'admin_menu', array( $this, 'admin_menu' ), 999 ); // run late so that other plugins hooking into this menu don't get left out
		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_action( 'admin_init', array( $this, 'dismiss_jetpack_notice' ) );

		add_filter( 'admin_body_class', array( $this, 'admin_body_class' ) );

		add_action( 'wp_ajax_jetpack-check-news-subscription', array( $this, 'check_news_subscription' ) );
		add_action( 'wp_ajax_jetpack-subscribe-to-news', array( $this, 'subscribe_to_news' ) );

		add_action( 'wp_ajax_jetpack-sync-reindex-trigger', array( $this, 'sync_reindex_trigger' ) );
		add_action( 'wp_ajax_jetpack-sync-reindex-status', array( $this, 'sync_reindex_status' ) );

		add_action( 'wp_loaded', array( $this, 'register_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'devicepx' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'devicepx' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'devicepx' ) );

		// add_action( 'jetpack_admin_menu', array( $this, 'admin_menu_modules' ) );

		add_action( 'jetpack_activate_module', array( $this, 'activate_module_actions' ) );

		add_action( 'plugins_loaded', array( $this, 'extra_oembed_providers' ), 100 );

		add_action( 'jetpack_notices', array( $this, 'show_development_mode_notice' ) );

		/**
		 * These actions run checks to load additional files.
		 * They check for external files or plugins, so they need to run as late as possible.
		 */
		add_action( 'wp_head', array( $this, 'check_open_graph' ),       1 );
		add_action( 'plugins_loaded', array( $this, 'check_twitter_tags' ),     999 );
		add_action( 'plugins_loaded', array( $this, 'check_rest_api_compat' ), 1000 );

		add_filter( 'plugins_url',      array( 'Jetpack', 'maybe_min_asset' ),     1, 3 );
		add_filter( 'style_loader_tag', array( 'Jetpack', 'maybe_inline_style' ), 10, 2 );

		add_filter( 'map_meta_cap', array( $this, 'jetpack_custom_caps' ), 1, 4 );

		add_filter( 'jetpack_get_default_modules', array( $this, 'filter_default_modules' ) );
		add_filter( 'jetpack_get_default_modules', array( $this, 'handle_deprecated_modules' ), 99 );

		/**
		 * This is the hack to concatinate all css files into one.
		 * For description and reasoning see the implode_frontend_css method
		 *
		 * Super late priority so we catch all the registered styles
		 */
		if( !is_admin() ) {
			add_action( 'wp_print_styles', array( $this, 'implode_frontend_css' ), -1 ); // Run first
			add_action( 'wp_print_footer_scripts', array( $this, 'implode_frontend_css' ), -1 ); // Run first to trigger before `print_late_styles`
		}
	}

	/**
	 * If there are any stats that need to be pushed, but haven't been, push them now.
	 */
	function __destruct() {
		if ( ! empty( $this->stats ) ) {
			$this->do_stats( 'server_side' );
		}
	}

	function jetpack_custom_caps( $caps, $cap, $user_id, $args ) {
		switch( $cap ) {
			case 'jetpack_connect' :
			case 'jetpack_reconnect' :
				if ( Jetpack::is_development_mode() ) {
					$caps = array( 'do_not_allow' );
					break;
				}
				/**
				 * Pass through. If it's not development mode, these should match disconnect.
				 * Let users disconnect if it's development mode, just in case things glitch.
				 */
			case 'jetpack_disconnect' :
				/**
				 * In multisite, can individual site admins manage their own connection?
				 *
				 * Ideally, this should be extracted out to a separate filter in the Jetpack_Network class.
				 */
				if ( is_multisite() && ! is_super_admin() && is_plugin_active_for_network( 'jetpack/jetpack.php' ) ) {
					if ( ! Jetpack_Network::init()->get_option( 'sub-site-connection-override' ) ) {
						/**
						 * We need to update the option name -- it's terribly unclear which
						 * direction the override goes.
						 *
						 * @todo: Update the option name to `sub-sites-can-manage-own-connections`
						 */
						$caps = array( 'do_not_allow' );
						break;
					}
				}

				$caps = array( 'manage_options' );
				break;
			case 'jetpack_manage_modules' :
			case 'jetpack_activate_modules' :
			case 'jetpack_deactivate_modules' :
				$caps = array( 'manage_options' );
				break;
			case 'jetpack_configure_modules' :
				$caps = array( 'manage_options' );
				break;
			case 'jetpack_admin_page' :
				if ( Jetpack::is_development_mode() ) {
					$caps = array( 'manage_options' );
					break;
				}
				/**
				 * Pass through. If it's not development mode, these should match the admin page.
				 * Let users disconnect if it's development mode, just in case things glitch.
				 */
			case 'jetpack_connect_user' :
				if ( Jetpack::is_development_mode() ) {
					$caps = array( 'do_not_allow' );
					break;
				}
				$caps = array( 'read' );
				break;
		}
		return $caps;
	}

	function require_jetpack_authentication() {
		// Don't let anyone authenticate
		$_COOKIE = array();
		remove_all_filters( 'authenticate' );

		/**
		 * For the moment, remove Limit Login Attempts if its xmlrpc for Jetpack.
		 * If Limit Login Attempts is installed as a mu-plugin, it can occasionally
		 * generate false-positives.
		 */
		remove_filter( 'wp_login_failed', 'limit_login_failed' );

		if ( Jetpack::is_active() ) {
			// Allow Jetpack authentication
			add_filter( 'authenticate', array( $this, 'authenticate_jetpack' ), 10, 3 );
		}
	}

	/**
	 * Load language files
	 */
	public static function plugin_textdomain() {
		// Note to self, the third argument must not be hardcoded, to account for relocated folders.
		load_plugin_textdomain( 'jetpack', false, dirname( plugin_basename( JETPACK__PLUGIN_FILE ) ) . '/languages/' );
	}

	/**
	 * Register assets for use in various modules and the Jetpack admin page.
	 *
	 * @uses wp_script_is, wp_register_script, plugins_url
	 * @action wp_loaded
	 * @return null
	 */
	public function register_assets() {
		if ( ! wp_script_is( 'spin', 'registered' ) ) {
			wp_register_script( 'spin', plugins_url( '_inc/spin.js', JETPACK__PLUGIN_FILE ), false, '1.3' );
		}

		if ( ! wp_script_is( 'jquery.spin', 'registered' ) ) {
			wp_register_script( 'jquery.spin', plugins_url( '_inc/jquery.spin.js', JETPACK__PLUGIN_FILE ) , array( 'jquery', 'spin' ), '1.3' );
		}

		if ( ! wp_script_is( 'jetpack-gallery-settings', 'registered' ) ) {
			wp_register_script( 'jetpack-gallery-settings', plugins_url( '_inc/gallery-settings.js', JETPACK__PLUGIN_FILE ), array( 'media-views' ), '20121225' );
		}

		/**
		 * As jetpack_register_genericons is by default fired off a hook,
		 * the hook may have already fired by this point.
		 * So, let's just trigger it manually.
		 */
		require_once( JETPACK__PLUGIN_DIR . '_inc/genericons.php' );
		jetpack_register_genericons();

		if ( ! wp_style_is( 'jetpack-icons', 'registered' ) )
			wp_register_style( 'jetpack-icons', plugins_url( 'css/jetpack-icons.min.css', JETPACK__PLUGIN_FILE ), false, JETPACK__VERSION );
	}

	/**
	 * Device Pixels support
	 * This improves the resolution of gravatars and wordpress.com uploads on hi-res and zoomed browsers.
	 */
	function devicepx() {
		if ( Jetpack::is_active() ) {
			wp_enqueue_script( 'devicepx', set_url_scheme( 'http://s0.wp.com/wp-content/js/devicepx-jetpack.js' ), array(), gmdate( 'oW' ), true );
		}
	}

	/*
	 * Returns the location of Jetpack's lib directory. This filter is applied
	 * in require_lib().
	 *
	 * @filter require_lib_dir
	 */
	function require_lib_dir( $lib_dir ) {
		return JETPACK__PLUGIN_DIR . '_inc/lib';
	}

	/**
	 * Return the network_site_url so that .com knows what network this site is a part of.
	 * @param  bool $option
	 * @return string
	 */
	function jetpack_main_network_site_option( $option ) {
		return network_site_url();
	}

	/**
	 * Return whether we are dealing with a multi network setup or not.
	 * The reason we are type casting this is because we want to avoid the situation where
	 * the result is false since when is_main_network_option return false it cases
	 * the rest the get_option( 'jetpack_is_multi_network' ); to return the value that is set in the
	 * database which could be set to anything as opposed to what this function returns.
	 * @param  bool  $option
	 *
	 * @return boolean
	 */
	public static function is_main_network_option( $option ) {
		// return '1' or ''
		return (string) (bool) Jetpack::is_multi_network();
	}

	/**
	 * Implemented since there is no core is multi network function
	 * Right now there is no way to tell if we which network is the dominant network on the system
	 *
	 * @since  3.3
	 * @return boolean
	 */
	public static function is_multi_network() {
		global  $wpdb;

		// if we don't have a multi site setup no need to do any more
		if ( ! is_multisite() ) {
			return false;
		}

		$num_sites = $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->site}" );
		if ( $num_sites > 1 ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Trigger an update to the main_network_site when we update the siteurl of a site.
	 * @return null
	 */
	function update_jetpack_main_network_site_option() {
		do_action( 'add_option_jetpack_main_network_site', 'main_network_site', network_site_url() );
		do_action( 'add_option_jetpack_is_main_network', 'jetpack_is_main_network', (string) (bool) Jetpack::is_multi_network() );
	}

	/**
	 * Is Jetpack active?
	 */
	public static function is_active() {
		return (bool) Jetpack_Data::get_access_token( JETPACK_MASTER_USER );
	}

	/**
	 * Is Jetpack in development (offline) mode?
	 */
	public static function is_development_mode() {
		$development_mode = false;

		if ( defined( 'JETPACK_DEV_DEBUG' ) ) {
			$development_mode = JETPACK_DEV_DEBUG;
		}

		elseif ( site_url() && false === strpos( site_url(), '.' ) ) {
			$development_mode = true;
		}
		return apply_filters( 'jetpack_development_mode', $development_mode );
	}

	/**
	* Get Jetpack development mode notice text and notice class.
	*
	* Mirrors the checks made in Jetpack::is_development_mode
	*
	*/
	public static function show_development_mode_notice() {
		if ( Jetpack::is_development_mode() ) {
			if ( defined( 'JETPACK_DEV_DEBUG' ) && JETPACK_DEV_DEBUG ) {
				$notice = __( 'In Development Mode, via the JETPACK_DEV_DEBUG constant being defined in wp-config.php or elsewhere.', 'jetpack' );
			} elseif ( site_url() && false === strpos( site_url(), '.' ) ) {
				$notice = __( 'In Development Mode, via site URL lacking a dot (e.g. http://localhost).', 'jetpack' );
			} else {
				$notice = __( 'In Development Mode, via the jetpack_development_mode filter.', 'jetpack' );
			}

			$output = '<div class="error"><p>' . $notice . '</p></div>';
			echo $output;
		}
	}

	/**
	 * Whether Jetpack's version maps to a public release, or a development version.
	 */
	public static function is_development_version() {
		return ! preg_match( '/^\d+(\.\d+)+$/', JETPACK__VERSION );
	}

	/**
	 * Is a given user (or the current user if none is specified) linked to a WordPress.com user?
	 */
	public static function is_user_connected( $user_id = false ) {
		$user_id = false === $user_id ? get_current_user_id() : absint( $user_id );
		if ( ! $user_id ) {
			return false;
		}
		return (bool) Jetpack_Data::get_access_token( $user_id );
	}

	/**
	 * Get the wpcom user data of the current|specified connected user.
	 */
	public static function get_connected_user_data( $user_id = null ) {
		if ( ! $user_id ) {
			$user_id = get_current_user_id();
		}
		Jetpack::load_xml_rpc_client();
		$xml = new Jetpack_IXR_Client( array(
			'user_id' => $user_id,
		) );
		$xml->query( 'wpcom.getUser' );
		if ( ! $xml->isError() ) {
			return $xml->getResponse();
		}
		return false;
	}

	/**
	 * Get the wpcom email of the current|specified connected user.
	 */
	public static function get_connected_user_email( $user_id = null ) {
		if ( ! $user_id ) {
			$user_id = get_current_user_id();
		}
		Jetpack::load_xml_rpc_client();
		$xml = new Jetpack_IXR_Client( array(
			'user_id' => $user_id,
		) );
		$xml->query( 'wpcom.getUserEmail' );
		if ( ! $xml->isError() ) {
			return $xml->getResponse();
		}
		return false;
	}

	/**
	 * Get the wpcom email of the master user.
	 */
	public static function get_master_user_email() {
		$master_user_id = Jetpack_Options::get_option( 'master_user' );
		if ( $master_user_id ) {
			return self::get_connected_user_email( $master_user_id );
		}
		return '';
	}

	function current_user_is_connection_owner() {
		$user_token = Jetpack_Data::get_access_token( JETPACK_MASTER_USER );
		return $user_token && is_object( $user_token ) && isset( $user_token->external_user_id ) && get_current_user_id() === $user_token->external_user_id;
	}

	/**
	 * Add any extra oEmbed providers that we know about and use on wpcom for feature parity.
	 */
	function extra_oembed_providers() {
		// Cloudup: https://dev.cloudup.com/#oembed
		wp_oembed_add_provider( 'https://cloudup.com/*' , 'https://cloudup.com/oembed' );
	}

	/**
	 * Synchronize connected user role changes
	 */
	function user_role_change( $user_id ) {
		if ( Jetpack::is_active() && Jetpack::is_user_connected( $user_id ) ) {
			$current_user_id = get_current_user_id();
			wp_set_current_user( $user_id );
			$role = $this->translate_current_user_to_role();
			$signed_role = $this->sign_role( $role );
			wp_set_current_user( $current_user_id );

			$master_token   = Jetpack_Data::get_access_token( JETPACK_MASTER_USER );
			$master_user_id = absint( $master_token->external_user_id );

			if ( ! $master_user_id )
				return; // this shouldn't happen

			Jetpack::xmlrpc_async_call( 'jetpack.updateRole', $user_id, $signed_role );
			//@todo retry on failure

			//try to choose a new master if we're demoting the current one
			if ( $user_id == $master_user_id && 'administrator' != $role ) {
				$query = new WP_User_Query(
					array(
						'fields'  => array( 'id' ),
						'role'    => 'administrator',
						'orderby' => 'id',
						'exclude' => array( $master_user_id ),
					)
				);
				$new_master = false;
				foreach ( $query->results as $result ) {
					$uid = absint( $result->id );
					if ( $uid && Jetpack::is_user_connected( $uid ) ) {
						$new_master = $uid;
						break;
					}
				}

				if ( $new_master ) {
					Jetpack_Options::update_option( 'master_user', $new_master );
				}
				// else disconnect..?
			}
		}
	}

	/**
	 * Loads the currently active modules.
	 */
	public static function load_modules() {
		if( !self::is_active() && !self::is_development_mode() ) {
			return;
		}

		$version = Jetpack_Options::get_option( 'version' );
		if ( ! $version ) {
			$version = $old_version = JETPACK__VERSION . ':' . time();
			Jetpack_Options::update_options( compact( 'version', 'old_version' ) );
		}
		list( $version ) = explode( ':', $version );

		$modules = array_filter( Jetpack::get_active_modules(), array( 'Jetpack', 'is_module' ) );

		$modules_data = array();

		// Don't load modules that have had "Major" changes since the stored version until they have been deactivated/reactivated through the lint check.
		if ( version_compare( $version, JETPACK__VERSION, '<' ) ) {
			$updated_modules = array();
			foreach ( $modules as $module ) {
				$modules_data[ $module ] = Jetpack::get_module( $module );
				if ( ! isset( $modules_data[ $module ]['changed'] ) ) {
					continue;
				}

				if ( version_compare( $modules_data[ $module ]['changed'], $version, '<=' ) ) {
					continue;
				}

				$updated_modules[] = $module;
			}

			$modules = array_diff( $modules, $updated_modules );
		}

		$is_development_mode = Jetpack::is_development_mode();

		foreach ( $modules as $module ) {
			// If we're in dev mode, disable modules requiring a connection
			if ( $is_development_mode ) {
				// Prime the pump if we need to
				if ( empty( $modules_data[ $module ] ) ) {
					$modules_data[ $module ] = Jetpack::get_module( $module );
				}
				// If the module requires a connection, but we're in local mode, don't include it.
				if ( $modules_data[ $module ]['requires_connection'] ) {
					continue;
				}
			}

			if ( did_action( 'jetpack_module_loaded_' . $module ) ) {
				continue;
			}

			require Jetpack::get_module_path( $module );
			do_action( 'jetpack_module_loaded_' . $module );
		}

		do_action( 'jetpack_modules_loaded' );

		// Load module-specific code that is needed even when a module isn't active. Loaded here because code contained therein may need actions such as setup_theme.
		if ( Jetpack::is_active() || Jetpack::is_development_mode() )
			require_once( JETPACK__PLUGIN_DIR . 'modules/module-extras.php' );
	}

	/**
	 * Check if Jetpack's REST API compat file should be included
	 * @action plugins_loaded
	 * @return null
	 */
	public function check_rest_api_compat() {
		$_jetpack_rest_api_compat_includes = apply_filters( 'jetpack_rest_api_compat', array() );

		if ( function_exists( 'bbpress' ) )
			$_jetpack_rest_api_compat_includes[] = JETPACK__PLUGIN_DIR . 'class.jetpack-bbpress-json-api-compat.php';

		foreach ( $_jetpack_rest_api_compat_includes as $_jetpack_rest_api_compat_include )
			require_once $_jetpack_rest_api_compat_include;
	}

	/**
	 * Gets all plugins currently active in values, regardless of whether they're
	 * traditionally activated or network activated.
	 *
	 * @todo Store the result in core's object cache maybe?
	 */
	public static function get_active_plugins() {
		$active_plugins = (array) get_option( 'active_plugins', array() );

		if ( is_multisite() ) {
			// Due to legacy code, active_sitewide_plugins stores them in the keys,
			// whereas active_plugins stores them in the values.
			$network_plugins = array_keys( get_site_option( 'active_sitewide_plugins', array() ) );
			if ( $network_plugins ) {
				$active_plugins = array_merge( $active_plugins, $network_plugins );
			}
		}

		sort( $active_plugins );

		return $active_plugins;
	}

	/**
	 * Checks whether a specific plugin is active.
	 *
	 * We don't want to store these in a static variable, in case
	 * there are switch_to_blog() calls involved.
	 */
	public static function is_plugin_active( $plugin = 'jetpack/jetpack.php' ) {
		return in_array( $plugin, self::get_active_plugins() );
	}

	/**
	 * Check if Jetpack's Open Graph tags should be used.
	 * If certain plugins are active, Jetpack's og tags are suppressed.
	 *
	 * @uses Jetpack::get_active_modules, add_filter, get_option, apply_filters
	 * @action plugins_loaded
	 * @return null
	 */
	public function check_open_graph() {
		if ( in_array( 'publicize', Jetpack::get_active_modules() ) || in_array( 'sharedaddy', Jetpack::get_active_modules() ) ) {
			add_filter( 'jetpack_enable_open_graph', '__return_true', 0 );
		}

		$active_plugins = self::get_active_plugins();

		if ( ! empty( $active_plugins ) ) {
			foreach ( $this->open_graph_conflicting_plugins as $plugin ) {
				if ( in_array( $plugin, $active_plugins ) ) {
					add_filter( 'jetpack_enable_open_graph', '__return_false', 99 );
					break;
				}
			}
		}

		if ( apply_filters( 'jetpack_enable_open_graph', false ) ) {
			require_once JETPACK__PLUGIN_DIR . 'functions.opengraph.php';
		}
	}

	/**
	 * Check if Jetpack's Twitter tags should be used.
	 * If certain plugins are active, Jetpack's twitter tags are suppressed.
	 *
	 * @uses Jetpack::get_active_modules, add_filter, get_option, apply_filters
	 * @action plugins_loaded
	 * @return null
	 */
	public function check_twitter_tags() {

		$active_plugins = self::get_active_plugins();

		if ( ! empty( $active_plugins ) ) {
			foreach ( $this->twitter_cards_conflicting_plugins as $plugin ) {
				if ( in_array( $plugin, $active_plugins ) ) {
					add_filter( 'jetpack_disable_twitter_cards', '__return_true', 99 );
					break;
				}
			}
		}

		if ( apply_filters( 'jetpack_disable_twitter_cards', true ) ) {
			require_once JETPACK__PLUGIN_DIR . 'class.jetpack-twitter-cards.php';
		}
	}

/* Jetpack Options API */

	public static function get_option_names( $type = 'compact' ) {
		return Jetpack_Options::get_option_names( $type );
	}

	/**
	 * Returns the requested option.  Looks in jetpack_options or jetpack_$name as appropriate.
 	 *
	 * @param string $name    Option name
	 * @param mixed  $default (optional)
	 */
	public static function get_option( $name, $default = false ) {
		return Jetpack_Options::get_option( $name, $default );
	}

	/**
	* Stores two secrets and a timestamp so WordPress.com can make a request back and verify an action
	* Does some extra verification so urls (such as those to public-api, register, etc) can't just be crafted
	* $name must be a registered option name.
	*/
	public static function create_nonce( $name ) {
		$secret = wp_generate_password( 32, false ) . ':' . wp_generate_password( 32, false ) . ':' . ( time() + 600 );

		Jetpack_Options::update_option( $name, $secret );
		@list( $secret_1, $secret_2, $eol ) = explode( ':', Jetpack_Options::get_option( $name ) );
		if ( empty( $secret_1 ) || empty( $secret_2 ) || $eol < time() )
			return new Jetpack_Error( 'missing_secrets' );

		return array(
			'secret_1' => $secret_1,
			'secret_2' => $secret_2,
			'eol'      => $eol,
		);
	}

	/**
	 * Updates the single given option.  Updates jetpack_options or jetpack_$name as appropriate.
 	 *
	 * @param string $name  Option name
	 * @param mixed  $value Option value
	 */
	public static function update_option( $name, $value ) {
		return Jetpack_Options::update_option( $name, $value );
	}

	/**
	 * Updates the multiple given options.  Updates jetpack_options and/or jetpack_$name as appropriate.
 	 *
	 * @param array $array array( option name => option value, ... )
	 */
	public static function update_options( $array ) {
		return Jetpack_Options::update_options( $array );
	}

	/**
	 * Deletes the given option.  May be passed multiple option names as an array.
	 * Updates jetpack_options and/or deletes jetpack_$name as appropriate.
 	 *
	 * @param string|array $names
	 */
	public static function delete_option( $names ) {
		return Jetpack_Options::delete_option( $names );
	}

	/**
	 * Enters a user token into the user_tokens option
	 *
	 * @param int $user_id
	 * @param string $token
	 * return bool
	 */
	public static function update_user_token( $user_id, $token, $is_master_user ) {
		// not designed for concurrent updates
		$user_tokens = Jetpack_Options::get_option( 'user_tokens' );
		if ( ! is_array( $user_tokens ) )
			$user_tokens = array();
		$user_tokens[$user_id] = $token;
		if ( $is_master_user ) {
			$master_user = $user_id;
			$options     = compact( 'user_tokens', 'master_user' );
		} else {
			$options = compact( 'user_tokens' );
		}
		return Jetpack_Options::update_options( $options );
	}

	/**
	 * Returns an array of all PHP files in the specified absolute path.
	 * Equivalent to glob( "$absolute_path/*.php" ).
	 *
	 * @param string $absolute_path The absolute path of the directory to search.
	 * @return array Array of absolute paths to the PHP files.
	 */
	public static function glob_php( $absolute_path ) {
		if ( function_exists( 'glob' ) ) {
			return glob( "$absolute_path/*.php" );
		}

		$absolute_path = untrailingslashit( $absolute_path );
		$files = array();
		if ( ! $dir = @opendir( $absolute_path ) ) {
			return $files;
		}

		while ( false !== $file = readdir( $dir ) ) {
			if ( '.' == substr( $file, 0, 1 ) || '.php' != substr( $file, -4 ) ) {
				continue;
			}

			$file = "$absolute_path/$file";

			if ( ! is_file( $file ) ) {
				continue;
			}

			$files[] = $file;
		}

		closedir( $dir );

		return $files;
	}

	public function activate_new_modules() {
		if ( ! Jetpack::is_active() && ! Jetpack::is_development_mode() ) {
			return;
		}

		$jetpack_old_version = Jetpack_Options::get_option( 'version' ); // [sic]
		if ( ! $jetpack_old_version ) {
			$jetpack_old_version = $version = $old_version = '1.1:' . time();
			Jetpack_Options::update_options( compact( 'version', 'old_version' ) );
		}

		list( $jetpack_version ) = explode( ':', $jetpack_old_version ); // [sic]

		if ( version_compare( JETPACK__VERSION, $jetpack_version, '<=' ) ) {
			return;
		}

		$active_modules     = Jetpack::get_active_modules();
		$reactivate_modules = array();
		foreach ( $active_modules as $active_module ) {
			$module = Jetpack::get_module( $active_module );
			if ( ! isset( $module['changed'] ) ) {
				continue;
			}

			if ( version_compare( $module['changed'], $jetpack_version, '<=' ) ) {
				continue;
			}

			$reactivate_modules[] = $active_module;
			Jetpack::deactivate_module( $active_module );
		}

		if ( version_compare( $jetpack_version, '1.9.2', '<' ) && version_compare( '1.9-something', JETPACK__VERSION, '<' ) ) {
			add_action( 'jetpack_activate_default_modules', array( $this->sync, 'sync_all_registered_options' ), 1000 );
		}

		Jetpack_Options::update_options(
			array(
				'version'     => JETPACK__VERSION . ':' . time(),
				'old_version' => $jetpack_old_version,
			)
		);

		Jetpack::state( 'message', 'modules_activated' );
		Jetpack::activate_default_modules( $jetpack_version, JETPACK__VERSION, $reactivate_modules );

		$page = 'jetpack'; // make sure we redirect to either settings or the jetpack page
		if( isset( $_GET['page'] ) && in_array( $_GET['page'] , array( 'jetpack', 'jetpack_modules' ) ) ) {
			$page = $_GET['page'];
		}

		wp_safe_redirect( Jetpack::admin_url( 'page='.$page ) );
		exit;
	}

	/**
	 * List available Jetpack modules. Simply lists .php files in /modules/.
	 * Make sure to tuck away module "library" files in a sub-directory.
	 */
	public static function get_available_modules( $min_version = false, $max_version = false ) {
		static $modules = null;

		if ( ! isset( $modules ) ) {
			$available_modules_option = Jetpack_Options::get_option( 'available_modules', array() );
			// Use the cache if we're on the front-end and it's available...
			if ( ! is_admin() && ! empty( $available_modules_option[ JETPACK__VERSION ] ) ) {
				$modules = $available_modules_option[ JETPACK__VERSION ];
			} else {
				$files = Jetpack::glob_php( JETPACK__PLUGIN_DIR . 'modules' );

				$modules = array();

				foreach ( $files as $file ) {
					if ( ! $headers = Jetpack::get_module( $file ) ) {
						continue;
					}

					$modules[ Jetpack::get_module_slug( $file ) ] = $headers['introduced'];
				}

				Jetpack_Options::update_option( 'available_modules', array(
					JETPACK__VERSION => $modules,
				) );
			}
		}

		$modules = apply_filters( 'jetpack_get_available_modules', $modules, $min_version, $max_version );

		if ( ! $min_version && ! $max_version ) {
			return array_keys( $modules );
		}

		$r = array();
		foreach ( $modules as $slug => $introduced ) {
			if ( $min_version && version_compare( $min_version, $introduced, '>=' ) ) {
				continue;
			}

			if ( $max_version && version_compare( $max_version, $introduced, '<' ) ) {
				continue;
			}

			$r[] = $slug;
		}

		return $r;
	}

	/**
	 * Default modules loaded on activation.
	 */
	public static function get_default_modules( $min_version = false, $max_version = false ) {
		$return = array();

		foreach ( Jetpack::get_available_modules( $min_version, $max_version ) as $module ) {
			$module_data = Jetpack::get_module( $module );

			switch ( strtolower( $module_data['auto_activate'] ) ) {
				case 'yes' :
					$return[] = $module;
					break;
				case 'public' :
					if ( Jetpack_Options::get_option( 'public' ) ) {
						$return[] = $module;
					}
					break;
				case 'no' :
				default :
					break;
			}
		}
		return apply_filters( 'jetpack_get_default_modules', $return, $min_version, $max_version );
	}

	/**
	 * Checks activated modules during auto-activation to determine
	 * if any of those modules are being deprecated.  If so, close
	 * them out, and add any replacement modules.
	 *
	 * Runs at priority 99 by default.
	 *
	 * This is run late, so that it can still activate a module if
	 * the new module is a replacement for another that the user
	 * currently has active, even if something at the normal priority
	 * would kibosh everything.
	 *
	 * @since 2.6
	 * @uses jetpack_get_default_modules filter
	 * @param array $modules
	 * @return array
	 */
	function handle_deprecated_modules( $modules ) {
		$deprecated_modules = array(
			'debug'            => null,  // Closed out and moved to ./class.jetpack-debugger.php
			'wpcc'             => 'sso', // Closed out in 2.6 -- SSO provides the same functionality.
			'gplus-authorship' => null,  // Closed out in 3.2 -- Google dropped support.
		);

		// Don't activate SSO if they never completed activating WPCC.
		if ( Jetpack::is_module_active( 'wpcc' ) ) {
			$wpcc_options = Jetpack_Options::get_option( 'wpcc_options' );
			if ( empty( $wpcc_options ) || empty( $wpcc_options['client_id'] ) || empty( $wpcc_options['client_id'] ) ) {
				$deprecated_modules['wpcc'] = null;
			}
		}

		foreach ( $deprecated_modules as $module => $replacement ) {
			if ( Jetpack::is_module_active( $module ) ) {
				self::deactivate_module( $module );
				if ( $replacement ) {
					$modules[] = $replacement;
				}
			}
		}

		return array_unique( $modules );
	}

	/**
	 * Checks activated plugins during auto-activation to determine
	 * if any of those plugins are in the list with a corresponding module
	 * that is not compatible with the plugin. The module will not be allowed
	 * to auto-activate.
	 *
	 * @since 2.6
	 * @uses jetpack_get_default_modules filter
	 * @param array $modules
	 * @return array
	 */
	function filter_default_modules( $modules ) {

		$active_plugins = self::get_active_plugins();

		if ( ! empty( $active_plugins ) ) {

			// For each module we'd like to auto-activate...
			foreach ( $modules as $key => $module ) {
				// If there are potential conflicts for it...
				if ( 