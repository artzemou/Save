// hello-world.jsx

import React from 'react';
import Clock from '../components/Clock.js'

export default class Grid extends React.Component {


  render() {
    return(
      <div className="grid-6">
        <div>
          <Clock/>
        </div>
        <div>
          <Clock/>
        </div>
        <div>
          <Clock/>
        </div>
        <div>
            ?????
        </div>
        <div>
          <Clock/>
        </div>
        <div>
          <Clock/>
        </div>
      </div>
       )
  }
}
