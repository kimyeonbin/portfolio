$(function(){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles(".mobile, .desktop");
    ScrollTrigger.matchMedia({
        "all": function() {
            // 비주얼텍스트_나타남
            gsap.timeline({
                paused: true,
            })
            .set('.sc-visual .desc', {
                rotateX: 90,
                skewY: 15,
                rotateY: 10,
                opacity: 0,
            })
            .to('.sc-visual .desc', {
                rotateX: 0,
                skewY: 0,
                rotateY: 0,
                opacity: 1,
                stagger: 0.5,
                delay: 1.3,
            })
            .play();
            // 어바웃텍스트_나타남
            gsap.timeline({
                paused: true,
            })
            .fromTo('.sc-about .desc',{
                opacity: 0,
                y: 30,
                delay: 4.5,
            },{
                duration: 1,
                opacity: 1,
                delay: 4.5,
                y: 0,
            })
            .play();
            // 상단이미지_움직임
            gsap.from('.container .illu.flo1', {
                duration: 1,
                scale: (1.3),
                delay: 3,
            });
            gsap.to('.container .illu.flo1', {
                duration: 1,
                right: -30,
                delay: 3,
            });
            gsap.from('.container .illu.flo2', {
                duration: 1.5,
                rotate: 9,
                scale: (1.7),
            });
            gsap.from('.container .illu.flo3', {
                duration: 1,
                scale: (2),
            });
            gsap.to('.container .illu.flo3', {
                duration: 2.5,
                rotate: 10,
                repeat: -1,
                yoyo: true,
                ease: "linear",
                delay: 1,
            });
            gsap.from('.container .illu.flo4', {
                duration: 1.5,
                rotate: -10,
                scale: (2),
            });
            gsap.to('.container .illu.flo4', {
                duration: 1.5,
                rotate: 30,
            }); 
            // gnb_버튼
            $('.gnb button').click(function(){
    
                target = $(this).data('target');
                targetPos = $(target).offset().top;

                window.scrollTo({top: targetPos, behavior: "smooth"});
            });
            // 상단으로올라가는_버튼
            $(window).scroll(function(){
                curr = $(this).scrollTop();
                if(curr >= 20){
                    $('.fix-btn .btn-top').addClass('show');
                }else{
                    $('.fix-btn .btn-top').removeClass('show');
                };
            });
            $('.fix-btn .btn-top').click(function(){
                window.scrollTo({top: 0, behavior: "smooth"});
            });
            // 진행률표시바_인디케이터
            window.onscroll = function(){myFunction()};
            function myFunction(){
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.getElementById("indicator").style.width = scrolled + "%";
            };           
        }
    });
});