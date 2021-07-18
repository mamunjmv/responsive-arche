$(function () {
  'use strict';
  // menu fix starts
  var navOff = $('.main_menu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix');
    }
  });
  // menu fix end

  $('.banner_big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small_slider',
    speed: 4000,
    
  });
  $('.small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_big_slider',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.ser_mobile_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerPadding: 0,
    dots: true,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.testi_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerPadding: 0,
    dots: true,
    centerMode: true,
    autoplaySpeed: 2000,
  });
  $('.venobox').venobox({
    spinner:'three-bounce',
  }); 
  



});