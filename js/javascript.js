$(function() {
	var header = $("#nav");
	var headerTop = header.offset().top;
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerTop) {
			header.addClass("isSticky");
		} else {
			header.removeClass("isSticky");
		}
		
		$(".header-navList > li > a").removeClass("isSelected");
		if (scrollTop > $("#registry").offset().top - 10) {
			$("#navRegistry").addClass("isSelected");
		} else if (scrollTop > $("#lodging").offset().top - 10) {
			$("#navLodging").addClass("isSelected");
		} else if (scrollTop > $("#events").offset().top - 10) {
			$("#navEvents").addClass("isSelected");
		} else if (scrollTop > $("#family").offset().top - 10) {
			$("#navFamily").addClass("isSelected");
		} else if (scrollTop > $("#weddingParty").offset().top - 10) {
			$("#navWeddingParty").addClass("isSelected");
		} else if (scrollTop > $("#story").offset().top - 10) {
			$("#navStory").addClass("isSelected");
		}
		
	});
	
	$(".header-navList > li > a").click(function() {
		//$(".header-navList > li > a").removeClass("isSelected");
		//$(this).addClass("isSelected");
		$("html, body").animate({
			scrollTop: $($(this).attr("go")).offset().top,
			easing: "easeInCubic"
		}, 500);
	})
});