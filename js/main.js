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
//        var newSrc_b = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '_b.png';
        $($('.wrap-img-product img')[0]).attr("src", newSrc);
//        $($('.product-section .tab-pane .wrap-img img')[1]).attr("src", newSrc_b);
//        console.log($('.nav-tabs a img')[0]);
//        $($('.nav-tabs a img')[0]).attr("src", newSrc);
//        $($('.nav-tabs a img')[1]).attr("src", newSrc_b);
    });


    /******menu-double-click********/

    $('.menu-home-products').click(function(event) {
        $('.menu-home-products[aria-expanded="true"]').addClass("disabled");
    });
    /******************************/







    /************valid and open block card03*****/

    /*****block02*****/

    $('#collapseTwo input').keyup(function() {
        var numberInput = $('#collapseTwo').find('input').length;
        var numberValid = 0;
        console.log('количество инпутов=' + numberInput);

        $(this).addClass("valid");
        console.log("change input");

        $('#collapseTwo').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
            console.log ("количество валидных" + numberValid);
        });

        if ( numberInput == numberValid ) {
            console.log ('открываем следующий блок');
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {
            console.log ('не делаем ничего')
        }
    });

    /*****block03*****/


    $('#collapseThree input[name="delivery-address-client"]').change(function() {
        if ( $('#delivery-address-available').prop("checked") ) {
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {
            console.log ('начинаем проверку текстовых инпутов')
        }
    });


    $('#inputs-for-validate input').keyup(function() {
        var numberInput = $('#inputs-for-validate').find('input').length;
        var numberValid = 0;
        console.log('количество инпутов=' + numberInput);


        $('#delivery-address-new').prop('checked', true);
        $(this).addClass("valid");
        console.log("change input");

        $('#inputs-for-validate').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
            console.log ("количество валидных" + numberValid);
        });

        if ( numberInput == numberValid ) {
            console.log ('открываем следующий блок');
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {
            console.log ('не делаем ничего')
        }
    });

    /*****block04*****/

    $('#collapseFour input[name="payment-method"]').change(function() {
        $('a[aria-controls="collapseFive"]').attr('data-toggle', 'collapse');
        $('#headingFive').addClass('open');
        $("#collapseFive").collapse('show');
    });



    /************END valid and open block card03*****/



});