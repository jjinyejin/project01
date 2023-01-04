$(function(){
    var wd = $('html').width();

    /*header fixed*/
    function hdrFixed(){
        var hdr=$('.hdrWrap');
        var hdrHeight=$('.hdrWrap').height();
        var scroll_top=$(window).scrollTop();
        var hdrIcon01=$('header .subNav .subNavBottom ul li:nth-child(1) img');
        var hdrIcon02=$('header .subNav .subNavBottom ul li:nth-child(2) img');
        var hdrIcon03=$('header .subNav .subNavBottom ul li:nth-child(3) img');

        if(scroll_top>hdrHeight){
            hdr.addClass('fixed');
            hdrIcon01.attr('src','images/main/login_hover.svg');
            hdrIcon02.attr('src','images/main/search_hover.svg');
            hdrIcon03.attr('src','images/main/menu_hover.svg');
        }else{
            hdr.removeClass('fixed');
            hdrIcon01.attr('src','images/main/login.svg');
            hdrIcon02.attr('src','images/main/search.svg');
            hdrIcon03.attr('src','images/main/menu.svg');
        }
    }
    $(window).scroll(hdrFixed);

    /*mnNav*/
    var m = $('header .mnNav ul li');

    m.each(function(){
        $(this).click(function(){
            $(this).children('.navWrap').slideToggle().parent().siblings().find('div:visible').hide();
        });
    });

    /*전체메뉴*/
    var n=$('header .subNav .subNavBottom ul li:last-child');
    var menu=$('header .subNav .subNavBottom .menuWrap');

    function menuIcon(){
        n.click(function(){
            menu.slideToggle();
        });
    }
    
    /*모바일 전체메뉴*/
    var menuM=$('header .subNav .subNavBottom .menuWrapM');
    var closeM=$('.subNav .menuWrapM .menuFrame .info .close i');
    var menuList=$('.subNav .menuWrapM .menu ul .title');

    function menuIconM(){
        n.click(function(){
            menuM.addClass('show');
        });
        closeM.click(function(){
            menuM.addClass('hide');
        });
        menuList.click(function(){
            $(this).children('.sub').slideToggle(200).parent().siblings().children('ul:visible').hide();
        });
    }
   
    
    /*메인 아이콘*/
    var i3=0;
    var cnt01Gr = $('.cnt01 .slideGr');

    function cnt01LeftM(){
        i3--;
        if(i3<=0){
            i3=0;
        }
            cnt01Gr.css('margin-left', (i3 * -50) + '%');
        };
    function cnt01RightM(){
                i3++;
                if(i3>=4){
                    i3=4;
                }
                cnt01Gr.css('margin-left', (i3 * -50) + '%');
        };

    /*메인 슬라이드*/
    var num = 0;
    var mnGr = $('.mnWrap .mnSlideGr');
    var mnIdx = $('.mnWrap .index li');

    var auto1 = setInterval(function(){
        num++;
        num = num % 5;

        mnGr.css('margin-left', (num * -100) + '%');
        mnIdx.removeClass('on');
        mnIdx.eq(num).addClass('on');
    },3500);
    
    mnIdx.click(function(){
        var idx = $(this).index();

        mnGr.css('margin-left', (idx * -100) + '%');
        mnIdx.removeClass('on');
        $(this).addClass('on');

        clearInterval(auto1);
    });

    function mainLeft(){
        num--;
        if(num<=0){
            num=0;
        }
        mnGr.css('margin-left',(num * -100)+ '%');
        mnIdx.removeClass('on');
        mnIdx.eq(num).addClass('on');

        clearInterval(auto1);
    }

    function mainRight(){
        num++;
        if(num>=4){
            num=4;
        }
        mnGr.css('margin-left',(num * -100)+ '%');
        mnIdx.removeClass('on');
        mnIdx.eq(num).addClass('on');

        clearInterval(auto1);
    }

    


    /*최저가여행 슬라이드*/
    var i=0;
    var cnt02Idx = $('.cnt02 .index li');
    var cnt02Gr = $('.cnt02 .slideGr');
    var cnt02IdxM=$('.cnt02 .indexM li');

    cnt02Idx.click(function(){
        var idx = $(this).index();
        
        cnt02Gr.css('margin-left', (idx * -25) + '%');
        cnt02Idx.removeClass('on');
        $(this).addClass('on');
    });
    
    function cnt02Left(){
        i--;
        if(i<=0){
            i=0;
        }
            cnt02Gr.css('margin-left', (i * -25) + '%');
            cnt02Idx.removeClass('on');
            cnt02Idx.eq(i).addClass('on');
        };
        
    function cnt02Right(){
            i++;
            if(i>=5){
                i=5;
            }
            cnt02Gr.css('margin-left', (i * -25) + '%');
            cnt02Idx.removeClass('on');
            cnt02Idx.eq(i).addClass('on');
        };

    cnt02IdxM.click(function(){
        var idx = $(this).index();
            
        cnt02Gr.css('margin-left', (idx * -100) + '%');
        cnt02IdxM.removeClass('on');
        $(this).addClass('on');
    });    

    function cnt02LeftM(){
            i--;
            if(i<=0){
                i=0;
            }
                cnt02Gr.css('margin-left', (i * -100) + '%');
                cnt02IdxM.removeClass('on');
                cnt02IdxM.eq(i).addClass('on');
        };
    function cnt02RightM(){
                i++;
                if(i>=8){
                    i=8;
                }
                cnt02Gr.css('margin-left', (i * -100) + '%');
                cnt02IdxM.removeClass('on');
                cnt02IdxM.eq(i).addClass('on');
        };
    


    /*이벤트 슬라이드*/
    var num2 = 0;
    var cnt03Idx = $('.cnt03 .index li');
    var cnt03IdxM = $('.cnt03 .indexM li');
    var cnt03Gr = $('.cnt03 .slideGr');
    
    var auto2 = setInterval(function(){
        num2++;
        num2 = num2 % 3;
        
        cnt03Gr.css('margin-left', (num2 * -50) + '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num2).addClass('on');
    },3500);
    
    cnt03Idx.click(function(){
        var idx = $(this).index();
        
        cnt03Gr.css('margin-left', (idx * -50) + '%');
        cnt03Idx.removeClass('on');
        $(this).addClass('on');
        
        clearInterval(auto2);
    });

    cnt03IdxM.click(function(){
        var idx = $(this).index();
        
        cnt03Gr.css('margin-left', (idx * -100) + '%');
        cnt03IdxM.removeClass('on');
        $(this).addClass('on');
        
        clearInterval(auto2);
    });

    function cnt03Left(){
        num2--;
        if(num2<=0){
            num2=0;
        }
        cnt03Gr.css('margin-left',(num2 * -50)+ '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num2).addClass('on');

        clearInterval(auto2);
    }
    function cnt03Right(){
        num2++;
        if(num2>=2){
            num2=2;
        }
        cnt03Gr.css('margin-left',(num2 * -50)+ '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num2).addClass('on');

        clearInterval(auto2);
    }

    function cnt03LeftM(){
        num2--;
        if(num2<=0){
            num2=0;
        }
        cnt03Gr.css('margin-left',(num2 * -100)+ '%');
        cnt03IdxM.removeClass('on');
        cnt03IdxM.eq(num2).addClass('on');

        clearInterval(auto2);
    }
    function cnt03RightM(){
        num2++;
        if(num2>=3){
            num2=3;
        }
        cnt03Gr.css('margin-left',(num2 * -100)+ '%');
        cnt03IdxM.removeClass('on');
        cnt03IdxM.eq(num2).addClass('on');

        clearInterval(auto2);
    }
    
    


    /*제휴서비스 슬라이드*/
    var i2=0;
    var cnt05Idx = $('.cnt05 .index li');
    var cnt05IdxM = $('.cnt05 .indexM li');
    var cnt05Gr = $('.cnt05 .slideGr');

    cnt05Idx.click(function(){
        var idx = $(this).index();
        
        cnt05Gr.css('margin-left', (idx * -33.33333333333333) + '%');
        cnt05Idx.removeClass('on');
        $(this).addClass('on');     
    });

    cnt05IdxM.click(function(){
        var idx = $(this).index();
        
        cnt05Gr.css('margin-left', (idx * -100) + '%');
        cnt05IdxM.removeClass('on');
        $(this).addClass('on');
    });
    
    $('.cnt.cnt05 .btns .left').click(function(){
        i2--;
        
        if(i2<=0){
            i2=0;
        }
        cnt05Gr.css('margin-left', i2 * -33.33333333333333 + '%');
        cnt05Idx.removeClass('on');
        cnt05Idx.eq(i2).addClass('on');
    });
    
    $('.cnt.cnt05 .btns .right').click(function(){
        i2++;
        
        if(i2>=2){
            i2=2;
        }
        cnt05Gr.css('margin-left', i2 * -33.33333333333333 + '%');
        cnt05Idx.removeClass('on');
        cnt05Idx.eq(i2).addClass('on');
    });

    function cnt05Left(){
        i2--;
        if(i2<=0){
            i2=0;
        }
        cnt05Gr.css('margin-left',(i2 * -33.33333333333333)+ '%');
        cnt05Idx.removeClass('on');
        cnt05Idx.eq(i2).addClass('on');
    }
    function cnt05Right(){
        i2++;
        if(i2>=2){
            i2=2;
        }
        cnt05Gr.css('margin-left',(i2 * -33.33333333333333)+ '%');
        cnt05Idx.removeClass('on');
        cnt05Idx.eq(i2).addClass('on');
    }

    function cnt05LeftM(){
        i2--;
        if(i2<=0){
            i2=0;
        }
        cnt05Gr.css('margin-left',(i2 * -100)+ '%');
        cnt05IdxM.removeClass('on');
        cnt05IdxM.eq(i2).addClass('on');
    }
    function cnt05RightM(){
        i2++;
        if(i2>=4){
            i2=4;
        }
        cnt05Gr.css('margin-left',(i2 * -100)+ '%');
        cnt05IdxM.removeClass('on');
        cnt05IdxM.eq(i2).addClass('on');
    }
    


    /*디바이스별로 적용*/
    function wdr(){
        if(wd>=1026){
            menuIcon();

            $('.cnt02 .btns .left').click(function(){
                cnt02Left();
            });
            $('.cnt02 .btns .right').click(function(){
                cnt02Right();
            });

       
        }else if(420<=wd && wd<=1025){
            menuIcon();

            //메인
            $('.mnTop').on('swipeleft', function(){
                mainRight();
            });
            $('.mnTop').on('swiperight', function(){
                mainLeft();
            });

            //최저가여행
            $('.cnt02 section').on('swipeleft', function(){
                cnt02Right();
            });
            $('.cnt02 section').on('swiperight', function(){
                cnt02Left();
            });
        
            //이벤트
            $('.cnt03 section').on('swipeleft', function(){
                cnt03Right();
            });
            $('.cnt03 section').on('swiperight', function(){
                cnt03Left();
            });

            //제휴서비스
            $('.cnt05 .slideView').on('swipeleft', function(){
                cnt05Right();
            });
            $('.cnt05 .slideView').on('swiperight', function(){
                cnt05Left();
            });
        }else{
            menuIconM();

            clearInterval(auto2);
            //메인 아이콘
            $('.cnt01 .cnt01_top').on('swipeleft', function(){
                cnt01RightM();
            });
            $('.cnt01 .cnt01_top').on('swiperight', function(){
                cnt01LeftM();
            });

            //최저가여행
            $('.cnt02 section').on('swipeleft', function(){
                cnt02RightM();
            });
            $('.cnt02 section').on('swiperight', function(){
                cnt02LeftM();
            });

            //이벤트
            $('.cnt03 section').on('swipeleft', function(){
                cnt03RightM();
            });
            $('.cnt03 section').on('swiperight', function(){
                cnt03LeftM();
            });

            //제휴서비스
            $('.cnt05 .slideView').on('swipeleft', function(){
                cnt05RightM();
            });
            $('.cnt05 .slideView').on('swiperight', function(){
                cnt05LeftM();
            });
        }
    }

    wdr();
});