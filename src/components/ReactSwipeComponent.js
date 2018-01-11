import React from 'react';
import Swiper from 'react-id-swiper';
import logo from '../img/logo.svg';
import HelloWord from '../components/HelloWorld.js'

export default class ReactSwiperComponent extends React.Component {
  render() {
    const params = {
      /*pagination: '.swiper-pagination',*/
      paginationClickable: true,
      /*nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',*/
      spaceBetween: 0,
      slidesPerView : 3,
      slidesPerGroup: 1,
	    keyboardControl : true,
      parallax : true,
      mousewheelControl: true,
      simulateTouch:true,
	    breakpoints:{
                1000:{
                    slidesPerView : 3,
                },
                840:{
                    slidesPerView : 1,
      }
	  },
      grabCursor: true,
    }
	return(
	<Swiper {...params}>
      <div>
	     <img src={logo} className="App-logo" alt="logo" />
		 <HelloWord />
	  </div>
      <div>
	     <img src={logo} className="App-logo" alt="logo" />
		 <HelloWord />
	  </div>
      <div>
	     <img src={logo} className="App-logo" alt="logo" />
		 <HelloWord />
	  </div>
      <div>
	     <img src={logo} className="App-logo" alt="logo" />
		 <HelloWord />
	  </div>
      <div>
	     <img src={logo} className="App-logo" alt="logo" />
		 <HelloWord />
	  </div>

    </Swiper>
	)

  }
}
