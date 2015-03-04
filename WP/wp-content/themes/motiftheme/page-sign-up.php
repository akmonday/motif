<?php
/*
Template Name: Sign Up
*/
get_header(); ?>
<div class="page-title">
	<div class="w-container">
		<h1>Join Motif Investing for Free</h1>
	</div>
</div>
<div class="catalog no-shadow">
	<div class="w-container sign-up-container">
		<div class="sign-up-block">
			<a class="w-inline-block facebook" href="#"><img src="<?php bloginfo('template_url'); ?>/images/fb-logo.png" width="260" alt="fb-logo.png">
			</a>
			<div class="required-text padding">to prefill your profile and get more from our site.</div>
			<div class="break-2 padding"></div>
			<div class="w-form">
				<form class="form" id="email-form" name="email-form" data-name="Email Form">
					<label class="field-label" for="name-8">Email</label>
					<input class="w-input text-field" id="name-8" type="text" placeholder="Enter your email address" name="name-8" data-name="Name 8">
					<label class="field-label" for="email-4">Password</label>
					<input class="w-input text-field" id="email-4" type="email" placeholder="Enter your password" name="email-4" data-name="Email 4" required="required">
				</form>
				<div class="w-form-done">
					<p>Thank you! Your submission has been received!</p>
				</div>
				<div class="w-form-fail">
					<p>Oops! Something went wrong while submitting the form :(</p>
				</div>
			</div><a class="button large" href="#">Create Login</a>
			<div class="sub-category extra-padding">Already a member? <a href="#" class="text-link">Sign In here</a>
			</div>
			<div class="required-text">By signing up you accept the <a href="#" class="text-link">Terms of Use</a>
			</div>
		</div>
	</div>
</div>


<?php get_footer(); ?>
