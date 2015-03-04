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
		<div class="sub-category">Already have an account?
			<a class="text-link" href="#">Sign In</a>
		</div>
		<div class="sign-up-block">
			<a class="w-inline-block facebook-button" href="#">
				<img width="32" alt="facebook-icon.svg" src="http://uploads.webflow.com/546e3544b9be676a3bf3c9e1/54ab1cdfab45fe263dc12099_facebook-icon.svg">
				<div class="white-text">Log in with Facebook</div>
			</a>
			<div class="required-text padding">to prefill your profile and get more from our site.</div>
			<div class="break-2 padding"></div>
			<div class="w-form">
				<form class="form" id="email-form" name="email-form" data-name="Email Form">
					<label class="field-label" for="name-8">Email</label>
					<input class="w-input text-field" id="name-8" type="text" placeholder="Enter your email address" name="name-8" data-name="Name 8">
					<label class="field-label" for="email-4">Password</label>
					<input class="w-input text-field" id="email-4" type="password" placeholder="Enter your password" name="email-4" data-name="Email 4" required="required">
				</form>
				<div class="w-form-done">
					<p>Thank you! Your submission has been received!</p>
				</div>
				<div class="w-form-fail">
					<p>Oops! Something went wrong while submitting the form :(</p>
				</div>
			</div>
			<a class="button large signup" href="#">SIGN UP</a>
			<div class="required-text">By signing up you accept the <a href="<?php
			if(get_field('terms_of_service_url'))
			{
				echo  get_field('terms_of_service_url');
			}
			?>" class="text-link">Terms of Use</a>
			</div>
		</div>
		<div class="sub-category extra-padding">Need help?
			<a class="text-link" href="#">service@motifinesting.com</a> or
			<a class="text-link" href="#">1-855-586-6843</a>
		</div>
	</div>
</div>


<?php get_footer(); ?>
