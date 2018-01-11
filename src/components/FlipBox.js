//Nota bene : çà s'appelle flipbox parcequ'avant c'était des flips boxes

import React, { Component } from 'react';


export default class FlipBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
    this.loadData = this.loadData.bind(this);

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
  render() {
    const {data} = this.state
    return (
      <Flipboxs data={data}/>
    )
  }
}


class Flipbox extends React.Component {
              constructor(props){
                    super(props);
                    this.state = {
                        className: "flipbox"
                    };
                    this.handleClick = this.handleClick.bind(this);

              }

              handleClick() {
                    if (this.state.className === 'flipbox') this.setState({className: "flipbox"});
                    else this.setState({className: "flipbox"});
              }

              render() {


                return (
                    <div  className={this.state.className} onClick={this.handleClick}>
                        <div className="wrapper">
                              <div className="front">

                                <span className="title">{this.props.data.title}</span>
                                <i className={this.props.data.icon}></i>
                                <span>{this.props.data.content}</span>
                              </div>
                              <div className="back"><span></span></div>
                          </div>
                    </div>


                )
              }
            }

            class Flipboxs extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {
                        className: "container_flipbox"
                    };
                    this.handleClick = this.handleClick.bind(this);

                }
                handleClick() {

                }
                render(){
                    const flipbox = this.props.data.flipbox
                    return(
                        <div className={this.state.className}>
                           <div className='inside'>
                                {!!flipbox ? flipbox.map((data, index) =><Flipbox key={index} id={index} data={data}/>) : null }
                            </div>
                        </div>
                   )
                }

            }
