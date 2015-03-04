<div class="advisor no-padding" style="background-image: url('<?php the_sub_field('contact_banner_img_src'); ?>');">
	<div class="w-container advisor-container">
		<div class="advisor-text"><?php the_sub_field('contact_banner_text'); ?></div>
		<div class="contact-us-form-wrapper">
			    <?php gravity_form(1, false, false, false, '', false); ?>
		</div>
	</div>
</div>
<script type="text/javascript">

jQuery(document).ready(function() {

    jQuery.fn.cleardefault = function() {
    return this.focus(function() {
        if( this.value == this.defaultValue ) {
            this.value = "";
        }
    }).blur(function() {
        if( !this.value.length ) {
            this.value = this.defaultValue;
        }
    });

};
jQuery(".clearit input, .clearit textarea").cleardefault();

});

jQuery(function($){
$('.textarea').attr("rows", "2");
});
</script>