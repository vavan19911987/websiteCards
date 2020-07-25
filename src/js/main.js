$(document).ready(function () {

    var navBtn = $('#btn1,#btn2,#btn3');
    var logoAmi =$('#nav-logo');
    var menuLink = $('.menu-link');
    var menu = $('menu');
    var close = $('.close-btn');


    menuLink.click(function () {
        menu.toggleClass('active-menu');
    });
    close.click(function () {
        menu.removeClass('active-menu');
    });
    navBtn.mouseenter(function() {
        $(this).toggleClass('link-active');
    });
    navBtn.mouseleave(function() {
        $(this).removeClass('link-active');
    });
    logoAmi.mouseenter(function() {
        $(this).toggleClass('animation');
    });
    logoAmi.mouseleave(function() {
        $(this).removeClass('animation');
    });
    
   
});

$(document).ready(function () {
    var slideNow = 1;                 // Функция // //длинна//
    var slideCount = $(".sliderwrapper").children().length; // функция length определяет количество дочерних элементов
    var slideTime = 2000;
    var navBtn = $('.slide-nav');

    navBtn.click(function () {
        navBtn = $(this).index();
        $('.active').removeClass('active');
        $(this).toggleClass('active');
        if (navBtn + 1 != slideNow) {
            var translateWidth = -$('.viewport').width() * (navBtn);
            $('.sliderwrapper').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow = navBtn + 1;
        }
    });

// setInterval(nextSlide, slideTime);

    $('.btn__next').click(nextSlide);
    $('.btn__prev').click(prevSlide);

    function nextSlide() {
        if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
            $('.sliderwrapper').css({
                'transform': 'translate(0,0)',
                '-o-transform': 'translate(0,0)',
                '-webkit-transform': 'translate(0,0)'
            });
            slideNow = 1;
        } else {
            var translateWidth = -$('.viewport').width() * (slideNow);
            $('.sliderwrapper').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow++;
        }
    }
    function prevSlide() {
        if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
            var translateWidth = -$('.viewport').width() * (slideCount - 1);
            $('.sliderwrapper').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow = slideCount;
        } else {
            var translateWidth = -$('.viewport').width() * (slideNow - 2);
            $('.sliderwrapper').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow--;
        }
    }
});