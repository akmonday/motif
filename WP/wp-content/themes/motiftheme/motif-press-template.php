<?php
/*
Template Name: Press Media
*/
get_header(); ?>
<div class="page-title"><div class="w-container"><h1>In the Media</h1></div></div>
<div class="catalog no-shadow">
<div class="w-container press-container"><div class="break-2"></div>
<div class="search-results"> 
<ul role="tablist" class="faq-nav" id="faq-tabs-nav">
	<li class="active" role="presentation">
	<a aria-expanded="true" aria-controls="tabs1" data-toggle="tab" role="tab"  href="#allpress" class="text-link search taballpress">All Press</a>
	</li>
	
<?php
 
$cat_args = array(
    'orderby'       => 'term_id', 
    'order'         => 'ASC',
    'hide_empty'    => FALSE, 
);

$terms = get_terms('press_type', $cat_args);
if ( $terms && !is_wp_error( $terms ) ) :
?>
        <?php foreach ( $terms as $term ) { 
         $catids = $term->term_id; ?>
              <li class="" role="presentation"> <?php the_icon(array('size' => 'small',  'class' => 'font-icon')); $icon = get_the_icon(array('size' => 'small', 'class' => 'font-icon'),$term_type = 'press_type',$id = null,$use_term_id=$catids); ?>
	<?php if($icon!=""){ ?> <img height="18" alt="icon" src="<?php echo $icon ?>" class="font-icon"> <?php } ?>
	<a aria-expanded="true" aria-controls="<?php echo $term->name; ?>" data-toggle="tab" role="tab"  href="<?php echo '#'. $term->slug; ?>" class="text-link search <?php echo 'tab'.$term->slug; ?>"><?php echo $term->name; ?></a></li>
   
<?php } endif;?>


</ul>
</div>
<div class="break-2 padding"></div>
<div class="w-row row">
<div id="faq-tabs-Content" class='tab-content panel-container'>
  	<ul id="allpress" class="tab-pane fade active in waterfall" data-col-min-width="380">
   	<?php 
	$args = array( 'post_type' => 'press','posts_per_page' => -1);
   				
		   $query = new WP_Query($args);
		    while ( $query->have_posts() ) : $query->the_post();  // print_r($arrid); 
		    $contenturl=get_post_meta( $post->ID,'external_link',true ); ?>
			<li class="w-col w-col-4 column">
				<div class="w-clearfix press-article">
				<?php the_post_thumbnail('medium', array('class' => 'press-thumbnail')); ?>
				<div class="press-content">
					<a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" <?php if($contenturl<>'') { ?> target="blank" <?php } ?> class="text-link category"><?php the_title(); ?> </a>
					<?php motiftheme_posted_on_list(); ?>
					<div class="body-text">
					<?php the_excerpt(' Go to article...');  ?>
					<?php
					$term_list = wp_get_post_terms($post->ID, 'press_type', array("fields" => "names"));
					$goto = $term_list[0];
					if(($goto=="Television") || ($goto=="television") || ($goto=="TELEVISION") ){ ?> <a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" class="text-link" <?php if($contenturl<>'') { ?> target="blank" <?php } ?>>View video&nbsp;&raquo;</a> <?php } ?>
					<?php if(($goto=="Article") || ($goto=="article") || ($goto=="ARTICLE") ){ ?> <a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" class="text-link" <?php if($contenturl<>'') { ?> target="blank" <?php } ?>>Go to article&nbsp;&raquo;</a> <?php } ?>
					<?php if(($goto=="Radio") || ($goto=="radio") || ($goto=="RADIO") ){ ?> <a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" class="text-link" <?php if($contenturl<>'') { ?> target="blank" <?php } ?>>Listen to audio&nbsp;&raquo;</a> <?php } ?>
					<?php if(($goto=="Press Releases") || ($goto=="press releases") || ($goto=="PRESS RELEASES") ){ ?> <a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" class="text-link" <?php if($contenturl<>'') { ?> target="blank" <?php } ?>>Read more&nbsp;&raquo;</a> <?php } ?>
					</div>
					<?php $custom = MultiPostThumbnails::get_post_thumbnail_id('press', 'secondary-image', $post->ID); $custom=wp_get_attachment_image_src($custom,'post-secondary-image-thumbnail'); ?>
					<div class="hairline padding"></div>
					<?php if($custom[0]!=""){?><img class="flex-image" src="<?php echo custom_resize( $custom[0], 137, 40, false ); ?>" />
					<?php } ?>
				</div>
<?php
    $catids= $catID = the_category_ID($echo=false);
 the_icon(array('size' => 'small',  'class' => 'font-icon')); $icon = get_the_icon(array('size' => 'small', 'class' => 'font-icon'),$term_type = 'press_type',$id = null,$use_term_id=$catids); ?>
<a href="<?php the_permalink(); ?>"><?php if($icon!=""){ ?> <img height="18" alt="icon" src="<?php echo $icon ?>" class="font-icon float"> <?php } ?> </a>

				</div>
			</li>
			 <?php endwhile;  ?>
			 </ul>
			 <div id="load-morebtn">
				<div class="break-2 padding"></div>
					<div class="load-more" id="loadMore">
					<a class="text-link category">View more</a>
				</div>
 			</div>			
		
  		<?php 
  		 foreach ( $terms as $term ) {   $catids = $term->term_id; ?>
			<ul id="<?php echo $term->slug; ?>" class="tab-pane fade waterfall hf" data-col-min-width="380" data-default-container-width="1190" data-autoresize="true">
				<?php  $argms = array(  'post_type' => 'press',
									'tax_query' => array(  array(
                                  												  'taxonomy' => 'press_type',
                                   												 'terms' => $catids,
                                   												 'field' => 'term_id',
                               												 )
                            ),
                            'orderby' => 'title',
                            'order' => 'ASC'
                        );
			 $query = new WP_Query( $argms);
			while ( $query->have_posts() ) : $query->the_post();  // print_r($arrid); ?>
			     <li class="w-col w-col-4 column">
				<div class="w-clearfix press-article">
				  <?php the_post_thumbnail('medium', array('class' => 'press-thumbnail')); ?>
				  <?php $pstid=get_the_ID(); 
				 $contenturl=get_post_meta( $pstid,'external_link',true ); ?>
				  <div class="press-content">
				  	<a href="<?php if($contenturl=='') { the_permalink(); }else { echo $contenturl;} ?>" <?php if($contenturl<>'') { ?> target="blank" <?php } ?> class="text-link category"><?php the_title(); ?> </a>
					<?php motiftheme_posted_on_list(); ?>
					<div class="body-text"><?php the_excerpt('Go to article...');
					  $goto=$term->name;
					  if(($goto=="Television") || ($goto=="television") || ($goto=="TELEVISION") ){ ?> <a href="<?php  if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" <?php if($contenturl!='') { ?> target="_blank" <?php } ?> class="text-link">View video&nbsp;&raquo;</a> <?php } ?>
					 <?php if(($goto=="Article") || ($goto=="article") || ($goto=="ARTICLE") ){ ?> <a href="<?php  if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" <?php if($contenturl!='') { ?> target="_blank" <?php } ?> class="text-link">Go to article&nbsp;&raquo;</a> <?php } ?>
					 <?php if(($goto=="Radio") || ($goto=="radio") || ($goto=="RADIO") ){ ?> <a href="<?php  if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" <?php if($contenturl!='') { ?> target="_blank" <?php } ?> class="text-link">Listen to audio&nbsp;&raquo;</a> <?php } ?>
					 <?php if(($goto=="Press Releases") || ($goto=="press releases") || ($goto=="PRESS RELEASES") ){ ?> <a href="<?php  if($contenturl=='') { the_permalink(); }else { echo $contenturl; } ?>" <?php if($contenturl!='') { ?> target="_blank" <?php } ?> class="text-link">Read more&nbsp;&raquo;</a> <?php } ?>
					</div>
					<?php $custom1 = MultiPostThumbnails::get_post_thumbnail_id('press', 'secondary-image', $pstid); $custom2=wp_get_attachment_image_src($custom1,'post-secondary-image-thumbnail'); ?>
					<div class="hairline padding"></div>

	<?php if($custom2[0]!=""){?>
<img class="flex-image" src="<?php echo custom_resize( $custom2[0], 137, 40, false ); ?>" />
<?php } ?>
								</div>
<?php the_icon(array('size' => 'small',  'class' => 'font-icon')); $icon = get_the_icon(array('size' => 'small', 'class' => 'font-icon'),$term_type = 'press_type',$id = null,$use_term_id=$catids); ?>
<a href="<?php the_permalink(); ?>"><?php if($icon!=""){ ?> <img height="18" alt="icon" src="<?php echo $icon ?>" class="font-icon float"> <?php } ?> </a>
									</div>
									</li>
									
								    <?php endwhile;  ?>
								<?php  wp_reset_query(); ?> 
								   </ul>
								    <div id="<?php echo 'More'.$term->slug.'btn'; ?>">
								    	<div class="break-2 padding"></div>
									<div class="load-more" id="<?php echo 'More'.$term->slug; ?>">
									<a class="text-link category">View more</a>
								</div>
								</div>	
								  
					<?php } ?>
</div>
</div>
</div>
</div>
<?php
// get_sidebar();
get_footer();