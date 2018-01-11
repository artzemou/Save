
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Faq from '../components/Faq.js'
import Renvois from '../components/Renvois.js'



export default class Accueil extends Component {
  render() {
    const jsonPath = '/json/dataFAQ.json'
    const jsonPathRenvois = '/json/dataRenvois.json'

    return (
      <div className="container FAQ-container">
        <Helmet>
          <title>Aide et Support - EBP Horizon</title>
          <meta name="description" content="Besoin d'aide ? Une question ? Retrouvez notre FAQ de la solution de gestion en ligne EBP Horizon"/>

        </Helmet>
        <div id="FAQ">
          <h2 className="title grey">Bon à savoir</h2>
          <section className="section">
              <Faq jsonPath={jsonPath}/>
          </section>
        </div>
        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>

      </div>
    )
  }
}
