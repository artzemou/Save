// hello-world.jsx

import React, { Component } from 'react';
var List = (props) =>{
      var content = props.data.content,
          href = props.data.href;

        return(
            <li><a href={href} target="_blank" dangerouslySetInnerHTML={{__html: content}}></a></li>
        )

    }

    class ListMenu extends React.Component{
      constructor(){
            super();

            this.handleClick = this.handleClick.bind(this);

      }
      handleClick(e) {
        //menuTarget(this, e)

      }
      render(){

          return(
              <li onClick={this.handleClick}><a href={this.props.data.href} target="_blank" dangerouslySetInnerHTML={{__html: this.props.data.content}}></a></li>
          )
      }


    }





    var Figure = (props) =>{
         var content = props.data.content,
             icon = props.data.icon

        return(
            <li>
               <span dangerouslySetInnerHTML={{__html: icon}}></span>
                <figure>
                    <figcaption dangerouslySetInnerHTML={{__html: content}}></figcaption>
                </figure>
            </li>
        )
    }


    class Footer extends React.Component {



      render(){

        const data = this.props.data
        const list1 = data.entreprise
        const list2 = data.offres
        const list3 = data.a_propos
        const list4 = data.social_network
        const list5 = data.reassurance
        const list6 = data.copyright


        return (
            <div id="footer">

                <div className="content clearfix">
                     <div className="reassurance clearfix">
                          <ul>{!!list5 ? list5.map((data, index) =><Figure key={index} data={data}/>) : null }</ul>

                     </div>
                     <div className="inside">
                         <div>
                             <ul className="entreprise">{!!list1 ? list1.map((data, index) =><ListMenu key={index} data={data}/>) : null }</ul>
                              <ul className="offres">{!!list2 ? list2.map((data, index) =><ListMenu key={index} data={data}/>) : null }</ul>
                              <ul className="a_propos">{!!list3 ? list3.map((data, index) =><ListMenu key={index} data={data}/>) : null }</ul>
                         </div>

                    </div>
                    <div className="socialNetWork clearfix">
                      <ul>{!!list4 ? list4.map((data, index) =><List key={index} data={data}/>) : null }</ul>

                     </div>

                </div>
                <div className="copyright clearfix">{!!list6 ? list6.map((data, index) =><ListMenu key={index} data={data}/>) : null }</div>
            </div>

        );
      }

    }



export default class HelloWorld extends Component {
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
    return <Footer data={data}/>
  }
}
