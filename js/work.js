console.log("Welcome to Yangguang LI's portfolio website!");

$(document).ready(function(){

	// nav bar color change
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ( scroll > $(".js-header").outerHeight() - $(".js-mainnav-wrap").outerHeight()) {
			$(".js-mainnav-wrap").addClass("mainnav-wrap-new");
		}
		else{
			$(".js-mainnav-wrap").removeClass("mainnav-wrap-new");
		}
	});

	// process carousel
	$(".js-carousel-left").click(function() {
		clearInterval( carousel );
		if ( parseInt($(".js-carousel-img").css("left"), 10) == 0 ) {
			$(".js-carousel-img").css("left", "-700%");
		};
		$(".js-carousel-img").animate({left:'+=100%'}, 300);
	});
	$(".js-carousel-right").click(function() {
		clearInterval( carousel );
		if ( Math.round( parseFloat($(".js-carousel-img").css("left"), 10) / $(".js-carousel-img").parent().width() ) 
			== 1 - parseInt($(".js-carousel-img").css("width"), 10) / $(".js-carousel-img").parent().width() ) {
			$(".js-carousel-img").css("left", "0");
		};
		$(".js-carousel-img").animate({left:'-=100%'}, 300);
	});

	var carousel = setInterval(function(){
		$(".js-carousel-right").trigger("click");
	}, 4000);
});
