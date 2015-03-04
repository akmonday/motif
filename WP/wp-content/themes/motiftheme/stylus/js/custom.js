// Add span to list items in WYSIWYG editor
(function($) {
	$( '.wysiwyg li' ).wrapInner( "<span class='wysiwyg-li'></span>");
})(jQuery);

// Video Popup
// Add the video-container div
(function($) {
        $(".hero-banner-inline-css").append('<div id="video-container"></div>');
        $("#video-container").css("display", "none");

        var vid_padding = 20;
        var max_height = $(".hero-banner-inline-css").height() - (vid_padding * 2);

        function resizeVideo () {
            // Determine dimensions of vimeo iframe
            var vid_height = $(".hero-banner-inline-css").height() - (vid_padding * 2);
            var vid_width = vid_height * 1.78; // $(".inline-hero-image").width();
            var primary_width = $(".inline-hero-image").width();
            if (vid_width > primary_width) {
                vid_width = primary_width;
                vid_height = vid_width / 1.78;

                if (vid_height >= max_height) {
                    vid_height = max_height;
                    vid_width = max_height * 1.78;
                }
            }

            // Resize the video container and black background
            $(".hero-banner-inline-css").width(primary_width);
            $("#video-container").css("height", (vid_height + (vid_padding * 2)) +  "px")
                .css("width", "100%")

            if ($("#vimeo-player").length > 0) {
                // Resize the video player div and the iframe
                $("#vimeo-player")
                    .height(vid_height)
                    .width(vid_width);
                $("iframe").height(vid_height)
                    .width(vid_width);
                $("#vimeo-player")
                    .css("margin-left", (primary_width - vid_width) / 2)
                    .css("margin-right", (primary_width - vid_width) / 2)
                    .css("padding-top", vid_padding)
                    .css("padding-bottom", vid_padding);
            }
        }


        // When the user clicks the start-video button, show and play the video
        $('#start-video').click(showAndPlayVideo);

        // When user clicks the black outside of the video, close the video
        $("#video-container").click(hideVideo);
        $("#vimeo-player").click(function(e){
            e.stopPropagation();
        });

        // Insert the video-player div and iframe
        // fade out the text and fade in the video
        function showAndPlayVideo () {
            // Insert the vimeo-player iframe into the video-container
            $("#video-container").append('<div id="vimeo-player"><div class="vimeo-player-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZYindgQcbro?autoplay=1" frameborder="0" allowfullscreen></iframe><div class="circle circle-close-x"><div class="close-btn">&#10006;</div></div></div></div>');
            resizeVideo();

            $('.video-container').fadeOut(400, function(){
                $('#video-container').fadeIn(400);
            });
        }

        // Remove the video player and fade back in the text
        function hideVideo () {
            $('#video-container').fadeOut(400, function(){
                $("#vimeo-player").remove();
                $('.video-container').fadeIn(400);
            });
        }

        // Resize the video player if the user resizes the window
        $(window).resize(function(){
            resizeVideo();
        });
})(jQuery);
// Motif Carousel
(function($) {
$('#motifCarousel').carousel({
  interval: 10000
})

$('.carousel.motif-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
})(jQuery);

(function($) {
$('#motif-carousel-three').carousel({
  interval: 40000
})

$('.carousel.motif-carousel-three .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});

})(jQuery);

(function($) {
$('#motif-carousel-three').carousel({
  interval: 40000
})

$('.carousel.motif-carousel-three .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});

})(jQuery);
// Newsworthy Motifs V4
(function($) {
$('#newsworthy-motifs').carousel({
  interval: 4000
})

$('.carousel.newsworthy-motifs .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<5;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
})(jQuery);
// Motif of the week
(function($) {
$('#motif-of-the-week').carousel({
  interval: 4000
})

$('.carousel.motif-of-the-week .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
})(jQuery);

(function($) {
$('.news-nav-tabs-desktop > li ').hover( function(){
  if($(this).hasClass('hoverblock'))
    return;
  else
    $(this).find('a').tab('show');
});


$('.news-nav-tabs-desktop > li').find('a').click( function(){
  $(this).parent()
  .siblings().addClass('hoverblock');
});

})(jQuery);

(function($) {
$('.carousel').carousel({
  interval: 100000
})
})(jQuery);




