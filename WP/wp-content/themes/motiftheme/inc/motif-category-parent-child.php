<?php
	// Get all terms of the chosen taxonomy
	$terms = get_terms($taxonomy, array('orderby' => 'name'));

	$currentterm = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );

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
	 		if ($term->name == $currentterm->name ) {
				
		        // now the CHILDREN.
		        foreach($children as $child) {

		             echo '<div class="body-text block '.$child->slug.'" ><a class="text-link padding" href="' . esc_url( $term_link ) .'">'. $child->name.'</a></div>';
		             echo '<div class="page_summary">'. $child->description .'</div>';

		        } //end foreach
	 		} elseif ($term->name == $cterm->name ) {
	 			echo "string";
	 		}
	    } // endif is parent
	} // end foreach 

?>