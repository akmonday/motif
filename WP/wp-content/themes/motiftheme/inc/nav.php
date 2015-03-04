<div class="navigation">
	<div class="w-container">
		<div class="w-row nav-row">
			<div class="w-col w-col-2 w-clearfix nav-column-1">
				<a class="w-inline-block logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img src="<?php bloginfo('template_url'); ?>/images/motif-logo.svg" width="81" alt="motif-logo.svg">
				</a>
				<a class="w-inline-block logo ie-image" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img src="<?php bloginfo('template_url'); ?>/images/motif-logo-sm.jpg" alt="motif-logo.svg">
				</a>
				<div class="w-hidden-main w-hidden-medium search-nav mobile" data-ix="expand">
					<img class="search-nav-image" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQwIDQwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MCA0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjM0FBRDJBIiBkPSJNMjkuOCwyNC45bDEwLDEwYzAuMSwwLjIsMC4yLDAuMywwLjIsMC42YzAsMC4yLTAuMSwwLjQtMC4yLDAuNmwtMy43LDMuN0MzNiwzOS45LDM1LjgsNDAsMzUuNiw0MA0KCXMtMC40LTAuMS0wLjYtMC4ybC0xMC0xMGMtMi43LDEuOC01LjYsMi42LTguNywyLjZjLTQuNCwwLTguMi0xLjYtMTEuNC00LjhDMS42LDI0LjQsMCwyMC43LDAsMTYuMlMxLjYsOCw0LjgsNC44DQoJQzcuOSwxLjYsMTEuNywwLDE2LjIsMHM4LjIsMS42LDExLjMsNC44YzMuMSwzLjEsNC44LDcsNC44LDExLjRDMzIuMywxOS4zLDMxLjQsMjIuMiwyOS44LDI0Ljl6IE04LjMsMjRjMi4xLDIuMSw0LjgsMy4yLDcuOCwzLjINCglzNS43LTEuMSw3LjgtMy4yczMuMi00LjgsMy4yLTcuOHMtMS4xLTUuNy0zLjItNy44cy00LjgtMy4yLTcuOC0zLjJzLTUuNywxLjEtNy44LDMuMnMtMy4yLDQuOC0zLjIsNy44UzYuMiwyMS44LDguMywyNHoiLz4NCjwvc3ZnPg0K" width="20" height="20" alt="search-icon.svg">
				</div>
				<a class="w-hidden-main w-hidden-medium w-hidden-tiny button blue" href="<?php echo site_url(); ?>/sign-up">Sign In</a>
				<a class="w-hidden-main w-hidden-medium w-hidden-tiny button" href="<?php echo site_url(); ?>/sign-up">Sign up</a>
				<div class="w-hidden-main w-hidden-medium">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
				</div>
			</div>
			<div class="w-col w-col-10 w-clearfix nav-column-2">
				<a class="screen-reader-text skip-link" href="#content"><?php _e( 'Skip to content', 'motiftheme' ); ?></a>
				<div class="w-hidden-small w-hidden-tiny desktop-nav">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
				</div>
				<div class="w-hidden-small w-hidden-tiny w-clearfix search-box mobile">
					<div id="search-container" class="search-box-wrapper">
						<div class="search-box">
							<?php get_search_form(); ?>
						</div>
					</div>
				</div>
				<div class="search-field-wrapper">
					<div class="search-field-mobile" data-ix="display-none">
						<?php get_search_form(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>