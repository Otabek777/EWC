$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__bg").css({
        "transform" : "translate(0px, " + st/5 + "px"
    });
});
$(window).scroll(function(){
    // 1
    if ( $(this).scrollTop() > 55) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});