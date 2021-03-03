$(document).ready(function () {
    $('.ourTeam__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        touchMove: true,
        draggable: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    pauseOnFocus: true
                }
            }
        ]
    });
});
