import React, { Component } from 'react';
import Loader from './components/Loader.js'
import Footer from './components/Footer.js'
import BarreMagnetique from './components/BarreMagnetique.js'
//import Submenu from './components/Submenu.js'
//Roots
import Home from './roots/Home.js'
import About from './roots/About.js'
import OClock from './roots/OClock.js'
import WayPoint from './roots/WayPoint.js'
import InfiniteScroll from './roots/InfiniteScroll.js'
import Accueil from './roots/Accueil.js'
import Entreprises from './roots/Entreprises.js'
import Experts from './roots/Experts.js'
import Faq from './roots/Faq.js'
import Questionnaire from './roots/Questionnaire.js'
import MentionsLegales from './roots/MentionsLegales.js'
import APropos from './roots/APropos.js'
import Abonnement from './roots/Abonnement.js'

//import Router
import createBrowserHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Link

} from 'react-router-dom'

import logo from './img/logo_horizon_blanc.png';
import $ from 'jquery';
window.jQuery = window.$ = $;

const innerLinks = [{
  "innerText": "",
  "path": "",
  "component": Accueil,
  "icon":"fa fa-home"
},{

  "innerText": "Groupe EBP",
  "path": "a-propos",
  "component": APropos
},{
  "innerText": "Nos solutions",
  "childRoutes": [
    {
      "innerText": "Entreprise",
      "path": "entreprises",
      "component": Entreprises

    },{
      "innerText": "Applications compléméntaire",
      "path": "",
      "component": null
    }
  ]

},{
  "innerText": "",
  "path": "en-savoir-plus",
  "component": Entreprises,
  "hide": true
},{
  "innerText": "Experts-comptable",
  "path": "experts",
  "component": Experts
},{

  "innerText": "Jeu concours",
  "path": "Questionnaire",
  "component": Questionnaire
},{
  "innerText": "Aide & support",
  "path": "FAQ",
  "component": Faq
},{

  "innerText": "",
  "path": "mentions-legales",
  "component": MentionsLegales,
  "hide": true
},{

  "innerText": "",
  "path": "abonnement",
  "component": Abonnement,
  "hide": true

}]





class Li extends Component {
   constructor(props){
     super(props);
     this.state = {
       open:false
     }
     this.handleClick = this.handleClick.bind(this);
   }
   handleClick(){
     this.state.open === true ? this.setState({open: false}) : this.setState({open: true})
   }
   render(){
     //const innerLink = this.props
     //console.log(innerLink)
     const {path, innerText, hide, icon, childRoutes} = this.props
     console.log(path)
     return(
       <li className={!!hide ? "hide" : null}>
         <ul>
           <li>

               {path === undefined ?
                   <a className="subMenu-btn" onClick={this.handleClick}>
                    <i className={icon} aria-hidden="true"></i>
                    <span>{innerText}</span>
                   </a>
                 : <Link to={`/${path}`}>
                      <i className={icon} aria-hidden="true"></i>
                      <span>{innerText}</span>
                    </Link>
                }

               {!!childRoutes  ?
                 <ul className={this.state.open ? "subMenu open" : "subMenu"}>
                    {childRoutes.map (({component, path, innerText, hide, icon}, index) => (
                      <li key={index}>
                        <Link to={`/${path}`}>
                          <i className={icon} aria-hidden="true"></i>
                          <span>{innerText}</span>
                        </Link>
                      </li>
                    ))}</ul>
                  :  null }
           </li>
         </ul>
       </li>

     )
   }
 }

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }
  handleHamburgerClick(){
    this.state.open === true ? this.setState({open: false}) : this.setState({open: true})
  }



  render() {
    const history = createBrowserHistory({forceRefresh: true})
    //const location = history.location
    //this.setState({pathname:location})
    const jsonPathFooter = '/json/dataFooter.json'

    const Routes = innerLinks.map (({path, component, childRoutes}, index) => (
      !!childRoutes  ?
      childRoutes.map (({component, path}, index) => (<Route key={index} exact path={`/${path}`} component={component}/>))
      : <Route key={index} exact path={`/${path}`} component={component}/>



    ) )

    return(

        <Router history={history}>
          <div>

            <header>
            <i onClick={this.handleHamburgerClick} className="fa fa-bars left btn-menu" aria-hidden="true"></i>
							<div className="Logo__container">
              	<img src={logo}/>
							</div>
              <ul className={this.state.open ? "Nav open" : "Nav"}>{innerLinks.map (( innerLink, index) => (
                <Li key={index} {...innerLink} />
              ) )}</ul>
              <div className="right">
        				<span className="register btn-tracked"><a href="/abonnement">Essai gratuit</a></span>
        				<a href="https://horizonapps.ebp.com/" target="_blank" className="log">
        					<span>Accéder à la plateforme</span>
        				</a>
        			</div>
            </header>

            <main>
              {Routes}
              <BarreMagnetique/>
            </main>
            <Footer jsonPath={jsonPathFooter}/>

          </div>

        </Router>

    )
  }


}

class App extends Component {

	  render() {
    return (

      <div className="App">
          <Loader/>
					<Nav/>
      </div>
    );
  }
}

export default App;
