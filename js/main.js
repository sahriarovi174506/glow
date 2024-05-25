(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.chat_wrap').addClass("topbtn_hide");
        } else {
            $('.chat_wrap').removeClass("topbtn_hide");
        }
    });
    $('.chat_wrap').on('click', function (event) {
        event.preventDefault();
    });


    $(document).ready(function () {

        // Toggle Menu
        $('.hamberger_btn').click(function (e) {
            $(this).toggleClass("active");
            $('.site_header').toggleClass("active");
        });


        // slider_arrow
        $('.slider_arrow').click(function (e) {
            $(".slider_arrow").not(this).removeClass("active");
            $(this).addClass("active");
        });

        // footer_accordion_title 
        $('.footer_accordion_title').click(function (e) {

            $(".footer_accordion_title").not(this).siblings(".footer_accordion_content").removeClass("active");

            $('.footer_accordion_title').not(this).closest(".footer_box").removeClass("active");

            $(this).siblings(".footer_accordion_content").toggleClass("active");
            $(this).closest(".footer_box").toggleClass("active");
        });

        // four_items_slider
        $(".four_items_slider").owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            dots: true,
            items: 4,
            navText: [
                '<img src="./img/Arrow-left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
                '<img src="./img/Arrow-right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
            ],
            responsive: {
                0: {
                    items: 1.3,
                },
                776: {
                    items: 3,
                },
                991: {
                    items: 4,
                }
            }
        });

        // review_slider
        $(".review_slider").owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: true,
            items: 4,
            navText: [
                '<img src="./img/Arrow-left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
                '<img src="./img/Arrow-right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
            ],
            responsive: {
                0: {
                    items: 1.3,
                    margin: 18,
                },
                575: {
                    items: 3,
                },
                991: {
                    items: 4,
                }
            }
        });


        // single_slider
        $(".single_slider").owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: true,
            items: 1,
            navText: [
                '<img src="./img/Arrow-left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
                '<img src="./img/Arrow-right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
            ],
        });


        // team_slider
        $(".glow_slider").owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: true,
            // autoplay: false,
            // autoplayTimeout: 2500,
            autoWidth: true,
            // pauseOnHover: true,
            navText: [
                '<img src="./img/Arrow-left.svg" class="slider_arrow arrow arrow_left" alt="arrow_left">',
                '<img src="./img/Arrow-right.svg" class="slider_arrow arrow_right" alt="arrow_right">',
            ],
            responsive: {
                0: {
                    items: 1.1,
                    margin: 10,
                    autoWidth: false,
                    loop: false,
                },
                575: {
                    items: 1.35,
                    margin: 10,
                    autoWidth: false,
                },
                991: {
                    items: 3,
                }
            },
            onTranslated: function (event) {
                // Remove highlight class from all items
                $(".glow_slider .owl-item").removeClass("highlight");

                // Add highlight class to the second active item
                var activeIndex = $(".glow_slider .owl-item.active").eq(0).index();
                $(".glow_slider .owl-item").eq(activeIndex).addClass("highlight");
            }
        });



    });

})(jQuery);