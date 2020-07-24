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

// $(document).ready(function () {
//     var menuLink = $('.menu-link');
//     var menu = $('menu');
//     var close = $('.close-btn');

//     menuLink.click(function () {
//         menu.toggleClass('active-menu');
//     });
//     close.click(function () {
//         menu.removeClass('active-menu');
//     });

// });