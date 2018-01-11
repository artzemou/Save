
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Faq from '../components/Faq.js'
import Renvois from '../components/Renvois.js'
import MentionsLegales from '../components/MentionsLegales.js'



export default class Accueil extends Component {
  render() {
    const jsonPathRenvois = '/json/dataRenvois.json'

    return (
      <div className="container FAQ-container">
        <Helmet>
          <title>Mentions légales</title>
          <meta name="description" content="Mentions légales"/>

        </Helmet>
        <div id="mentions_legales">
          <h2 className="title grey">Mentions légales</h2>
          <section className="section open">
              <MentionsLegales/>
          </section>
        </div>
        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>

      </div>
    )
  }
}
