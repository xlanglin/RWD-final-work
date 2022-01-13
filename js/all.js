$(document).ready(function () {


    /*         愛心變換     */ 
    $('.heart-button').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fas');
    });

    /*          漢堡選單    */ 
    $('.top-button').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('change');
        
    });
    /*          發票選擇 */

    $('.mail-bill').click(function (e) { 
        e.preventDefault();
        $(this).addClass('choice-white');
        $('.electronic-bill').removeClass('choice-white');
        $('body').addClass('bill-mail-open');
        $('body').removeClass('electronic-bill-open');

    });

    $('.electronic-bill').click(function (e) { 
        e.preventDefault();
        $(this).addClass('choice-white');
        $('.mail-bill').removeClass('choice-white');
        $('body').addClass('electronic-bill-open');
        $('body').removeClass('bill-mail-open');
    });
});


