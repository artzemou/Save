// hello-world.jsx

import React, { Component } from 'react';
    class ListContent extends React.Component{

        constructor() {
            super();

        }

        render(){
            return(
              <li dangerouslySetInnerHTML={{__html: this.props.data.li}}></li>
            )

        }
      }


      class List extends React.Component{

        constructor(props) {
            super(props);
            this.state = {
              getInitialState: function() {
                return {
                  condition: false,
                  up: true
                }
              }
            }
            this.toogle = this.toogle.bind(this);

        }
        toogle(e){
          this.setState({
            condition: !this.state.condition,
            up: !this.state.condition,
          });

        }
        render(){

            const ask = this.props.data.ask
            console.log(ask)

            return(


                <ul onClick={this.toogle} className= { this.state.condition ? "FAQ-item open" : "FAQ-item"}>
                    <li  className= "ask clearfix">
                        <ul>
                            <li>
                              <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                              <b><span dangerouslySetInnerHTML={{__html: ask}}></span></b>
                              <i className={ this.state.condition ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
                             </li>
                        </ul>

                    </li>
                    <li className="answer">
                        <ul>
                            <li>
                              <ul className="content">
                                  {!!this.props.data.content ? this.props.data.content.map((data, index) =><ListContent key={index} data={data}/>) : null }

                              </ul>
                            </li>
                        </ul>
                    </li>

                </ul>
            )
        }
      }


      class RenderFAQ extends React.Component {

          render() {
            console.log(this.props.data)
            const FAQ = this.props.data.FAQ
            
            return (
              <div>
                  <ul className="col-left">
                      <li><b>Retrouvez ici les principales r&eacute;ponses aux questions que vous vous posez ! Cette page sera r&eacute;guli&egrave;rement enrichie.</b></li>
                      <li>{!!FAQ ? FAQ.map((data, index) =><List key={index} data={data}/>) : null }</li>
                  </ul>

              </div>

            );
          }
      }




export default class Faq extends Component {

  constructor(props){
        super(props);
        this.state = {
          data : []
        }
        this.loadData = this.loadData.bind(this);
   }

  componentDidMount() {
    this.loadData()
  }

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
    console.log(data)
    return (
      <RenderFAQ data={data}/>
    )
  }
}
