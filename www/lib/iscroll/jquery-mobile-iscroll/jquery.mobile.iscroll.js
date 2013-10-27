
//(function($) {
//$(function() {

var SafariWindowHeightFix = 34; // XXX:
var isc;
function fixed(elm) {
	if (elm.data("iscroll-plugin")) {
		return;
	}

	// XXX: fix crumbled css in transition changePage 
	// for jquery mobile 1.0a3 in jquery.mobile.navigation.js changePage
	//  in loadComplete in removeContainerClasses in .removeClass(pageContainerClasses.join(" "));
	elm.css({
		overflow: 'hidden'
	});

	var barHeight = 0;
	var $header = elm.find(":jqmData(role='header')");
	if ($header.length) {
		$header.css({
			"z-index": 1000,
			padding: 0,
			width: "100%"
		});
		barHeight += $header.height();
	}

	var $footer = elm.find(":jqmData(role='footer')");
	if ($footer.length) {
		$footer.css({
			"z-index": 1000,
			padding: 0,
			width: "100%"
		});
		barHeight += $footer.height();
	}

	var $wrapper = elm.find(":jqmData(role='content')");
	if ($wrapper.length) {
		$wrapper.css({
			"z-index": 1,
            position: 'relative'

		});
		$wrapper.height($(window).height() - barHeight - SafariWindowHeightFix);
		$wrapper.on('touchmove', function (e) { e.preventDefault(); });
	}

//	var scroller = elm.find(":jqmData(iscroll='scroller')").get(0);
	var scroller = $wrapper.get(0);
	if (scroller) {
//        setTimeout(function() {
            isc = new iScroll(scroller, {
                fixedScrollbar: false,
                hScroll: false,
                hScrollbar: false
            });
//            elm.data("iscroll-plugin", isc);
//        }, 100);


	}
}
//$(document).on("pageshow", '[data-role="page"][data-iscroll="enable"]', function() {

//$(document).on("pageshow", "div:jqmData(iscroll=enable)", function() {
//	fixed($(this));
//});

//if ($.mobile.activePage.jqmData("iscroll") == "enable") {
//	fixed($.mobile.activePage);
//}

//});
//})(jQuery);