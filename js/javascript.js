// Webkit detection script
Modernizr.addTest('webkit', function() {
	return RegExp(" AppleWebKit/").test(navigator.userAgent);
});

// Mobile Webkit
Modernizr.addTest('mobile', function() {
	return RegExp(" Mobile/").test(navigator.userAgent);
});

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
			//$("#navSelect").val("#registry").attr("selected", true);
		} else if (scrollTop > $("#lodging").offset().top - 10) {
			$("#navLodging").addClass("isSelected");
			//$("#navSelect").val("#lodging").attr("selected", true);
		} else if (scrollTop > $("#events").offset().top - 10) {
			$("#navEvents").addClass("isSelected");
			//$("#navSelect").val("#events").attr("selected", true);
		} else if (scrollTop > $("#family").offset().top - 10) {
			$("#navFamily").addClass("isSelected");
			//$("#navSelect").val("#family").attr("selected", true);
		} else if (scrollTop > $("#weddingParty").offset().top - 10) {
			$("#navWeddingParty").addClass("isSelected");
			//$("#navSelect").val("#weddingParty").attr("selected", true);
		} else if (scrollTop > $("#story").offset().top - 10) {
			$("#navStory").addClass("isSelected");
			//$("#navSelect").val("#story").attr("selected", true);
		}
		
	});
	
	$(".header-navList > li > a").click(function() {
		//$(".header-navList > li > a").removeClass("isSelected");
		//$(this).addClass("isSelected");
		$("html, body").animate({
			scrollTop: $($(this).attr("go")).offset().top,
			easing: "easeInCubic"
		}, 500);
	});
	$("#navSelect").change(function() {
		$("html, body").animate({
			scrollTop: $($(this).val()).offset().top,
			easing: "easeInCubic"
		}, 500);
	});
	$(".header-home").click(function() {
		$("html, body").animate({
			scrollTop: 0,
			easing: "easeInCubic"
		}, 500);
	});
});