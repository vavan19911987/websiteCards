$(document).ready(function () {

    var navBtn = $('#btn1,#btn2,#btn3');
    var logoAmi =$('#nav-logo')

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
    var menuLink = $('.menu-link');
    var menu = $('menu');
    var close = $('.close-btn');

    menuLink.click(function () {
        menu.toggleClass('active-menu');
    });
    close.click(function () {
        menu.removeClass('active-menu');
    });

    // navLink.on('click', function (event) {
    //     event.preventDefault();
    //     var target = $(this).attr('href');
    //     // console.log(target);
    //     var top = $(target).offset().top;
    //     // console.log(top);
    //     $('html,body').animate({scrollTop: top}, 500)
        
    // });
});