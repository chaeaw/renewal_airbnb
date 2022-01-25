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
        });

        $(".scrollTop").click(function(){
            $('html, body').animate({scrollTop:0},400);
        })// click    
    
})