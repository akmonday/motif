
        jQuery(document).ready(function () {
            jQuery("span.holder1").jPages({
                containerID: "itemContainer1",
                perPage: 10,
                keyBrowse: true,
                scrollBrowse: false,
                animation: "bounceInUp",
                callback: function (pages,
        items) {
                    jQuery("#legend1").html("Page " + pages.current + " of " + pages.count);
                    jQuery("#element1").html("Showing "+items.range.start + " - " + items.range.end + " of " + items.count);
                }
            });
			
			 jQuery("span.holder2").jPages({
                containerID: "itemContainer2",
                perPage: 10,
                keyBrowse: true,
                scrollBrowse: false,
                animation: "bounceInUp",
                callback: function (pages,
        items) {
                    jQuery("#legend2").html("Page " + pages.current + " of " + pages.count);
                    jQuery("#element2").html("Showing "+items.range.start + " - " + items.range.end + " of " + items.count);
                }
            });
			 
			 
			  jQuery("span.holder3").jPages({
                containerID: "itemContainer3",
                perPage: 10,
                keyBrowse: true,
                scrollBrowse: false,
                animation: "bounceInUp",
                callback: function (pages,
        items) {
                    jQuery("#legend3").html("Page " + pages.current + " of " + pages.count);
                    jQuery("#element3").html("Showing "+items.range.start + " - " + items.range.end + " of " + items.count);
                }
            });
			
			
            
            
        });
    
    