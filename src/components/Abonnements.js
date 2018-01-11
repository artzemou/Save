import React, { Component } from 'react';


export default class Abonnements extends Component {

  constructor(props){
        super(props);

   }


  handleClick(e){
      window.location.pathname =  "abonnement"
  }

  render() {
    return (
    	<div className="grid Abonnements">
        <div onClick={this.handleClick.bind(this)}>
          <span>Abonnement</span>
          <span>First</span>
          <span>9.50€ / mois</span>
          <span className="EnSavoirPlus">En savoir +</span>

        </div>
        <div onClick={this.handleClick.bind(this)}>
          <span>Abonnement</span>
          <span>First +</span>
          <span>19.50€ / mois</span>
          <span className="EnSavoirPlus">En savoir +</span>
        </div>
        <div onClick={this.handleClick.bind(this)}>
          <span>Abonnement</span>
          <span>Open</span>
          <span>29.50€ / mois</span>
          <span className="EnSavoirPlus">En savoir +</span>
        </div>
    	</div>
    )
  }
}
