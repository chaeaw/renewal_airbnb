$(function(){


        // header
        
        $(window).scroll(function(){
            var scr = $('html,body').scrollTop();
            if(scr>= 960){
                $('.gnb').css({'display':'none'});
                $('#header').addClass('on');
                $('.mini_sch').addClass('on');
                $('#header .logo').css({'margin-top':'15px'});
                $('.lnb').css({'margin-top':'30px'});
                $('.scrollTop').addClass("on");
            } else{
                $('.gnb').css({'display':'block'});
                $('#header').removeClass('on');
                $('.mini_sch').removeClass('on');
                $('#header .logo').css({'margin-top':'25px'});
                $('.lnb').css({'margin-top':'40px'});
                $('.scrollTop').removeClass("on");

            }
        });//scroll

        $(".scrollTop").click(function(){
            $('html, body').animate({scrollTop:0},400);
        })// click        



        //main_visual

        $(window).on('load',function(){
            $('.mvArea').addClass('gogo');
            $('.txt_star').addClass('gogo');

        });

        $('.main_inner .item04_btn').click(function(){
           hideMain();
           showVid();
        })
        $('.airbnb_vid .vid_close').click(function(){
            showMain();
            hideVid();
        })

        function showMain(){
            $('.main_txt span').eq(0).stop().animate({'padding-right':'200px','opacity':'1'},300)
            $('.main_txt span').eq(1).stop().animate({'padding-left':'200px','opacity':'1'},300)
            $('.main_txt .txt_star').addClass('gogo')
            $('.mvArea').addClass('gogo')
            $('.mv_item04 span img').stop().fadeIn(500)
        }
        function hideMain(){
            $('.main_txt span').eq(0).stop().animate({'padding-right':'400px','opacity':'0'},500)
            $('.main_txt span').eq(1).stop().animate({'padding-left':'400px','opacity':'0'},500)
            $('.main_txt .txt_star').removeClass('gogo')
            $('.mvArea').removeClass('gogo')
            $('.mv_item04 span img').stop().delay(300).fadeOut(500)
        }
        var air_vid = $('video.airbnb').get(0);
        function showVid(){
            $('.airbnb_vid').stop().delay(500).fadeIn(800);
        }
        function hideVid(){
            $('.airbnb_vid').stop().hide();
            air_vid.load();
        }


        //section01_sch
        $('.btnUL>li').click(function(){
            $('.btnUL>li').removeClass();

            $(this).addClass('on');

            var schBtn = $(this).index();

            $('ul.schWrap>li').removeClass();

            $('ul.schWrap>li').eq(schBtn).addClass('on');

        })//click


        //section03
        $('.left_btnWrap>li').click(function(){
            $('.left_btnWrap>li').removeClass();
            $(this).addClass('on');

            var leftBtn = $(this).index();

            $('.vid video').removeClass();
            $('.vid video').eq(leftBtn).addClass('on');

            $('.vid_btn button').removeClass('on')
            var vidd= $('video').not(leftBtn);
            vidd.load();
            var vid_on = $('video.on').get(0);
            vid_on.load();

        })//left_btn click

        
        $('.vid_btn button').eq(0).click(function(){
            $(this).addClass('on');
            var vid = $('video.on').get(0);
            vid.play();
            $('.vid_btn button').eq(1).addClass('on');
            $('.vid_btn button').eq(2).addClass('on');

        });//play_click
        
        $('.vid_btn button').eq(1).click(function(){
            $(this).removeClass('on');
            var vid = $('video.on').get(0);
            vid.load();
            $('.vid_btn button').eq(0).removeClass('on');
            $('.vid_btn button').eq(2).removeClass('on');

        })//stop_click

        $('.vid_btn button').eq(2).click(function(){
            $(this).removeClass('on');
            var vid = $('video.on').get(0);
            vid.pause();
            $('.vid_btn button').eq(0).removeClass('on');
            $('.vid_btn button').eq(1).removeClass('on');
        })//pause_click






        //section04
        $('ul.allWrap li').not('li:first').hover(function(){
            $(this).css({'transform':'scale(1.05)'});


        },function(){
            $(this).css({'transform':'scale(1)'});


        })//hover1

        $('ul.allWrap li .card').not('li:first').hover(function(){
            $(this).addClass('on');
            

        },function(){
            $(this).removeClass('on');

        });//hover2



        //section06

        var info_idx = $('.info').index()
        $('.section06_swiper .swiper-button-next').click(function(){
            $('.info.on').next().addClass('on')
            $('.info.on').prev().removeClass('on')
        })//next click
        $('.section06_swiper .swiper-button-prev').click(function(){
            $('.info.on').prev().addClass('on')
            $('.info.on').next().removeClass('on')
        })//prev click


        
        // section07
        $('.swiper-slide').hover(function(){
            $(this).toggleClass('on');

        })//hover
        


        
});//doc