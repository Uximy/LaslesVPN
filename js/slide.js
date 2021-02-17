$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay: true,
    navText: ['<i class="fas fa-arrow-left btn_slider"></i>','<i class="fas fa-arrow-right btn_slider"></i>'],
    dotsEach: true,
    mouseDrag: false,
    autoplayTimeout: 6500,
    smartSpeed: 350,
    center: true,
    autoWidth: true,
    responsive:{
        0:{
            items:1,
            dotsData: true,
        },
        600:{
            items:3,
        }
    }
})