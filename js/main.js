$(document).ready(function () {

    $('.slider-about-us').bxSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
    });

    $('.offer-for-you').bxSlider({
        slideWidth: 383,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


});