// hello-world.jsx

import React from 'react';
import ReactDOM from 'react-dom'

export default class InfiniteScroll extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data : [],
        i:0
      }
      this.handleScroll = this.handleScroll.bind(this);
      this.loadData = this.loadData.bind(this);
      this.checkForNewDiv = this.checkForNewDiv.bind(this);
    }

    componentDidMount() {
      this.loadData()
      document.addEventListener('click', this.handleClickOutside.bind(this), true);
      window.addEventListener('scroll', this.handleScroll);
    };
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('click', this.handleClickOutside.bind(this), true);

    };


    handleClickOutside(event) {
      console.log('????')
  			const domNode = ReactDOM.findDOMNode(this);
  			if (!domNode || !domNode.contains(event.target)) {
  				 document.removeEventListener("scroll", this.checkForNewDiv)
  			}
  	}

    handleScroll(event) {
      //console.log('the scroll things', event)
      //console.log(document.querySelector('.infiniteScollContainer').offsetTop)
      //console.log(document.querySelector('.infiniteScollContainer').clientHeight)
      //console.log(window.pageYOffset + window.innerHeight)
    }
    loadData ()  {
      let self = this
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
              self.setState({
                data: data
              })
              self.checkForNewDiv()
              document.addEventListener("scroll", self.checkForNewDiv)
              return
           });
         }
       )
       .catch(function(err) {
         console.log('Error', err);
       });
    }

    checkForNewDiv () {
        const i = this.state.i;
        var lastDiv = document.querySelector(".infiniteScollContainer > div:last-child");
        var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
        var pageOffset = window.pageYOffset + window.innerHeight;
        if (pageOffset > lastDivOffset - 10) {
            var item = document.createElement("div");
            item.setAttribute("class","item")
            if (this.state.data[i] === undefined) return
            else{
              item.innerHTML = '<span>' + this.state.data[i].innerText + '</span>';
              document.querySelector(".infiniteScollContainer").appendChild(item);
              if(i < this.state.data.length){
                this.state.i++
              }
              this.checkForNewDiv()
            }
        }
    };
    render() {
      console.log(this.props.jsonPath)
      return (
        <div className="infiniteScollContainer">
            <div></div>

        </div>
      )
    }
}
