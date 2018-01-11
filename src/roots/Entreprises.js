
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import SliderTop from '../components/SliderTop.js'
import ComparativeTable from '../components/ComparativeTable.js'
import Renvois from '../components/Renvois.js'
import SliderAccordionFirms from '../components/SliderAccordionFirms.js'



export default class Entreprises extends Component {
  render() {
    const jsonPath = '/json/dataPromotionFirms.json'
    const jsonPath2 = '/json/dataSubscriptionFirms.json'
    const jsonPathRenvois = '/json/dataRenvois.json'
    const jsonPathSliderAccordion = '/json/dataCaptureAnim.json'
    return (
      <div className="container">

        <Helmet>
          <title>Solution de gestion et comptabilité en ligne pour les entreprises - EBP Horizon</title>
          <meta name="description" content="Gérez l' activité de votre entreprise en ligne avec EBP Horizon. Editez vos documents de vente et suivez votre compta en quelques clics"/>

        </Helmet>
        <section className="section">
          <SliderTop jsonPath={jsonPath} init={true} current={1}/>
        </section>
        <h2 className="title">UNE PLATEFORME POUR TOUS VOS BESOINS DE GESTION <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section open">
            <SliderAccordionFirms jsonPath={jsonPathSliderAccordion}/>
        </section>
        <h2 className="title" id="en-savoir-plus_target">Choisissez l abonnement qui vous ressemble <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section open">
          <ComparativeTable jsonPath={jsonPath2}/>
        </section>

        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>
      </div>
    )
  }
}
