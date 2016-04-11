console.log("Welcome to Yangguang LI's portfolio website!");

$(document).ready(function(){
	// I'm ...
	var list_length = $('.js-header-ul').children().length;
	var list_number = 0;
	setInterval(function(){
		list_number = Math.floor( Math.random() * list_length );
		$(".js-header-ul").animate({'top': -list_number * 1.98 + 0.05 +'em'}, 400);
	}, 2000);

	// nav bar color change
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ( scroll > $(".js-header").outerHeight() - $(".js-mainnav-wrap").outerHeight()/2) {
			$(".js-mainnav-wrap").addClass("mainnav-wrap-new");
		}
		else{
			$(".js-mainnav-wrap").removeClass("mainnav-wrap-new");
		}
	});

	// nav scroll
	$(".js-nav-portfolio").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
        	scrollTop: $("#portfolio").offset().top
    	}, 500);
	});
	$(".js-nav-about").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
        	scrollTop: $("#about").offset().top
    	}, 500);
	});

	// portfolio filter
	$(".js-filter").click(function(){
		$(this).addClass("filter-active");
		$(this).siblings().removeClass('filter-active');
		
		var filter = $(this).attr('data-filter');
		if ( filter == 'all'){
			$(".js-work-list").children('li').fadeIn(500);
		}
		else{
			$(".js-work-list").children('li:not(.js-filter-'+ filter +')').fadeOut(500)
				.promise().done(function(){
					$(".js-filter-" + filter ).fadeIn(500);
				});
		}
	});

});
