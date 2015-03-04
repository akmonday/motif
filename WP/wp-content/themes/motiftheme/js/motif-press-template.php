<?php
/*
Template Name: Press Media
*/
get_header(); ?>
<div class="page-title"><div class="w-container"><h1>In the Media</h1></div></div>
<div class="catalog no-shadow">
     <div class="w-container press-container">
	<div class="break-2"></div>

<div id="tab-container" class="tab-container">
<div class="search-results">
<ul>
	<li class="tab body-text-2 padded"><a href="#tabs1">All Press</a></li>
<?php
 
     $categories = get_categories();
   $count=1;
   $tabcount=2;
 foreach ($categories as $category) {
 	
    $meta_value = get_post_meta( get_the_ID(),'category'.$count, true );
 
    // Checks and displays the retrieved value
    if ( $meta_value=='yes' ) { ?>
     <li class="tab"></li>  <img height="18" alt="<?php //echo $category->cat_name; ?>" src="<?php echo get_template_directory_uri().'/css/images/'.$category->cat_name.'.svg'; ?>" class="font-icon">
	<a href="#tab<?php echo $tabcount; ?>" class="text-link search"><?php  echo $category->cat_name ?></a></<li>
  <?php $tabcount++;  }
$count++;
 }
?>
</ul>
</div>
<div class="break-2 padding"></div>
<div class='panel-container'>
  		<div id="tabs1">
   			<h2>HTML Markup for these tabs</h2>   
  		</div>
   		<div id="tabs2">
   			<h2>JS for these tabs</h2>
  		</div>
  		<div id="tabs3">
   			<h2>CSS Styles for these tabs</h2>
  		</div>
</div>
</div>

</div>
</div>
<!-- check for this script -->
 <script type="text/javascript">
    $(document).ready( function() {
      $('#tab-container').easytabs();
    });
  </script>	
<?php
// get_sidebar();
get_footer();