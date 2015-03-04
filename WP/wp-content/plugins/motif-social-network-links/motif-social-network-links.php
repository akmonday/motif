<?php
/*
Plugin Name: Motif Social Network Links
Description: Widget with Motif's social network links
*/
/* Start Adding Functions Below this Line */
// Creating the widget 
class msnl_widget extends WP_Widget {

function __construct() {
parent::__construct(
// Base ID of your widget
'msnl_widget', 

// Widget name will appear in UI
__('Motif Social Network Links', 'msnl_widget_domain'), 

// Widget description
array( 'description' => __( 'Motif Social Network Links Widget', 'msnl_widget_domain' ), ) 
);
}

// Creating widget front-end
// This is where the action happens
public function widget( $args, $instance ) {
$title = apply_filters( 'widget_title', $instance['title'] );
// before and after widget arguments are defined by themes
echo $args['before_widget'];
if ( ! empty( $title ) )
echo $args['before_title'] . $title . $args['after_title'];
?>
<div class="share-post-block share-post-block-widget">
    <?php if(get_field('social_links', 'option')): ?>

        <ul>

        <?php while(has_sub_field('social_links', 'option')): ?>
            <?php 

            $image = get_sub_field('social_link_image');

            if( !empty($image) ): 

                // vars
                $url = $image['url'];
                $title = $image['title'];
                $alt = $image['alt'];
                $caption = $image['caption'];

                ?>

            <li>
                <a class="w-inline-block social-link no-padding" href="<?php the_sub_field('social_link_url'); ?>">
                    <img width="32px" src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
                </a>    
            </li>
            
            <?php endif; ?>

        <?php endwhile; ?>

        </ul>

    <?php endif; ?>
</div>
<?php 
}
		
// Widget Backend 
public function form( $instance ) {
if ( isset( $instance[ 'title' ] ) ) {
$title = $instance[ 'title' ];
}
else {
$title = __( 'New title', 'msnl_widget_domain' );
}
// Widget admin form
?>
<p>
<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
</p>
<?php 
}
	
// Updating widget replacing old instances with new
public function update( $new_instance, $old_instance ) {
$instance = array();
$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
return $instance;
}
} // Class msnl_widget ends here

// Register and load the widget
function msnl_load_widget() {
	register_widget( 'msnl_widget' );
}
add_action( 'widgets_init', 'msnl_load_widget' );


/* Stop Adding Functions Below this Line */
?>
