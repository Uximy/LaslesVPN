$(document).ready(function(){
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 15,
        nav:false,
        navText: ['<i class="fas fa-arrow-left btn_slider"></i>','<i class="fas fa-arrow-right btn_slider"></i>'],
        dotsEach: true,
        mouseDrag: false,
        autoplay: true,
        autoplaySpeed:1500,
        autoplayTimeout: 6500,
        autoWidth: true,
        responsive:{
            600:{
                items:3,
            }
        }
    })
});