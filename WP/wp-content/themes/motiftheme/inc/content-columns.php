<div class="catalog no-shadow">
	<div class="w-container mission-container">
		<div class="w-row about-row">

			<?php 
				if(get_sub_field('number_of_columns') == "one")
				{ 
			?>
			<div class="w-col w-col-<?php if(get_sub_field('column_width1') == "one") { 
									echo '1';
									} elseif (get_sub_field('column_width1') == "two") {
									echo '2';
									} elseif (get_sub_field('column_width1') == "three") {
									echo '3';
									} elseif (get_sub_field('column_width1') == "four") {
									echo '4';
									} elseif (get_sub_field('column_width1') == "five") {
									echo '5';
									} elseif (get_sub_field('column_width1') == "six") {
									echo '6';
									} elseif (get_sub_field('column_width1') == "seven") {
									echo '7';
									} elseif (get_sub_field('column_width1') == "eight") {
									echo '8';
									} elseif (get_sub_field('column_width1') == "nine") {
									echo '9';
									} elseif (get_sub_field('column_width1') == "ten") {
									echo '10';
									} elseif (get_sub_field('column_width1') == "eleven") {
									echo '11';
									} elseif (get_sub_field('column_width1') == "twelve") {
									echo '12';
									}
									?> w-col-stack about-column-1">
				<div class="body-text">
					<?php the_sub_field('wysiwyg'); ?>
				</div>
			</div><!-- .about-column-1 -->
			<?php
				} elseif(get_sub_field('number_of_columns') == "two") {
			?>
			<div class="w-col w-col-<?php if(get_sub_field('column_width1') == "one") { 
									echo '1';
									} elseif (get_sub_field('column_width1') == "two") {
									echo '2';
									} elseif (get_sub_field('column_width1') == "three") {
									echo '3';
									} elseif (get_sub_field('column_width1') == "four") {
									echo '4';
									} elseif (get_sub_field('column_width1') == "five") {
									echo '5';
									} elseif (get_sub_field('column_width1') == "six") {
									echo '6';
									} elseif (get_sub_field('column_width1') == "seven") {
									echo '7';
									} elseif (get_sub_field('column_width1') == "eight") {
									echo '8';
									} elseif (get_sub_field('column_width1') == "nine") {
									echo '9';
									} elseif (get_sub_field('column_width1') == "ten") {
									echo '10';
									} elseif (get_sub_field('column_width1') == "eleven") {
									echo '11';
									} elseif (get_sub_field('column_width1') == "twelve") {
									echo '12';
									}
									?> w-col-stack about-column-1">
				<div class="body-text">
					<?php the_sub_field('wysiwyg'); ?>
				</div>
			</div><!-- .about-column-1 -->
			<div class="bar w-col w-col-<?php if(get_sub_field('column_width2') == "one") { 
									echo '1';
									} elseif (get_sub_field('column_width2') == "two") {
									echo '2';
									} elseif (get_sub_field('column_width2') == "three") {
									echo '3';
									} elseif (get_sub_field('column_width2') == "four") {
									echo '4';
									} elseif (get_sub_field('column_width2') == "five") {
									echo '5';
									} elseif (get_sub_field('column_width2') == "six") {
									echo '6';
									} elseif (get_sub_field('column_width2') == "seven") {
									echo '7';
									} elseif (get_sub_field('column_width2') == "eight") {
									echo '8';
									} elseif (get_sub_field('column_width2') == "nine") {
									echo '9';
									} elseif (get_sub_field('column_width2') == "ten") {
									echo '10';
									} elseif (get_sub_field('column_width2') == "eleven") {
									echo '11';
									} elseif (get_sub_field('column_width2') == "twelve") {
									echo '12';
									}
									?> w-col-stack about-column-2">
				<?php the_sub_field('wysiwyg2'); ?>
			</div><!-- .about-column-2 -->
			<?php
				}
			?>
		</div>
	</div>
</div>	