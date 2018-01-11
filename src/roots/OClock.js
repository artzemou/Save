

import React, { Component } from 'react';

import Clock from '../components/Clock.js'


export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Clock/>
      </div>
    )
  }
}
