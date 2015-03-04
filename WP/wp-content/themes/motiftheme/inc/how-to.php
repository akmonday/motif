<div class="catalog">
    <div class="w-container">
        <div class="w-col w-col-4 catalog-column-2 cataglog-how-to-nav">
            <div class="select-text">Select a view</div>         
            <ul id="catalog-tab-menu" class="catalog-tab-menu" role="tablist">
                <li role="presentation" class="active">
                    <a href="#tab1" id="tab1-tab" role="tab" data-toggle="tab" aria-controls="tab1" aria-expanded="true">List</a>
                </li>
                <li class="" role="presentation">
                    <a aria-expanded="false" href="#tab2" role="tab" id="tab2-tab" data-toggle="tab" aria-controls="tab2">Grid</a>
                </li>
            </ul>
        </div>

        <div id="catalog-tab-content" class="tab-content">
            
            <div role="tabpanel" class="tab-pane fade active in" id="tab1">
                <?php include (TEMPLATEPATH . '/inc/how-to/tab1.php' ); ?> 
             </div><!-- tab-pane -->

            <div role="tabpanel" class="tab-pane fade" id="tab2">
                <?php include (TEMPLATEPATH . '/inc/how-to/tab2.php' ); ?> 
            </div><!-- tab-pane -->
        </div><!-- #catalog -->
    </div>
</div>

