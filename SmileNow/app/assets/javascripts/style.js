// function onScroll() {
//   var container = document.getElementById('map_container');
//   if (container.scrollTop === 0) {
//     container.className = " on-top";
//   } else {
//     container.classList.remove("on-top");
//   }
// }

// function onScroll() {
//     var content = document.getElementById('content');
//     var container = document.getElementById('container');
//     var scrollTop = content.scrollTop;
//     var elOffsetTop = container.offsetTop;
//     var elHeight = container.offsetHeight;
//     if ((scrollTop > elOffsetTop)&&(scrollTop<elOffsetTop+elHeight)) {
//       content.classList.add("on-top");
//     } else {
//       content.classList.remove("on-top");
//     }
//   }

// $(window).scroll(function() {
// var stickySidebar = $('.map_container').offset().top;
//
//     if ($(window).scrollTop() > stickySidebar) {
//         debugger
//         // $('.map_Container').css({position: 'fixed', top: '0px'});
//         $('.map_container').addClass('on-top');
//         console.log($('.map_container').hasClass('on-top'));
//     }
//     else {
//         $('.map_container').removeClass('on-top');
//     }
// });


$(function(){
        $(window).scroll(function(){
          var stickyMapTop = $('.map_container').offset().top;
          var viewportWidth = $(window).width();
          // console.log("main");
          // console.log($('.main_caption').offset().top);
          //
          // console.log("main height");
          // console.log($('.main_caption').height());

          var mainTop = $('.main_caption').offset().top;
          var mainHeight = $('.main_caption').height();

          var mainBottom = mainTop + mainHeight;
          // console.log("mainBottom");
          // console.log(mainBottom);

          // console.log("window height");
          // console.log($(window).height());
          //
          // console.log("maptop");
          // console.log(stickyMapTop);
          // console.log("scrollTop");
          // console.log($(window).scrollTop());

          if($(window).scrollTop() > mainBottom) {
              // debugger
              // console.log("inside");
              // console.log("maptop");
              // console.log(stickyMapTop);
              // console.log("scrollTop");
              // console.log($(window).scrollTop());
              $('.map_container').css({position: 'fixed', top: '0px', 'margin-top': '10px', 'margin-bottom': '10px', height: '92%'});
          } else if ( $(window).scrollTop() <= mainBottom )  {
              //debugger
              // console.log("inside else");
              // console.log(stickyMapTop);
              $('.map_container').css({position: 'relative', height: '430px', overflow: 'hidden'});
          }

        });
      });



  // $(window).scroll(function(){
  //   var stickyMapTop = $('.map_Container').offset().top;
  //   debugger
  //   console.log(stickyMapTop);
  //   console.log($(window).scrollTop());
  //   if($(window).scrollTop() > stickyMapTop) {
  //     $('.map_Container').css({position: 'fixed', top: '0px', left: $('.map_Container').offset().left});
  //   } else {
  //       $('.map_Container').css({position: 'relative', top: '0px'});
  //     }
  //
  // });
