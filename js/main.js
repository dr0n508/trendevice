$(document).ready(function () {

    $('.slider-about-us').bxSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        infiniteLoop: false
    });

    $('.offer-for-you').bxSlider({
        slideWidth: 380,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false,
        infiniteLoop: false
    });

    $(".radio-custom-color").change(function() {
        $('.selected-color').empty();
        var colorName = $('.radio-custom-color:checked').val();
        $('.selected-color').append(colorName);
    });

});