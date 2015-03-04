<div class="visible-xs visible-sm news">
  <div class="w-container">
    <div class="tab-content">
      <?php 
      $x = 0;
      $repeater = get_sub_field('tabber');
      foreach( $repeater as $r ) { 
        ?>
        <div class="tab-pane news-tab-pane fade<?php if( $x == 0 ) { echo ' in active'; } ?>" id="tab<?php echo ($x + 1); ?>">
          <div class="quote-text">
            <?php echo $r['tab_content']; ?>
          </div>
          <div class="author-text">- <?php echo $r['author_text']; ?>, 
            <strong><em><?php echo $r['strong_text']; ?></em></strong>
          </div>
      
        </div>
        <?php $x++; } ?> 
    </div>
    <div class="w-tab-menu">
      <ul id="news-tabs" class="nav news-nav-tabs">
        <?php 
        $counter = 0;

        foreach( $repeater as $r ) {
          echo '<a ';
          if ( $counter == 0 ) {
            echo ' class="active" href="#tab' . ($counter + 1) . '" data-toggle="tab">';
          }
          else {
            echo 'class="" href="#tab' . ($counter + 1) . '" data-toggle="tab">';
          }
          echo '<img src=" ' . $r['tab_title'] . '" width=" ' . $r['tab_width'] . ' " ></a>';
          $counter++;
        }
        ?>
      </ul>
    </div>
  </div>
</div>