
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Faq from '../components/Faq.js'
import Renvois from '../components/Renvois.js'
import APropos from '../components/APropos.js'



export default class PageAPropos extends Component {
  render() {
    const jsonPathRenvois = '/json/dataRenvois.json'

    return (
      <div className="container FAQ-container">
        <Helmet>
          <title>A propos d’ EBP - EBP Horizon - Solution de gestion et comptabilité en ligne</title>
          <meta name="description" content="EBP Horizon est la solution de gestion 100% en ligne d'EBP, éditeur de logiciels de gestion depuis 1984. Le Groupe accompagne plus de 500 000 entreprises."/>

        </Helmet>
        <div id="mentions_legales">
          <h2 className="title grey">Groupe EBP</h2>
          <section className="section">
              <APropos/>
          </section>
        </div>
        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>

      </div>
    )
  }
}
