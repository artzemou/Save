import React, { Component }  from 'react';
import Swiper from 'react-id-swiper';

export default class SliderIdeesRecues extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      galleryTop: []
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
              data: data,
              galleryTop: data.galleryTop
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
    const {data, galleryTop} = this.state
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      paginationClickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 0,
      slidesPerView : 1,
	    keyboardControl : true,
      parallax : true,
      mousewheelControl: true,
      simulateTouch:true,
      grabCursor: true,
      containerClass: 'sliderReceivedIdeaSlider',
      rebuildOnUpdate : true
    }
	return(
	  <Swiper {...params}>
        {!!data.galleryTop ? galleryTop.map((data, index) => ( <Slides key={index} data={data}  /> )) : null}

    </Swiper>
	)

  }
}
//
class Slides extends Component {
  render() {
    const {data} = this.props

    return(
      <div className="swiper-slide"  >
        <div className="clearfix">
            <img alt="" src={data.img}/>
            <img alt="" src={data.faux}/>
            <div className="title" dangerouslySetInnerHTML={{__html: data.title}}></div>
            <div className="ideeRecue" dangerouslySetInnerHTML={{__html: data.ideeRecue}}></div>
            <div className="text" dangerouslySetInnerHTML={{__html: data.text}}></div>
        </div>

      </div>
    )
  }
}
