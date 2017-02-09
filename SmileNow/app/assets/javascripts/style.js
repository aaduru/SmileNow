// function onScroll() {
//   var container = document.getElementById('map_container');
//   if (container.scrollTop === 0) {
//     container.className = " on-top";
//   } else {
//     container.classList.remove("on-top");
//   }
// }



$(window).scroll(function() {
var stickySidebar = $('.map_container').offset().top;

    if ($(window).scrollTop() > stickySidebar) {
        debugger
        $('.map_container').addClass('on-top');
        console.log($('.map_container').hasClass('on-top'));
    }
    else {
        $('.map_container').removeClass('on-top');
    }
});
