$(function () {
    //메인메뉴 
    $("#nav>li").mouseover(function () {
        navNum = $(this).index();
        //				console.log(navNum);
        $(".sub").eq(navNum).stop().slideDown(400);
    })
    $("#nav>li").mouseout(function () {
        $(".sub").stop().slideUp(300);
    })

    //hamBtn
    $(".hamBtn>a").click(function () {
        if ($(this).hasClass("active")) {
            $(".mNav").css("display", "none");
            $(".hamBtn").css("right", "20px");
        } else {
            $(".mNav").css("display", "block");
            $(".hamBtn").css("right", "20px");
        }
        $(this).toggleClass("active");
    })

    //모바일 메뉴
    $(".mNav").css("display", "none");
    $("#mobileNav>li>a").next(".sub").css("display", "none");
    $("#mobileNav>li>a").click(function () {
        if ($(this).parent("li").hasClass("active")) {
            $(this).parent("li").removeClass("active");
            $(this).next(".sub").css("display", "none");
        } else {
            $(this).parent("li").addClass("active");
            $(this).next(".sub").css("display", "block");
        }
        $(this).parent("li").siblings("li").removeClass("active").children(".sub").css("display", "none");
    })

    //mainBanner
    var showBanner = 0;

    function autoBanner() {
        if (showBanner < 2) {
            showBanner++;
        } else {
            showBanner = 0;
        }
        $(".banner>li").eq(showBanner).fadeIn(500).siblings().fadeOut(500);
        $(".circle>li").eq(showBanner).addClass("active").siblings().removeClass("active");
    }
    var timer = setInterval(autoBanner, 3000);

    $(".banner").mouseover(function () {
        clearInterval(timer);
    })
    $(".banner").mouseout(function () {
        timer = setInterval(autoBanner, 3000);
    })

    $(".circle>li").click(function () {
        var sNum = $(this).index();
        console.log(sNum);
        $(this).addClass("active").siblings().removeClass("active");
        $(".banner>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
    })

})
