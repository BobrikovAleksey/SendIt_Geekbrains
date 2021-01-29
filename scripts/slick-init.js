import './modules/jquery-slick.js';


$(document).ready(function() {
    $('.feedback__reviews').slick({
        infinite: true,
        variableWidth: true,
    });

    $('.guarantee__content').slick({
        infinite: true,
        variableWidth: true,
        arrows:	false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:	true,
                    draggable: true,
                },
            },
        ],
    });

    $('.partners__content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 631,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    });
});
