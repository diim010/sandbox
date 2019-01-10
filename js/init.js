$(document).ready(function(){
  $('.parallax').parallax();
  $('.collapsible').collapsible();
  $('.tabs').tabs();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  $(".dropdown-trigger").dropdown();  
  $('.sidenav').sidenav(); 
  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
