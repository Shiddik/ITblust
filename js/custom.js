(function ($) {
  "use strict";
  $(document).ready(function () {
    /*
		   Preeloader
		   ============================*/
    $(window).on("load", function () {
      $("#preloader").fadeOut();
      $("#preloader-status").delay(200).fadeOut("slow");
      $("body").delay(200).css({ "overflow-x": "hidden" });
    });

    /*
		   Jquery Mobile Menu
		   ============================*/
    $("#main-menu").meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile-nav-menu",
    });

    /*
			Stikey Js
			============================*/
    var nav = $(".header-sec");
    var scrolled = false;
    $(window).scroll(function () {
      if (100 < $(window).scrollTop() && !scrolled) {
        nav
          .addClass("sticky_menu animated fadeIn")
          .animate({ "margin-top": "0px" });
        scrolled = true;
      }
      if (100 > $(window).scrollTop() && scrolled) {
        nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
        scrolled = false;
      }
    });

    $(".custom-slider-wrapper").slick({
      slidesToShow: 3,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: true,
      speed: 300,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            infinite: true,
          },
        },
      ],
    });
    /*
       Stikey Js
       ============================*/
    $(".post-gallery").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });
    $(".slider-wrapper").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
          },
        },
      ],
    });

    $(".testimonial-slider").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='testimonial-slider-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='testimonial-slider-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
          },
        },
      ],
    });

    // client-widget slider
    $(".client-slider-wrapper").slick({
      slidesToShow: 5,
      infinite: true,
      autoplay: true,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='client-slider-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='client-slider-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*
		   scrollUp
		   ============================*/
    $.scrollUp({
      scrollText: '<i class="flaticon-scroll"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*
	ounter Js
	============================*/
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    /*
		   Magnific Popup
		   ============================*/
    $(".video-play").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $(".hero-slider").slick({
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });
  });
})(jQuery);
