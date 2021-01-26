import './modules/jquery.js';
import './modules/slick.js';


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


if (location.host === 'bobrikovaleksey.github.io') {
    $('a[href]').each((i, el) => {
        const href = el.getAttribute('href');
        if (href[0] === '/') {
            el.setAttribute('href', `/SendIt_Geekbrains${href}`);
        }
    });
}