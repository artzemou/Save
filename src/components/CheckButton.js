// hello-world.jsx

import React from 'react';

export default class CheckButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          checked: false

      }
      this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e){
    console.log('????')
    this.state.checked ? this.setState({checked: false}) : this.setState({checked: true})
  }
  render() {
    return(
        <div className={this.state.checked ? "CheckButton ckecked" : "CheckButton "} onClick={this.handleClick} >
          <div className="btn"></div>
         </div>
       )
  }
}
