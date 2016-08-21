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

    $(".radio-custom-color-input").change(function() {
        $('.selected-color').empty();
        var productCategory = $('.product-section').attr("id").split('-')[0];
        var productModel = $('.product-section').attr("id").split('-')[1];
        var colorName = $('.radio-custom-color-input:checked').val();

        $('.selected-color').append(colorName);

        var newSrc = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorName.toLowerCase() + '.png';
        var newSrc_b = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorName.toLowerCase() + '_b.png';
        $('.product-section .tab-pane .wrap-img img').attr("src", newSrc);
        console.log($('.nav-tabs a img')[0]);
        $($('.nav-tabs a img')[0]).attr("src", newSrc);
        $($('.nav-tabs a img')[1]).attr("src", newSrc_b);
    });

});