
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Form from '../components/Form.js'
import SliderTop from '../components/SliderTop.js'



export default class Accueil extends Component {
  render() {
    const jsonPath = '/json/dataJeuConcours.js'
    const jsonPathRenvois = '/json/dataRenvois.json'

    return (
      <div className="container JeuConcours">
        <Helmet>
          <title>Questionnaire - EBP Horizon</title>
          <meta name="description" content=""/>

        </Helmet>
          <section className="section">
            <SliderTop jsonPath={jsonPath} init={true} current={1}/>
          </section>
          <h2 className="title">Jeu concours</h2>
          <section className="section">
            <div className="grid clearfix">
              <div className="aplat presentation">
                <div className="content">
                  <div className="title_jeu_concours">L’expert-comptable vous accompagnera dans votre quotidien : </div>
                  <ul className="functionsList">
                    <li><i className="fa fa-square" aria-hidden="true"></i><span>Tenue de comptabilité annuelle</span></li>
                    <li><i className="fa fa-square" aria-hidden="true"></i><span>Tenue des tableaux de bord mensuels</span></li>
                    <li><i className="fa fa-square" aria-hidden="true"></i><span>Recherche de financement</span></li>
                    <li><i className="fa fa-square" aria-hidden="true"></i><span>Elaboration d’un business plan</span></li>
                    <li><i className="fa fa-square" aria-hidden="true"></i><span>Réalisation des déclarations fiscales</span></li>
                  </ul>
                </div>
              </div>
              <div className="formulaire">
                <Form/>
              </div>
            </div>
          </section>
          <h2 className="title">Découvrez EBP Horizon</h2>
          <section className="section">
            <div className="grid clearfix">
                <div className="aplat presentation">
                  <div className="content">
                    <div className="title_jeu_concours">EBP Horizon,<br/> une solution full web dédiée aux TPE : </div>
                    <ul className="functionsList">
                      <li><i className="fa fa-square" aria-hidden="true"></i><span>Automatisation de votre gestion quotidienne</span></li>
                      <li><i className="fa fa-square" aria-hidden="true"></i><span>Création de devis et factures où que vous soyez</span></li>
                      <li><i className="fa fa-square" aria-hidden="true"></i><span>Gestion de vos factures fournisseurs, manuellement ou en automatique</span></li>
                      <li><i className="fa fa-square" aria-hidden="true"></i><span>Vision à 360° de votre activité</span></li>
                      <li><i className="fa fa-square" aria-hidden="true"></i><span>Collaboration avec votre Expert-Comptable</span></li>
                    </ul>
                  </div>
                </div>
                <div className="aplat">
                  <div className="content">
                      <div className="btn cta">
                        <a href="https://horizonapps.ebp.com/Try/?code=10243001FAA">Multiplier vos chances de gagner en créant votre compte EBP Horizon</a>
                      </div>
                  </div>
                </div>
              </div>
          </section>


      </div>
    )
  }
}
