
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import '../css/App.css';
import ComparativeTable from '../components/ComparativeTable.js'

export default class PageAbonnement extends Component {
  render() {
    const jsonPath = '/json/dataPromotionExperts.json'
    const jsonPathDataAbonnement = '/json/dataAbonnement.json'
    return (
      <div className="container container_abonnement">
        <Helmet>
          <title>Abonnement - EBP Horizon</title>
          <meta name="description" content="Choisisser votre abonnement EBP Horizon "/>
        </Helmet>
        <div id="">
          <h2 className="title">Choisissez l abonnement qui vous ressemble <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
          <div className="abonnement_txt"><span><b>Profitez d'une offre exceptionnelle</b> jusqu'au 18 mars 2018 : jusqu’à 3 mois offerts ! En effet, en plus du mois d’essai gratuit, bénéficiez de 2 mois supplémentaires offerts pour toute souscription initiale à un abonnement par prélèvement automatique ou 1 mois offert pour toute souscription initiale par carte bancaire.</span></div>
          <section className="section">
            <ComparativeTable jsonPath={jsonPathDataAbonnement}/>
          </section>
        </div>
      </div>
    )
  }
}
