//
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-canvastext-shiv-cssclasses-addtest
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},m.canvastext=function(){return!!e.canvas&&!!w(b.createElement("canvas").getContext("2d").fillText,"function")};for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document);

// Webkit detection script
Modernizr.addTest('webkit', function() {
	return RegExp(" AppleWebKit/").test(navigator.userAgent);
});

// Mobile Webkit
Modernizr.addTest('mobile', function() {
	return RegExp(" Mobile/").test(navigator.userAgent);
});

// Custom styling
$(document).ready(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		$(".header-navList > li > a").removeClass("isSelected");
		if (scrollTop > $("#registry").offset().top - 26) {
			$("#navRegistry").addClass("isSelected");
			$("#navSelect").val("#registry").attr("selected", true);
		} else if (scrollTop > $("#lodging").offset().top - 26) {
			$("#navLodging").addClass("isSelected");
			$("#navSelect").val("#lodging").attr("selected", true);
		} else if (scrollTop > $("#events").offset().top - 26) {
			$("#navEvents").addClass("isSelected");
			$("#navSelect").val("#events").attr("selected", true);
		} else if (scrollTop > $("#family").offset().top - 26) {
			$("#navFamily").addClass("isSelected");
			$("#navSelect").val("#family").attr("selected", true);
		} else if (scrollTop > $("#weddingParty").offset().top - 26) {
			$("#navWeddingParty").addClass("isSelected");
			$("#navSelect").val("#weddingParty").attr("selected", true);
		} else if (scrollTop > $("#story").offset().top - 26) {
			$("#navStory").addClass("isSelected");
			$("#navSelect").val("#story").attr("selected", true);
		}
	});
	
	$(".header-navList > li > a").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("go")).offset().top - 25,
			easing: "easeInCubic"
		}, 500);
	});
	$("#navSelect").change(function() {
		$("html, body").animate({
			scrollTop: $($(this).val()).offset().top - 25,
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
$(window).load(function() {
	var header = $("#nav");
	var headerTop = header.offset().top;
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerTop) {
			header.addClass("isSticky");
		} else {
			header.removeClass("isSticky");
		}
	});
});