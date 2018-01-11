import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import modal from '../modal';
import $ from 'jquery';
window.jQuery = window.$ = $;




export default class SliderAccordionFirms extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
    this.loadData = this.loadData.bind(this);

  }

  componentDidMount() {
    this.loadData()
  };

  loadData ()  {
    let component = this
    fetch(process.env.PUBLIC_URL + this.props.jsonPath, {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }

        })
     .then(
       function(response) {
         if (response.status !== 200) {
           console.log('Looks like there was a problem. Status Code: ' +
             response.status);
           return;
         }

         // Examine the text in the response
         response.json().then(function(data) {
            component.setState({
              data: data
            })
            return
         });
       }
     )
     .catch(function(err) {
       console.log('Error', err);
     });
  }
  render() {
    const self = this
    const {data} = self.state
    const params = {
      initialSlide: 0,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed : 800,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-buttonparam-prev',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          if(data[index] !== undefined){
            return '<div class="' + className + '"><span>'+data[index].title+'</span></div>'
          }
        }
      },
      keyboardControl : false,
      parallax : true,
      mousewheelControl: false,
      simulateTouch:false,
      effect:'fade',
      fade: {
          crossFade: true
      },

      containerClass: 'anim_capture capture_anim sliderCaptureExpert',
      rebuildOnUpdate : true,
      sliseShadows: true

    }

  	return(
        	<Swiper  {...params}>
            { data.map((item, index) => ( <Slide key={index} data={item}/> )) }
          </Swiper>

  	)

  }
}

class Slide extends Component {
  componentDidMount() {
    modal()
  };
  render() {
    const {data} = this.props

    const params = {
      initialSlide: 0,
      slidesPerView : 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed : 800,
      paginationClickable : true,
      keyboardControl : false,
      parallax : true,
      mousewheelControl: false,
      simulateTouch:false,
      breakpoints:{
           1000:{
              slidesPerView : 1,
          },
           840:{
              slidesPerView : 1,
           }
      },
      containerClass: 'gallery-thumbs gallery-thumbs-firm',
      rebuildOnUpdate : true,
      slideToClickedSlide: true

    }
    const Paragraphes = this.props.data.content.map((paragraphe, index) => (
          <li key={index}>
              <p dangerouslySetInnerHTML={{__html: paragraphe}}></p>
          </li>
    ));

    return(
      <div className="swiper-slide">
        <div className="clearfix">

          <Swiper  {...params}>
            { data.captures.map((data, index) => ( <SlidesCapture key={index} data={data}  /> )) }
          </Swiper>
          <div className="content" >
              <ul>
                  {Paragraphes}
              </ul>
          </div>

        </div>
      </div>
    )
  }
}



class SlidesCapture extends Component {
  componentDidMount() {
    loadIframes();
    responsiveAjustment();
  };

  render() {
    const {data} = this.props
    return(
      <div className="iframe-container firms">
        <div className="swiper-slide">
          <img alt="" src={data.capture}/>
          <legend>{data.legend}</legend>
        </div>
      </div>
    )
  }
}


function responsiveAjustment() {

    $(window).resize(function () {
        if (this.resizeTO) {
            clearTimeout(this.resizeTO);
        }
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 500);

    });

    $(window).on('resizeEnd', function () {
       if($(window).width() > 982){
         $('.swiper-pagination.top').show();
         $('.swiper-pagination.bottom').hide();
       }
       else{
         $('.swiper-pagination.top').hide();
         $('.swiper-pagination.bottom').show();
       }


    });

    $(window).trigger('resize')


}

function loadIframes(){
    setTimeout(function () {
    $('iframe').each(function () {
        $(this).attr('src', $(this).attr('data-src'));
    });
    toggleFaIcon()
    }, 1000);
}

function toggleFaIcon(){
  $('.swiper-pagination-bullet:nth-child(1)').on('click', function(){
      $('.capture_anim').find('.btn .fa').removeClass('fa-play fa-file-image-o').addClass('fa-hand-pointer-o')
  })
  $('.swiper-pagination-bullet:nth-child(2)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-play fa-hand-pointer-o').addClass('fa-file-image-o')
  })
  $('.swiper-pagination-bullet:nth-child(3)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-play fa-hand-pointer-o').addClass('fa-file-image-o')
  })
  $('.swiper-pagination-bullet:nth-child(4)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-file-image-o fa-hand-pointer-o').addClass('fa-play ')
  })
  $('.swiper-pagination-bullet:nth-child(5)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-play fa-hand-pointer-o').addClass('fa-file-image-o')
  })
  $('.swiper-pagination-bullet:nth-child(6)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-file-image-o   fa-hand-pointer-o').addClass('fa-play')
  })
  $('.swiper-pagination-bullet:nth-child(7)').on('click', function(){
    $('.capture_anim').find('.btn .fa').removeClass('fa-play fa-hand-pointer-o').addClass('fa-file-image-o')
  })
}
