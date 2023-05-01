$(function(){
    $(window).on('load', function(){
        mainScript.gsapLoad();
      })
      
    const mainScript = {
        gsapLoad: function(){
            gsap.set('.sc-visual .desc', {
                rotateX: 90,
                skewY: 15,
                rotateY: 15,
                opacity: 0,
            })
            gsap.to('.sc-visual .desc', {
                rotateX: 0,
                skewY: 0,
                rotateY: 0,
                opacity: 1,
                stagger: 0.4,
            })
        }
    }
    /**
     * @커서
     */
    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;
        gsap.to('.cursor',{
          x:xVal,
          y:yVal,
        })
    })
    $('.sc-visual .desc').mouseover(function(){
        gsap.to('.cursor',{scale:5})
    })
    $('.gnb button').mouseover(function(){
        gsap.to('.cursor',{scale:3})
    })
    $('.sc-visual .desc, .gnb button').mouseleave(function(){
        gsap.to('.cursor',{scale:1})
    })
    $('.sc-work .thumb-area, .footer .contact-area a').mouseover(function(){
        gsap.to('.cursor', {mixBlendMode: "normal"})
    })
    $('.sc-work .thumb-area, .footer .contact-area a').mouseleave(function(){
        gsap.to('.cursor', {mixBlendMode: "difference"})
    })
    /**
     * @gnb_버튼
     */
    $('.gnb button').click(function(){
        
        target=$(this).data('target');
        targetPos=$(target).offset().top;

        window.scrollTo({top:targetPos,behavior:"smooth"});
    });
    /**
     * @상단으로올라가는_버튼
     */
    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if(curr >= 20){
            $('.fix-btn .btn-top').addClass('show');
        }else{
            $('.fix-btn .btn-top').removeClass('show');
        };
    });
    $('.fix-btn .btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"});
    });
    /**
     * @진행률표시바_인디케이터
     */
    window.onscroll = function(){myFunction()};

    function myFunction(){
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll/height)*100;
        document.getElementById("indicator").style.width = scrolled + "%";
    };
})