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

			<?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_class' => 'footer-menu ie8' ) ); ?>

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

		<div class="contact-text">1-800-586-6843 / 9am - 6pm ET, Monday-Friday / <a class="contact-link" href="mailto:service@motifinvesting.com">service@motifinvesting.com</a>

		</div>

		

		<?php include (TEMPLATEPATH . '/inc/social-links.php' ); ?>



	</div>

</div>

<div class="legal">

	<div class="w-container">

		<p class="legal-text"><strong><?php the_field('footer_legal_text', 'option'); ?></strong></p>

		<?php



			if(get_field('footer_disclaimer'))

			{

				echo  get_field('footer_disclaimer');

			}



		?>

	</div>

</div>

<?php wp_footer(); ?>




	

<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/visitor.js" ?>'></script>
<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/jquery.mobile.custom.min.js" ?>'></script>
<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/jPages.min.js" ?>'></script>
<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/Pagination.js" ?>'></script>

<script type="text/javascript">

motif.widget = {};

motif.widget.url = '';

</script>
<script id="codeSnippetTemplate" type="text/handlebar">
		<div style="-webkit-box-shadow: 0 0 4px 2px #BBB; -moz-box-shadow: 0 0 4px 2px #BBB; box-shadow: 0 0 4px 2px #BBB; width:{{width}}px; height:{{height}}px; display:inline-block; position:relative;">
<iframe src="https://www.motifinvesting.com/motifs/widget/{{urlName}}?layout=layout{{width}}x{{height}}&theme={{theme}}" scrolling="no" frameBorder="0" width="{{width}}" height="{{height}}"></iframe>
<a href="https://www.motifinvesting.com{{motifDetailUrlPath}}?utm_medium=widget&utm_campaign={{motifName}}&utm_content={{externalUserId}}&source=widget" style="background: url(https://d5me67xtse2u5.cloudfront.net/images/2313.176/motif-widget-sprite.png) no-repeat scroll 0 {{#ifEquals theme "light"}}-107px{{else}}-81px{{/ifEquals}} transparent; bottom: 8px; height: 26px; position: absolute; right: 0; width: 136px; text-decoration:none;">&nbsp;</a>
</div>
	</script>
<script id="communityMotifsBlocked" type="text/html">
	<div class="genericInterstitial">
		<h2>Sorry</h2>
		<div class="message">
			<div class="bubbles"></div>
				This tracker does not support community created motifs at this time, please choose another motif
			</div>
			<div class="note right"><a onclick="$.colorbox.close()" class="boringButton">Close</a></div>
		</div>
	</div>
	</script>
<script id="notEntitled" type="text/html">
		<div class="genericInterstitial">
			<h2>Sorry</h2>
			<div class="message">
				<div class="bubbles"></div>
				This tracker does not support this motif at this time, please choose another motif
			</div>
			<div class="note right"><a onclick="$.colorbox.close()" class="boringButton">Close</a></div>
		</div>
	</script>
<?php 
if(is_page( 'tracker' )) {
?>
<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/motif-widget-editor.js" ?>'></script>
<?php } ?>
<script type="text/javascript">

if (typeof motif.main != "undefined"){

	    motif.main.callPageInit();
}
</script>
<?php if(is_page( 'press' )) { ?>
<script type='text/javascript' src='<?php echo get_bloginfo('template_directory') . "/js/jquery.waterfall.js" ?>'></script>
<script type="text/javascript">
jQuery(function(){
	 jQuery('#Morearticlebtn').css("display", "none");
	jQuery('#Moreradiobtn').css("display", "none");
	 jQuery('#Morepress_releasesbtn').css("display", "none");
	 jQuery('#Moretelevisionbtn').css("display", "none");
	jQuery('a.taballpress').click(function(){
			jQuery('#allpress').removeClass('hf');
			if (!($('#television').hasClass('hf'))) { $('#television').addClass('hf');  }
			if (!($('#article').hasClass('hf'))) { $('#article').addClass('hf');  }
			if (!($('#radio').hasClass('hf'))) { $('#radio').addClass('hf');  }
			if (!($('#press_releases').hasClass('hf'))) { $('#press_releases').addClass('hf');  }
			
			 jQuery('#load-morebtn').css("display", "block");
			 jQuery('#Morearticlebtn').css("display", "none");
			 jQuery('#Moreradiobtn').css("display", "none");
			 jQuery('#Morepress_releasesbtn').css("display", "none");
			 jQuery('#Moretelevisionbtn').css("display", "none");
			 
		});
		
	jQuery('a.tabradio').click(function(){
			jQuery('#radio').removeClass('hf');
			if (!($('#allpress').hasClass('hf'))) { $('#allpress').addClass('hf');  }
			if (!($('#television').hasClass('hf'))) { $('#television').addClass('hf');  }
			if (!($('#article').hasClass('hf'))) { $('#article').addClass('hf');  }
			if (!($('#press_releases').hasClass('hf'))) { $('#press_releases').addClass('hf');  }
			
			 jQuery('#load-morebtn').css("display", "none");
			 jQuery('#Morearticlebtn').css("display", "none");
			 jQuery('#Moreradiobtn').css("display", "block");
			 jQuery('#Morepress_releasesbtn').css("display", "none");
			 jQuery('#Moretelevisionbtn').css("display", "none");
		});
	jQuery("a.tabtelevision").click(function(){
    		jQuery('#television').removeClass('hf');
    		if (!($('#allpress').hasClass('hf'))) { $('#allpress').addClass('hf');  }
		if (!($('#radio').hasClass('hf'))) { $('#radio').addClass('hf');  }
		if (!($('#article').hasClass('hf'))) { $('#article').addClass('hf');  }
		if (!($('#press_releases').hasClass('hf'))) { $('#press_releases').addClass('hf');  }
		
			
			 jQuery('#load-morebtn').css("display", "none");
			 jQuery('#Morearticlebtn').css("display", "none");
			 jQuery('#Moreradiobtn').css("display", "none");
			 jQuery('#Morepress_releasesbtn').css("display", "none");
			 jQuery('#Moretelevisionbtn').css("display", "block");
	});
	
	jQuery('a.tabarticle').click(function(){
			jQuery('#article').removeClass('hf');
			if (!($('#allpress').hasClass('hf'))) { $('#allpress').addClass('hf');  }
			if (!($('#radio').hasClass('hf'))) { $('#radio').addClass('hf');  }
			if (!($('#television').hasClass('hf'))) { $('#television').addClass('hf');  }
			if (!($('#press_releases').hasClass('hf'))) { $('#press_releases').addClass('hf');  }
			
			$("#loadMore").attr('class', '');
			$('#loadMore').addClass('load-more');
			$('#loadMore').addClass('allatr');
			
			 jQuery('#load-morebtn').css("display", "none");
			 jQuery('#Morearticlebtn').css("display", "block");
			 jQuery('#Moreradiobtn').css("display", "none");
			 jQuery('#Morepress_releasesbtn').css("display", "none");
			 jQuery('#Moretelevisionbtn').css("display", "none");
		});
	jQuery("a.tabpress_releases").click(function(){
    		jQuery('#press_releases').removeClass('hf');
    		if (!($('#allpress').hasClass('hf'))) { $('#allpress').addClass('hf');  }
		if (!($('#radio').hasClass('hf'))) { $('#radio').addClass('hf');  }
		if (!($('#article').hasClass('hf'))) { $('#article').addClass('hf');  }
		if (!($('#television').hasClass('hf'))) { $('#television').addClass('hf');  }

			 jQuery('#load-morebtn').css("display", "none");
			 jQuery('#Morearticlebtn').css("display", "none");
			 jQuery('#Moreradiobtn').css("display", "none");
			 jQuery('#Morepress_releasesbtn').css("display", "block");
			 jQuery('#Moretelevisionbtn').css("display", "none");
	});



});

</script>
<?php } ?>
<script type="text/javascript">
jQuery(function(){
 	jQuery("#carousel-featured-content").swiperight(function(e) {
 	
		    	jQuery("#carousel-featured-content").carousel('prev');
		    	
		    	var liback=jQuery("li.w-slider-dot.active");
		    	if (liback.is(':first-child')) { $(liback ).removeClass("active");    $('ol.carousel-indicators li:last-child').addClass('w-slider-dot active');   }
		    	else {
				$(liback ).removeClass("active");
		    		$(liback ).prev( "li.w-slider-dot" ).addClass("w-slider-dot active");
			}
		    	
		    	e.preventDefault();return false;
		    });
	jQuery("#carousel-featured-content").swipeleft(function(e) {
	
		    	jQuery("#carousel-featured-content").carousel('next');
		    	var linext=jQuery("li.w-slider-dot.active");
		    	
		    	if (linext.is(':last-child')) { 
		    							$(linext ).removeClass("active");    
		    							$('ol.carousel-indicators li:first-child').addClass('w-slider-dot active'); 
		    						 }
		    	else {
				$(linext ).removeClass("active");
		    		$(linext ).next( "li.w-slider-dot" ).addClass("w-slider-dot active");
			}
		    	
		    	e.preventDefault();return false;
		    });
var widths = $(window).width();
	 if (widths > 1000 && widths < 1200) {
			if($("html").hasClass("ie8")){
			$('.w-container').css('width', '980px');
		}
	}
	


if(widths < 641){
 jQuery('a[href^="#"]').on('click', function(event) {
    var target = $('#jumpit');
    if( target.length ) {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: target.offset().top - 60
    }, 1000);
    }
    });
}
	
});


$(window).scroll(function () {

    var threshold = 100;

    if ($(window).scrollTop() >= threshold)
        $('#motif-terms-of-use').css('padding-top','60px');
    else
        $('#motif-terms-of-use').css('padding-top','20px');
   
    
});
</script>
</body>

</html>