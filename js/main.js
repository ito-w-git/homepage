// ヘッダー
function headerBGC(){
    if(!($("header").hasClass("sub"))){
        if($(this).scrollTop() === 0){
            $("header").css("background-color", "transparent");
        }else{
            $("header").css("background-color", "mediumblue");
        }
    }
}

// スクロールアニメーション
function scrollAnimation() {
    $(".scrollAnime").each(function(){
        var top = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var height = $(window).height();
        if (scroll >= top - height){
            $(this).addClass("fade");
        }
    });
}

// メイン要素の最低高を設定
function mainMinH() {
    var windowH = $(window).height();
    var headerH = $("header").height();
    var footerH = $("footer").height();
    $("main").css("min-height", windowH - headerH - footerH);
}

// スライドショー初期化
function slickInit() {
    $(".mainVisual .slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        dots: true,
        arrows: false,
        appendDots: $(".buttons"),
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });
    $(".slideImg .slider").slick({
        speed: 1500,
        dots: true,
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });

    
    $(".slick-dots li").text("");
    $(".slick-arrow").text("");
}
// スライドショー 一時停止ボタン処理
$(".mainVisual .pauseBtn").on("click", function(){
    if ($(this).hasClass("pause")) {
        $(this).removeClass("pause");
        $(".slider").slick("slickPlay")
    } else {
        $(this).addClass("pause")
        $(".slider").slick("slickPause");
    }
});

// ハンバーガーメニュー開閉処理
$(".burgerBtn").on("click", function(){
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
        $(".burgerMenuBox").removeClass("open")
    } else {
        $(this).addClass("active")
        $(".burgerMenuBox").addClass("open")
    }
});


// メインビジュアル スクロールボタン
$(".scrollBtn").on("click", function () {
    var header = $("header").height();
    $("html, body").animate({
        scrollTop: window.innerHeight - header
    }, 1000);
});


$(document).ready(function() {
    headerBGC();
    mainMinH();
    slickInit();
    scrollAnimation()
});
$(window).on("load scroll", function() {
    headerBGC();
    mainMinH();
    scrollAnimation();
});
$(window).resize(function() {
    mainMinH();
})
