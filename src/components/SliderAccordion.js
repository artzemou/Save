import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import modal from '../modal';




export default class SliderAccordion extends Component {
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
      spaceBetween: 30,
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

      containerClass: 'anim_capture',
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
      slidesPerView : 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
      speed : 800,
      paginationClickable : true,
      keyboardControl : false,
      parallax : true,
      mousewheelControl: false,
      simulateTouch:false,
      breakpoints:{
           1000:{
              slidesPerView : 3,
          },
           840:{
              slidesPerView : 1,
           }
      },
      containerClass: 'gallery-thumbs',
      rebuildOnUpdate : true,
      slideToClickedSlide: true

    }

    return(
      <div className="swiper-slide">
        <div className="text" id={this.props.id} dangerouslySetInnerHTML={{__html: this.props.data.content}}></div>
        <div className="clearfix">
          <Swiper  {...params}>
            { data.captures.map((data, index) => ( <SlidesCapture key={index} data={data}  /> )) }
          </Swiper>
        </div>
      </div>
    )
  }
}

class SlidesCapture extends Component {

  render() {
    const {data} = this.props

    return(
      <div className="swiper-slide">
        <img alt="" src={data.capture}/>
        <legend>{data.legend}</legend>
      </div>
    )
  }
}
