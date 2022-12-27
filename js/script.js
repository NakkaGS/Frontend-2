$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400)
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar')
        }
    })

    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    $('.team .owl-carousel').owlCarousel ({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false, 
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    $('.testimonial .owl-carousel').owlCarousel ({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false, 
        items: 1,
    })
})