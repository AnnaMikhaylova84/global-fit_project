$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    // autoplay: true
    // autoplayTimeout: 4000
    // ,autoplaySpeed: 3000
     smartSpeed: 2000
    ,loop: true
    ,dots: true
    ,items: 1
    ,responsive: {
      0: {
        autoplay: false
      }
      ,768: {
         autoplay: false
        ,autoplayTimeout: 4000
        ,autoplaySpeed: 3000
      }
    }
  });

  $('.success-carousel').slick({
    dots: true,
    speed: 1500
    ,prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
    ,nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    // ,vertical: true
    ,responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 0,
        settings: {
          arrows: true
        }
      }
    ]
  });

  $("a.nav-link").click(function() {
	   var elementClick = $(this).attr("href")
	   var destination = $(elementClick).offset().top+10;
	   jQuery("html:not(:animated),body:not(:animated)").animate({
	     scrollTop: destination
	   }, 800);
	   return false;
	 });
  $("a.arhor_link").click(function() {
	   var elementClick = $(this).attr("href")
	   var destination = $(elementClick).offset().top+10;
	   jQuery("html:not(:animated),body:not(:animated)").animate({
	     scrollTop: destination
	   }, 800);
	   return false;
	 });

   $(function() {
     var cube = new Cube({
       cubeWrapperSelector: '.CubeWrapper',
       transitionTime: 300
     });
   });

   $('.video-overlay.mod1').click(function(){
      $('.video-overlay.mod1').fadeOut(800);
      $('.vid1').attr("src", "https://www.youtube.com/embed/yyGfGDgt4Pc?autoplay=1&amp;rel=0");
   });

   $('.video-overlay.mod2').click(function(){
      $('.video-overlay.mod2').fadeOut(800);
      $('.vid2').attr("src", "https://www.youtube.com/embed/yyGfGDgt4Pc?autoplay=1&amp;rel=0");
   });

})
