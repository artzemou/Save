// hello-world.jsx

import React, { Component } from 'react';


export default class CommentCaMarche extends Component {
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
    return(
      <ComponentExpert data={data}/>
    )
  }
}


class ListParagraphs extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    return (
             <li className="paragraph">
                   <p dangerouslySetInnerHTML={{__html: this.props.data.p}}></p>
             </li>
    )
  }
}


class List extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <li>
            <i className="fa fa-square" aria-hidden="true"></i> <span>{this.props.data.li}</span>
      </li>
    )
  }
}


class ComponentExpert extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      const listItems = this.props.data.list
      const listParagraphs = this.props.data.description

      return (
        <div className="grid">
          <div>
              <ul className="paragraphList">
                  {!!listParagraphs ? listParagraphs.map((data, index) =><ListParagraphs key={index} data={data}/>) : null }
              </ul>
              <ul className="functionsList">
                  {!!listItems ? listItems.map((data, index) =><List key={index} data={data}/>) : null }

              </ul>
          </div>
        </div>
      )
    }
}
