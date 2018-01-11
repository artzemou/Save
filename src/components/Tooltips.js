// hello-world.jsx

import React, { Component } from 'react';


export default class Tooltips extends Component {
  constructor(props){
        super(props);
   }
  render() {
    console.log(this.props.data)
    return (
      <div className="tooltip">
        <span>{this.props.data}</span>
        <a>En savoir plus</a>
      </div>
    );
  }
}
