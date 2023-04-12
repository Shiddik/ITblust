(function ($) {
	"use strict";
   $(document).ready(function(){

		   /*
		   Preeloader
		   ============================*/
		   $(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
			});

		   /*
		   Jquery Mobile Menu
		   ============================*/
		   $('#main-menu').meanmenu({
			meanScreenWidth: "991",
			meanMenuContainer: '.mobile-nav-menu',
			});

		//    /*
		// 	When Click Mobile Menu Then Menu Close
		// 	======================================*/
		//    $(".mean-nav li ul li a, .mean-nav li:first-child a").on ('click', '', function() {
		// 	   $(".mean-bar .meanmenu-reveal").trigger('click')
		//    });

		/*
		When Click Mobile Menu Then Menu Close
		======================================*/ 	

		$('.mean-nav li a').on('click', function(){
			const has_dropdown_menu = $(this).attr('class');
			
			if(has_dropdown_menu !== 'mean-expand mean-clicked' && has_dropdown_menu !== 'mean-clicked') {
				$(".mean-bar a.meanmenu-reveal").trigger('click');
			} 
		});
		

		/*
		Stikey Js
		============================*/ 
		(function () {
			var nav = $('.header-sec');
			var scrolled = false;
			$(window).scroll(function () {
				if (100 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeIn').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (100 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeIn').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}());	

		/*
		Smooth scrolling using jQuery easing
		============================*/ 	
		$('a.nav-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
				scrollTop: (target.offset().top - 56)
				}, 1000, "easeInOutExpo");
				return false;
			}
			}
		});	
  
			
		/*
		Testimonial Crousel
		============================*/ 	
		$(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true,
			margin:30,
			items :2,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},		
				992:{
					items:2
				},				
				1000:{
					items:2
				}
			}			
		  }); 			   			
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
			autoplay: true,
			autoplayTimeout:5000,
			autoplaySpeed:2000,	
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
        });
    		
 	   	/*
		Parallax JS
		============================*/ 
		jarallax(document.querySelectorAll('.single-slide, .count-up-sec, .call-to-action-sec, .pagehding-sec')); 	
	
		   /*
		   scrollUp
		   ============================*/	
		   $.scrollUp({
			   scrollText: '<i class="flaticon-scroll"></i>',
			   easingType: 'linear',
			   scrollSpeed: 900,
			   animation: 'fade'
		   });	
		   /*
		   Counter Js
		   ============================*/ 
		   $('.counter').counterUp({
			   delay: 10,
			   time: 1000			
		   });

		   /*
		   Magnific Popup
		   ============================*/ 		
		   $('.vedio-play').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,	
			fixedContentPos: false
		});

	   });	
   })(jQuery);
   
   