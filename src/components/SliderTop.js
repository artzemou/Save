
import React, { Component } from 'react';
import $ from 'jquery';

window.jQuery = window.$ = $;
var init , current;

function throttle(callback, delay) {
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {

            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}

function sliderPromotionPrev(_this) {

        if (current > 1) {
            $(_this  + ' .sliderPromotion .item').css({
                left: '-100%'
            })
            current--;
            $(_this  + ' .sliderPromotion .current').addClass('justClicked').removeClass('current').prev().addClass('current').animate({
                left: 0
            }, 1000);
            setTimeout(function () {
                $(_this  +' .justClicked').removeClass('justClicked');
            }, 1000);
        } else {
            $(_this  + ' .sliderPromotion .item').css({
                left: '-100%'
            })
            $(_this  + ' .sliderPromotion .current').addClass('justClicked').removeClass('current');

            $(_this  + ' .sliderPromotion .item:last').addClass('current').animate({
                left: 0
            }, 1000);

            setTimeout(function () {
                $(_this  + ' .justClicked').removeClass('justClicked');
            }, 1000);
            current = $(_this  + ' .sliderPromotion .item').length;

        }



}

function sliderPromotionNext(_this) {

        if (current < $(_this  + ' .item').length) {
            current++;
            $(_this  + '  .item').css({
                left: '100%'
            });
            $(_this  + ' .current').addClass('justClicked').removeClass('current').next().addClass('current').animate({
                left: 0
            }, 1000);
            setTimeout(function () {
                $(_this  + ' .justClicked').removeClass('justClicked');
            }, 1000);



        } else {

            $(_this  + ' .item').css({
                left: '100%'
            })
            $(_this  + ' .current').addClass('justClicked').removeClass('current');
            $(_this + ' .item:first-child').addClass('current').animate({
                left: 0
            }, 1000);
            setTimeout(function () {
                $(_this  + ' .justClicked').removeClass('justClicked');
            }, 1000);
            current = 1;
        }




}



          class ListItem extends Component{
                componentDidMount() {
                  console.log($('.sliderPromotion .item').length)
                  $('.sliderPromotion .item').length === 1 ? $('.next-slider, .prev-slider').hide() : $('.next-slider, .prev-slider').show()
                };

                 render(){

                    if (init === true) {
                        init = false;
                        var style = {
                            background: 'url(' + this.props.background + ')',
                            backgroundPosition: 'center 100%',
                            backgroundSize:'cover'
                        };

                        return (

                            <li className="item current" style={style}>
                                <div className="content">
                                    <div className="inside">

                                        <img alt="" src={this.props.img}/>

                                            <div className="title" dangerouslySetInnerHTML={{__html: this.props.title}}></div>
                                            <div className="ideeRecue" dangerouslySetInnerHTML={{__html: this.props.ideeRecue}}></div>
                                            <div className="text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                                            <div className="special_offer" dangerouslySetInnerHTML={{__html: this.props.special_offer}}></div>
                                    </div>
                               </div>
                           </li>

                        );
                    }
                    else{
                        style = {
                          background: 'url(' + this.props.background + ')',
                          backgroundPosition: 'center 100%',
                          backgroundSize:'cover'
                        };
                        return(
                            <li className="item" style={style}>
                                <div className="content">
                                    <div className="inside">
                                        <img alt="" src={this.props.img}/>
                                        <img alt="" src={this.props.faux}/>

                                        <div className="title" dangerouslySetInnerHTML={{__html: this.props.title}}></div>
                                        <div className="ideeRecue" dangerouslySetInnerHTML={{__html: this.props.ideeRecue}}></div>
                                        <div className="text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                                        <div className="special_offer" dangerouslySetInnerHTML={{__html: this.props.special_offer}}></div>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                }

            }


            export default class SliderTop extends Component {
              constructor(props){
                    super(props);
                    this.state = {
                      data : []
                    }
                    this._next = this._next.bind(this);
                    this._prev = this._prev.bind(this);
                    this.handleStart = this.handleStart.bind(this);
                    this.handleMove = this.handleMove.bind(this);
                    this.handleEnd = this.handleEnd.bind(this);
                    this._throttledMouseMove = this._throttledMouseMove.bind(this);
                    this._onMouseMove = this._onMouseMove.bind(this);
                    this._onMouseDown = this._onMouseDown.bind(this);
                    this._onMouseUp = this._onMouseUp.bind(this);
                    this.loadData = this.loadData.bind(this);


                    this.eventObj = {

                            startX: 0,
                            startY: 0,
                            endX: 0,
                            endY: 0

                    };


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
                       //console.log(data, component)
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

              handleStart(e) {
                  // assuming single touch, e.touches is an Array of all touches,
                  // but with single touch there is only one element
                  let touch = e.touches[0];
                  this.eventObj.startX = touch.screenX;
                  this.eventObj.startY = touch.screenY;

              }

              handleMove(e) {
                  let touch = e.touches[0];
                  this.eventObj.endX = touch.screenX;
                  this.eventObj.endY  = touch.screenY
              }

              handleEnd() {

                  if(this.eventObj.startX > this.eventObj.endX) this._next()
                  else this._prev()
              }


              _onMouseDown(e){
                  this.eventObj.startX = e.screenX;
               }
              _onMouseMove(e) {
                    e.preventDefault()
                    e.persist();
                    this._throttledMouseMove(e);
              }
              _throttledMouseMove(e) {
                  this.eventObj.endX = e.screenX;
              }
              _onMouseUp (e) {

                  if(e.target.className === 'next-slider') this._next()
                  else if(e.target.className === 'prev-slider') this._prev()
                  else if(this.eventObj.startX === this.eventObj.endX) return
                  else if(this.eventObj.startX > this.eventObj.endX) this._next()
                  else this._prev()
              }

              _next(e) {
                  throttle(sliderPromotionNext('#sliderPromotion'), 500);
              }

              _prev(e){
                  throttle(sliderPromotionPrev('#sliderPromotion'),500);
              }

                render(){
                    init = this.props.init
                    current = this.props.current
                    const data = this.state.data;
                    //console.log(data)

                    const listItems = data.map((data, index) =>
                          // Key should be specified inside the array.
                          <ListItem key={index} title = {data.title} ideeRecue={data.ideeRecue} text = {data.text} special_offer = {data.special_offer} background = {data.background} img={data.img} faux={data.faux}/>
                    );


                    return (
                      <div id="sliderPromotion">
                          <div className="sliderPromotion" onTouchStart={this.handleStart} onTouchMove={this.handleMove} onTouchEnd={this.handleEnd} onMouseDown={this._onMouseDown} onMouseMove={this._onMouseMove} onMouseUp={this._onMouseUp}>
                             <ul className="content">
                               {listItems}


                             </ul>
                          </div>
                          <ul>
                            <li>
                              <nav>
                                  <span className="next-slider" onClick={this._next}></span>
                                  <span className="prev-slider" onClick={this._prev}></span>
                              </nav>
                            </li>
                          </ul>
                        </div>
                     );
                 }


                }
