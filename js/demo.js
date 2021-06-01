/*
Theme Name: Petri
Description: Responsive App Landing Page
Author: Bluminethemes
Theme URI: http://bluminethemes.com/preview/themeforest/html/petri/
Author URI: http://themeforest.net/user/Bluminethemes
Version: 1.0
*/

(function($) {
	"use strict";

	/* ------------------------------------------------------------------------ */
	/*	BOOTSTRAP FIX FOR WINPHONE 8 AND IE10
	/* ------------------------------------------------------------------------ */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

	function detectIE() {
		if ($.browser.msie && $.browser.version == 9) {
			return true;
		}
		if ($.browser.msie && $.browser.version == 8) {
			return true;
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}

	//BEGIN DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {

		/* ------------------------------------------------------------------------ */
		/*	SMOOTH SCROLL
		/* ------------------------------------------------------------------------ */
		var scrollAnimationTime = 1000,
			scrollAnimation = 'easeInOutExpo';

		$('a.scrollto').bind('click.smoothscroll',function (event) {
			event.preventDefault();

			var target = this.hash;

			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, scrollAnimationTime, scrollAnimation, function () {
				window.location.hash = target;
			});

		});



		/**********************************************************/
        /* CUSTOMIZABLE SCROLLBAR                                 */
        /**********************************************************/
        // $("html").niceScroll({
        //     mousescrollstep: 40,
        //     cursorcolor: "#ff3030",
        //     zindex: 9999,
        //     cursorborder: "none",
        //     cursorwidth: "6px",
        //     cursorborderradius: "none",
        //     horizrailenabled:false
        // });

	});
	//END DOCUMENT.READY FUNCTION

	

})(jQuery);



// $(document).ready(function(){
// 	$('.link').hover(function() {
// 		$(this).addClass('transition');

// 	}, function() {
// 		$(this).removeClass('transition');
// 	});
// });