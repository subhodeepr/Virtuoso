$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// "stellar" parallax --------------------------------------------------//

$(document).ready(function() {
  react_to_window();
});

//      only activate stellar for window widths above or equal to 1024
var stellarActivated = false;

$(window).resize(function() {
  react_to_window();
});

function react_to_window() {
  if ($(window).width() <= 1024) {
      if (stellarActivated == true) {
          $(window).data('plugin_stellar').destroy();
          stellarActivated = false;
      }
  } else {
      if (stellarActivated == false) {

          $.stellar({
             horizontalScrolling: false,
             responsve: true
         });

          $(window).data('plugin_stellar').init();
          stellarActivated = true;
      }
  }
}

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}



$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if ($(window).width() <= 767){
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
        }
        else{
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top + $('.container').height()
          }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });
});

$(function() {
    $('a.page-scroll-up').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
