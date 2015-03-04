<div class="container cat-sub-cat">
<?php
// ref: http://marcosiebert.com/2014/06/wordpress-order-custom-taxonomies-with-children/
// Set your custom taxonomy
$taxonomy = "motif_posts_cats";
// Get all terms of the chosen taxonomy
$terms = get_terms($taxonomy, array('orderby' => 'name'));


// loop our terms array
foreach($terms as $term){
    // Get URL of term
   $term_link = get_term_link( $term );
   // is it a parent?
   if ($term->parent == 0 ) {
 
       // get children of current parent.
       $tchildren = get_term_children($term->term_id, $taxonomy);
 
       // create a temp array to sort later             
       $children = array();
       foreach ($tchildren as $child) {
        $cterm = get_term_by( 'id', $child, $taxonomy );
        $children[$cterm->name] = $cterm;
       }
         
        // now sort the children by name, asc.
        ksort($children);
 
        //ul for parents
        if (count($children) > 0 ) {
            // Output the term again with the option to select it
            if ($term->count > 0)
                echo '<div class="category-divider">';
                    echo '<div class="w-container">';
                        echo '<div class="container">';
                        echo '<div class="category-image">';
                        ?>
                            <img src="<?php bloginfo('template_url'); ?>/images/recession-icons_1.png" alt="recession-icons.png">
                        <?php
                        echo '</div>';
                        echo '</div>';
                        ?>

                        <?php

                        echo '<h2 class="category-heading-text '.$term->slug.'" >'. $term->name .' </h2>';
                        echo '<div class="expenses-text" >'.$term->count.' Motifs</div>';
                        echo '<div class="page_summary">'. $term->description .'</div>';
                        echo '<div>';
                        echo '<div class="sub-category padding">SUBCATEGORIES</div>';
        } else {
                echo '<div class="category-divider">';
                    echo '<div class="w-container">';
                        echo '<div class="container">';
                        echo '<div class="category-image">';
                        ?>
                            <img src="<?php bloginfo('template_url'); ?>/images/recession-icons_1.png" alt="recession-icons.png">
                        <?php
                        echo '</div>';
                        echo '</div>';
                        echo '<h2 class="category-heading-text '.$term->slug.'" >'. $term->name .' </h2>';
                        echo '<div class="expenses-text" >'.$term->count.' Motifs</div>';
                        echo '<div class="page_summary">'. $term->description .'</div>';
                    echo '</div>';
                echo '</div>';
        }
                
         
        // now the CHILDREN.
        foreach($children as $child) {
             echo '<div class="body-text block '.$child->slug.'" ><a class="text-link padding" href="' . esc_url( $term_link ) . '">'. $child->name.'</a></div>';
        } //end foreach
         
         
        // Close the ul at the end
        if (count($children) > 0 ) {
          echo '</div>';
          echo '</div>';
          echo '</div>';
        }
        //...
 
 
   } // endif is parent
 
} // end foreach


?>

</div>