
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import '../css/App.css';
import SliderTop from '../components/SliderTop.js'
import ComparativeTable from '../components/ComparativeTable.js'
import SliderAccordionExpert from '../components/SliderAccordionExpert.js'
import FlipBox from '../components/FlipBox.js'
import CommentCaMarche from '../components/CommentCaMarche.js'

export default class Experts extends Component {
  render() {
    const jsonPath = '/json/dataPromotionExperts.json'
    const jsonPathSliderAccordion = '/json/dataCaptureExpert.json'
    const jsonPathFlipbox = '/json/dataFlipBox.json'
    const jsonPathCommentCaMarche = '/json/dataHowItWorks.json'
    return (
      <div className="container">
        <Helmet>
          <title>Accompagnez vos clients dans leur gestion. Accès gratuit pour les Experts-Comptable</title>
          <meta name="description" content="Accompagnez vos clients dans leur gestion. Accès gratuit pour les Experts-Comptable "/>
        </Helmet>
        <section className="section">
          <SliderTop jsonPath={jsonPath} init={true} current={1}/>
        </section>
        <h2 className="title">Choisissez l abonnement qui vous ressemble <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section">
            <SliderAccordionExpert jsonPath={jsonPathSliderAccordion}/>
        </section>
        <h2 className="title">PERFORMANCE ET SÉCURITÉ, CHOISISSEZ LE MEILLEUR POUR VOS CLIENTS <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section">
            <FlipBox jsonPath={jsonPathFlipbox}/>
        </section>
        <h2 className="title">EBP HORIZON, COMMENT CELA FONCTIONNE ? <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section">
            <CommentCaMarche jsonPath={jsonPathCommentCaMarche}/>
        </section>
      </div>
    )
  }
}
