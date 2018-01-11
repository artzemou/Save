import React from 'react';
import ReactDOM from 'react-dom';


import './css/grillade.min.css';
import './css/App.css';



import App from './App';


import registerServiceWorker from './registerServiceWorker';
import scrollToSection from './scrollToSection';
import addTrackTags from './addTrackTags';
import eventTracking from './eventTracking';

import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render(
      <App/>
      , document.getElementById('root'), function(){
      setTimeout(function(){

        $('.loader-container').hide()
        $('body').css( {overflow:'auto'})
        scrollToSection()
        if(window.location.pathname === '/en-savoir-plus') $('#en-savoir-plus_target').trigger('click')

        $('.section, main, #footer').addClass('open')
        $('.cta a').on('click', function(){
          let target, location
          target = $(this).attr('target')
          location = $(this).attr('href')
          console.log(target)
          target === undefined ? window.location = location : window.open(location , target)

        })


      },150)
        //goBack()
        //responsiveAjustment()
        //detectMobileDevice()
        addTrackTags()
        eventTracking()
      }
)



registerServiceWorker();
