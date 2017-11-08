$(function() {

$('a[href=#callback]').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });


$('a[href=#callback]').click(function() {
  $('#callback .formname').val($(this).data("form"));
});

	$('.top-line .sf-menu').superfish(
		{
			cssArrows: false,
			hoverClass: 'no-class',
			delay: 0
		}
	);

$(".items .item-title").equalHeights();
$(".news-short-text").equalHeights();
$(".portals-link").equalHeights();


// Play Button Start
  var btn = $('.btn');
  btn.click(function(event) {
    btn.toggleClass('pause');
    return false;
  });
// Play Button End


var owl = $('.slider');
owl.owlCarousel({
		items: 1,
		itemClass: 'slide-wrap',
		loop: true,
		nav: true,
		navContainer: 'owl-controls container',
		fluidSpeed: 1250,
		smartSpeed: 1250,
		responsive: {
			0: {
				nav: false
			},
			480: {
				nav: false
			}
		}
	});
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});




$('#nav-icon3').on('click', function () {
$("#mmenu").mmenu({
         // options
      }, {
         // configuration
         offCanvas: {
            pageSelector: "#wrap"
         }
      });
  var mmenuApi = $('#mmenu').data('mmenu');
  mmenuApi.open();
  mmenuApi.bind('open:start', function(){
    setTimeout(function() {
      $('#nav-icon3').addClass( "open" );
    }, 50);
  }).bind('close:finish', function(){
    setTimeout(function() {
      $('#nav-icon3').removeClass( "open" );
    }, 50);
  });
});




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// E-mail Ajax Send
	// Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.callback > .succes').addClass('visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
        $('.callback > .succes').removeClass('visible');
        $.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});
