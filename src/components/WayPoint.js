// hello-world.jsx

import React from 'react';
import Waypoint from 'react-waypoint';



export default class Waypoints extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      message : null,
      animated : false
    }
		this._setMessage = this._setMessage.bind(this);
		this._renderMessage = this._renderMessage.bind(this);
    this._addClass = this._addClass.bind(this);
    this._removeClass = this._removeClass.bind(this);

	}

  _addClass() {
    this.setState({ animated: true });

  }

  _removeClass() {
    this.setState({ animated: false });

  }

  _setMessage(msg) {
    this.setState({ message: msg });
  }

  _renderMessage() {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="basic-example__message">
          {this.state.message}
      </div>
    );
  }

  render() {
    return (
      <div className= {this.state.animated === true ? "basic-example animated" : "basic-example "}>
        {this._renderMessage()}
        <div className="myGost"/>
        <div className="basic-example__scrollable-parent">
          <div className="basic-example__spacer" />
          <Waypoint
            onEnter={this._setMessage.bind(this, '__try_this')}
            onLeave={this._setMessage.bind(this, '__or_not')}
          />
          <div className="basic-example__spacer" />

          <div className="basic-example__spacer" />
          <div className="myGost"/>
          <div className="basic-example__spacer" />
          <div className="myGost"/>
          <div className="basic-example__spacer" />
          <div className="basic-example__waypoint-line"/>
          <div className="myGost"/>
          <Waypoint
            onEnter={this._setMessage.bind(this, 'Waypoint entered') && this._addClass}
            onLeave={this._setMessage.bind(this, 'Waypoint left')  && this._removeClass}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="myGost"/>
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
        </div>
      </div>
    )
  }
}
