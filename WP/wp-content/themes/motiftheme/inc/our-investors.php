<div class="category-divider">
    <div class="w-container">
        <h2>Our Investors</h2>
        <div class="feature-row feature-row-wide-padding">
            <?php if( have_rows('investor') ): $hrf = 1; ?>
            <?php while( have_rows('investor') ): the_row(); ?>
                <div class="investor-logo">
                    <?php 

                    $image = get_sub_field('image');

                    if( !empty($image) ): ?>
                    			<?php if($hrf!=7){ ?>					
								<a target="_blank" href="<?php echo $image['alt']?>">
									<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

							</a>
<?php } else{ ?>
<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

                    <?php } endif; ?>
                </div>
				<?php $hrf++; ?>
            <?php endwhile; ?>
            <?php endif; ?>
        </div><!-- .4-column-feature-row -->
    </div>
</div>
