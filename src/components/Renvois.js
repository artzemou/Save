import React, { Component } from 'react';


var ListRenvois = (props) =>{
  var content = props.data.content

    return(
        <li><span dangerouslySetInnerHTML={{__html: content}}></span></li>
    )

}

export default class Renvois extends Component {
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
           let location = window.location.pathname.replace('/','')
           if (location === '') location = 'home'
           location = location.valueOf()
            component.setState({
              data: data[location]
            })

            return
         });
       }
     )
     .catch(function(err) {
       console.log('Error', err);
     });
  }


  render(){


    const data = this.state.data;
    return (
        <div className="renvois">
          <ul className="content clearfix">
            {!!data ? data.map((data, index) =><ListRenvois key={index} data={data}/>) : null }
          </ul>
        </div>
    );
  }
}
