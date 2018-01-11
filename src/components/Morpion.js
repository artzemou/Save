// hello-world.jsx

import React from 'react';

class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      circle: false

    };
    this.onClick = this.onClick.bind(this);

  }
  onClick(){

    if (this.state.circle === false) this.setState({circle: true})

  }

  render() {
    var divStyle = {
      height:'80px',
      border:'2px solid #d9d9d9',

    };
    return(
      <div style={divStyle}>
        <div  onClick={this.onClick} className={this.state.circle === true ? "circle" : "circle hide"}></div>
      </div>
    )
  }
}


export default class Morpion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      circle: false

    };
    this.onClick = this.onClick.bind(this);

  }
  onClick(){

    this.state.player === 1 ? this.setState({player: 2}) : this.setState({player: 1})

  }

  render() {
    /*const board = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]*/

    /*const generateBoard = board =>{

    }*/




    var gridStyle = {
      width:'240px',
      minHeight:'240px',
      border:'2px solid #d9d9d9',
      margin:'1rem'

    };


    return (
      <div style={gridStyle} className="grid-3">
          <Case/>
          <Case/>
          <Case/>
          <Case/>
          <Case/>
          <Case/>
          <Case/>
          <Case/>
          <Case/>

      </div>

    )
  }
}
