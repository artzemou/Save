import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import $ from 'jquery';
window.jQuery = window.$ = $;

export default function modal(){
  $('button').show()
  $('.zoom_in, .zoom_out, .modal .fa, .gallery-thumbs').off('click');

  function toggleFullScreen() {
      if (!document.fullscreenElement && // alternative standard method
          !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
          if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
      } else {
          if (document.cancelFullScreen) {
              document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          }
      }
  }

  var s = 1;
  $('.zoom_in').on('click', function () {

      s = s + 0.1;
      $('.modal .swiper-container').css({
          transformOrigin: 'top',
          transform: 'scale(' + s + ')'
      });
  });

  $('.zoom_out').on('click', function () {
      if (s > 1) {
          s = s - 0.1;
          $('.modal .swiper-container').css({
              transformOrigin: 'top',
              transform: 'scale(' + s + ')'
          });
      }

  });

  $('.modal .fa').on('click', function () {

      if ($(this).hasClass('fullscreen')) {

          $(this).toggleClass('fullscreen_exit fullscreen');
          toggleFullScreen();
      } else if ($(this).hasClass('fullscreen_exit')) {

          $(this).toggleClass('fullscreen_exit fullscreen');
          toggleFullScreen();
      }else if ($(this).hasClass('close')) {

        $('.modal').find('.gallery-thumbs').remove();
        $('body').removeClass('modal-open');

        $('.modal-backdrop, .modal').removeClass('in');
        $('html').removeClass('modal-open');
        if (document.fullscreenElement || // alternative standard method
            document.mozFullScreenElement || document.webkitFullscreenElement) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }


      }


  });


  $(document).mouseup(function (e) {
      var container = $('.modal .swiper-wrapper');

      if (!container.is(e.target) && container.has(e.target).length === 0
      && !$('.modal .nav').is(e.target)
      && $('.modal .nav').has(e.target).length === 0
      && !$('.swiper-button-next').is(e.target) && !$('.swiper-button-prev').is(e.target)) {
        $('.modal, .modal-backdrop').hide()

          $('body').removeClass('modal-open');

          $('.modal-backdrop, .modal').removeClass('in');
          $('html').removeClass('modal-open');
          if (document.fullscreenElement || // alternative standard method
              document.mozFullScreenElement || document.webkitFullscreenElement) {
              if (document.cancelFullScreen) {
                  document.cancelFullScreen();
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
              } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
              }
          }
      }
  });


  $(".gallery-thumbs").on("click", function(e) {
    $('.modal, .modal-backdrop').show()
      var active = $(e.target).parent(".swiper-slide").index();
      e.preventDefault()
      $(this).clone().addClass('clone').appendTo('.modal-body');
      if($(this).find('.swiper-slide').length === 1){
        $('.clone').find('.swiper-button-prev, .swiper-button-next').remove();
      }
      $('body').addClass('modal-open');
      $('.modal-backdrop, .modal').addClass('in');

        var slideClones = []

        $('.clone .swiper-slide').each(function(){
          slideClones.push($(this).html())
        })
        $('.clone').remove()
        //console.log($(this).find('.swiper-slide.swiper-slide-active').index())

      class SliderModal extends Component {
        render() {
          const params = {
            initialSlide: active,
            spaceBetween: 0,
            keyboardControl : true,
            mousewheelControl: true,
            simulateTouch:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            containerClass: 'SliderModal',
            grabCursor: true,
            rebuildOnUpdate : true

          }

          return(
                <Swiper  {...params}>
                  { slideClones.map((data, index) => ( <SlidesCapture key={index} data={data}  /> )) }
                </Swiper>
          )
        }
      }



      class SlidesCapture extends Component {

        render() {
          const {data} = this.props

          return(
            <div className="swiper-slide" dangerouslySetInnerHTML={{__html: data}}></div>
          )
        }
      }

      ReactDOM.render(
         <SliderModal/>, document.getElementById('modal'), function(){
           console.log($('.SliderModal .swiper-slide').length)
           if($('.SliderModal .swiper-slide').length <= 1){
             $('.swiper-button-disabled').hide()
           }
         }
      )

      $("html").addClass("modal-open")
  });
}
