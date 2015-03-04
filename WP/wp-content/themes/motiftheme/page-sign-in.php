<?php
/*
Template Name: Sign In
*/
get_header(); ?>
<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();

		// Include the page content template.
		get_template_part( 'content', 'page' );

	endwhile;
?>

<div class="catalog no-shadow">
	<div class="w-container join-container">
		<div class="w-row">
			<?php include (TEMPLATEPATH . '/inc/sign-in-form.php' ); ?>
			<div class="w-col w-col-6">
				<div class="sign-up column">
					<h4 class="heading-text"><?php the_field('join_list_heading'); ?></h4>
			            <?php if( have_rows('join_list_items') ): ?>
			            <?php while( have_rows('join_list_items') ): the_row(); ?>
							<div class="w-row join-list">
								<div class="w-col w-col-1 w-col-small-1 w-col-tiny-1">
									<div class="check-mark">✓</div>
								</div>
								<div class="w-col w-col-11 w-col-small-11 w-col-tiny-11">
									<div class="body-text-2"><?php the_sub_field('list_item'); ?></div>
								</div>
							</div>
			            <?php endwhile; ?>
			            <?php endif; ?>

				</div>
				<div class="contact-box">
					<h4 class="heading-text white padding"><?php the_field('contact_box_heading'); ?></h4>
					<div class="contact-text padding"><?php the_field('contact_box_telephone_number'); ?>
						<br><?php the_field('contact_box_hours'); ?>
						<br><a href="<?php the_field('contact_box_email_url'); ?>" class="contact-link"><?php the_field('contact_box_email'); ?></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<?php get_footer(); ?>
