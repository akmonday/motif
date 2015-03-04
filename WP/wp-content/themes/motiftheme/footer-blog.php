<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage motiftheme
 * @since Twenty Fourteen 1.0
 */
?>
</div><!-- #main -->
<div class="w-hidden-tiny breadcrumb">
	<div class="w-container">

		<?php if ( function_exists('yoast_breadcrumb') ) {
			yoast_breadcrumb('<p id="breadcrumbs">','</p>');
		} ?>

	</div>
</div>
<div class="footer">
	<div class="w-container">
		<div class="w-row">
			<?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_class' => 'footer-menu' ) ); ?>
		</div>
	</div>
</div>
<div class="contact">
	<div class="w-container">
		<div class="contact-parent">
            <div class="contact-us-align">
                <h5>Contact Us</h5>
            </div>
            <div class="contact-members">
                Member: 
                <a target="_blank" href="http://www.finra.org">FINRA</a> | 
				<a target="_blank" href="http://www.sipc.org">SIPC</a>
            </div>
        </div>
		<div class="contact-text">1-800-586-6843 / 9am - 6pm ET, Monday-Friday / <a class="contact-link" href="#">service@motifinvesting.com</a>
		</div>
		
		<?php include (TEMPLATEPATH . '/inc/social-links.php' ); ?>

	</div>
</div>
<div class="legal">
	<div class="w-container">
		<p class="legal-text"><strong><?php the_field('footer_legal_text', 'option'); ?></strong></p>
		<?php the_field('blog_footer_disclaimer', 'option'); ?>
	</div>
</div>
<?php wp_footer(); ?>

</body>
</html>