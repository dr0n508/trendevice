$(document).ready(function () {

    $('.slider-about-us').bxSlider({
        slideWidth: 5000,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
    });

    $('.offer-for-you').bxSlider({
        slideWidth: 5000,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


});