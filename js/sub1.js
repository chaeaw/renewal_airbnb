$(function(){

    // header
    $(window).scroll(function(){
        var scr = $('html,body').scrollTop();

        if(scr>= 400){
            $('#header').css({'display':'none'});
            $('.scrollTop').addClass("on");
        } else{
            $('#header').css({'display':'block'});
            $('.scrollTop').removeClass("on");
        }
    });//scroll

    $(".scrollTop").click(function(){
        $('html, body').animate({scrollTop:0},400);
    })// click       



    // section03_q
    $('.q_box .one').click(function(e){
        e.preventDefault();
        $(this).stop().next().slideToggle(300);
    });

    $('.q_box .one').eq(0).trigger('click');
});//doc

