
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
//import FormulaireContact from '../components/FormulaireContact.js';
import ContactForms from '../components/ContactForms.js';




export default class Contact extends Component {
  render() {
    const jsonPath = '/json/dataContact.json'

    return (
      <div className="container CONTACT-container">
        <Helmet>
          <title>Contactez-nous - EBP Horizon - Solution de gestion et comptabilité en ligne</title>
          <meta name="description" content="Une question ? Besoin d'un renseignement ? Contactez notre équipe dédiée Entreprises ou Expert-Comptable qui se tient à votre disposition"/>

        </Helmet>
        <h2 className="title grey">Une question ou un besoin d’information ? <br/> Nous sommes là pour vous répondre.</h2>
        <section className="section">
          <div id="contact">
            <ContactForms jsonPath={jsonPath}/>
          </div>
        </section>


      </div>
    )
  }
}
