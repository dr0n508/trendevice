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

        var colorNameId = $('.radio-custom-color-input:checked').attr("id");
//        console.log(colorNameId);

        $('.selected-color').append(colorName);

        var newSrc = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '.png';
        var newSrc_b = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '_b.png';
        $($('.product-section .tab-pane .wrap-img img')[0]).attr("src", newSrc);
        $($('.product-section .tab-pane .wrap-img img')[1]).attr("src", newSrc_b);
//        console.log($('.nav-tabs a img')[0]);
        $($('.nav-tabs a img')[0]).attr("src", newSrc);
        $($('.nav-tabs a img')[1]).attr("src", newSrc_b);
    });


    $('.menu-home-products').click(function(event) {
        $('.menu-home-products[aria-expanded="true"]').addClass("disabled");
    });


});