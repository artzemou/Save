// hello-world.jsx

import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      animationName: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick()
        //console.log(new Date().getSeconds)
        //console.log((new Date().getMinutes() + new Date().getSeconds() * 0.01666666666) * 6)
      },

      1000
    );
    let styleSheet = document.styleSheets[2];
    let animateSecond =
    `@keyframes animateSecond {
        0%{
            transform: rotate(`+ (-180 + (new Date().getSeconds() * 6))+`deg)
        }
        100%{
            transform: rotate(`+ (180 + (new Date().getSeconds() * 6)) +`deg)
        }
    }
    `;

    let animateMinute =
    `@keyframes animateMinute {
        0%{
            transform: rotate(`+ (-180 + ((new Date().getMinutes() + new Date().getSeconds() * 0.01666666666) * 6))+`deg)
        }
        100%{
            transform: rotate(`+ (180 + ((new Date().getMinutes() + new Date().getSeconds() * 0.01666666666) * 6)) +`deg)
        }
    }
    `;

    let animateHour =
    `@keyframes animateHour {
        0%{
            transform: rotate(`+ (-180 + (( new Date().getHours() + new Date().getMinutes() * 0.01666666666 + new Date().getSeconds() * 0.00027777777) * 30))+`deg)
        }
        100%{
            transform: rotate(`+ (-180 + (( new Date().getHours() + new Date().getMinutes() * 0.01666666666 + new Date().getSeconds() * 0.00027777777) * 30))+`deg
        }
    }`

    styleSheet.insertRule(animateSecond, styleSheet.cssRules.length);
    styleSheet.insertRule(animateMinute, styleSheet.cssRules.length);
    styleSheet.insertRule(animateHour, styleSheet.cssRules.length);

  }

  componentWillUnmount() {
    clearInterval(this.timerID);

  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {


    return (
      <div className="Oclock-wrap">

        <div className="Oclock">
            <div className="hour-hand"></div>
            <div className="minute-hand"></div>
            <div className="second-hand"></div>
            <div className="center-point"></div>
        </div>
        <div className="time">{this.state.date.toLocaleTimeString()}.</div>
        <div className="text">My watch was out of order </div>
        <div className="smiley">: (</div>
        <div className="text">It was delaying,</div>
        <div className="text">... but now it`s works fine !</div>
        <div className="smiley">: )</div>
      </div>
    );
  }
}
