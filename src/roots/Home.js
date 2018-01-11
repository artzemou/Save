

import React, { Component } from 'react';
import logo from '../img/logo.svg';
import HelloWord from '../components/HelloWorld.js'
import ReactSwipeComponent from '../components/ReactSwipeComponent.js'
import EmptyBox from '../components/EmptyBox.js'
import CheckButton from '../components/CheckButton.js'
import Grid from '../components/Grid.js'
import Morpion from '../components/Morpion.js'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Grid/>
          <Morpion/>


        <CheckButton/>

        <main>
          <section>
            <div className="App-logo">
                   <img src={logo} className="App-logo-img" alt="logo" />
                   <HelloWord/>
            </div>
          </section>
          <section>
                 <EmptyBox/>

          </section>

          <section>
               <ReactSwipeComponent/>
          </section>
          <section>
               <ReactSwipeComponent/>
          </section>
          <section>
              <div className="App-logo">
                     <img src={logo} className="App-logo-img" alt="logo" />
                     <HelloWord/>
              </div>
              <div className="App-logo">
                     <img src={logo} className="App-logo-img" alt="logo" />
                     <HelloWord/>
              </div>
              <div className="App-logo">
                     <img src={logo} className="App-logo-img" alt="logo" />
                     <HelloWord/>
              </div>
              <div className="App-logo">
                     <img src={logo} className="App-logo-img" alt="logo" />
                     <HelloWord/>
              </div>
          </section>



        </main>

      </div>
    )
  }
}
