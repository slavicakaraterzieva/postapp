
$(function() {

    //change the classes
    var btn = $(".scroll__hide");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 1000) {
            btn.removeClass('scroll__hide').addClass("show");
        } else {

            if(scroll < 1000){
                btn.removeClass("show").addClass('scroll__hide');
            }
            
        }

    });

//scroll to top
    $("button").click(function() {
       // alert("scroll script is working");
        $('html,body').animate({
            scrollTop: $(".post-galery").offset().top},
            'slow');
    });

});
//end of scroll function