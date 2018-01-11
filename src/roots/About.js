import React, { Component } from 'react';

import WhatAbout from '../components/WhatAbout.js'
import Form from '../components/Form.js'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <WhatAbout/>
      </div>
    )
  }
}
