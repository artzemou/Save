import React, { Component } from 'react';
import $ from 'jquery';
var ReactGA = require('react-ga');
ReactGA.initialize('UA-873612-18');

window.jQuery = window.$ = $;

              class Table extends Component {

                constructor(props){
                      super(props);

                      this.handleClick = this.handleClick.bind(this);
                 }



                 handleClick(e){
                     e.preventDefault();
                     window.location.pathname =  "en-savoir-plus"
                 }


                 renderHead(data) {
                   return (
                     <thead>
                         <tr>
                           { data.map((el, key) =>
                               <th key={key} dangerouslySetInnerHTML={{__html: el.content}}></th>
                           )}
                         </tr>
                       </thead>
                   );
                 }

                 renderFooter(data, key) {
                   return (
                     <tfoot>
                       <tr key={key}>
                         { data.map((el, key) =>
                           <td className="cta" key={key} dangerouslySetInnerHTML={{__html: el.content}}></td>
                           ) }
                       </tr>
                     </tfoot>
                   );
                 }

                 renderBody(data) {
                   return (
                     <tbody>
                       { data.map((el, key) => this.renderRow(el, key) ) }
                     </tbody>
                   );
                 }

                 renderRow(data, key) {
                   return (
                     <tr key={key}>
                       { data.map( (el,key) => this.renderCell(el,key) )}
                     </tr>
                   );
                 }

                  renderCell(data, key) {

                      if(key === 0){
                        console.log(data)
                          return (
                              <th key={key} >
                                {data}

                              </th>
                          )
                      }
                      else if(key === 1 ){
                          return (
                              <td data-title="First" key={key} dangerouslySetInnerHTML={{__html: data}}></td>
                          )
                      }
                      else if(key === 2 ){
                          return (
                              <td data-title="First+" key={key} dangerouslySetInnerHTML={{__html: data}}></td>
                          )
                      }
                      else if(key === 3 ){
                          return (
                              <td data-title="Open" key={key} dangerouslySetInnerHTML={{__html: data}}></td>
                          )
                      }


                 }



                 render() {
                   return (
                     <table className="responsive-table">

                       {this.renderHead(this.props.head)}
                       {this.renderBody(this.props.body)}
                       {this.renderFooter(this.props.foot)}
                     </table>
                   );
                 }
               }

               export default class TableComponent extends React.Component {

                 constructor(props){
                       super(props);
                       this.state = {
                         head : [],
                         body : [],
                         foot : []
                       }
                       this.loadData = this.loadData.bind(this);
                  }

                 componentDidMount() {
                   this.loadData()
                   bindResponsiveCallToAction()
                 }

                 loadData ()  {
                   let component = this
                   fetch(process.env.PUBLIC_URL + this.props.jsonPath, {
                         headers : {
                           'Content-Type': 'application/json',
                           'Accept': 'application/json'
                          }

                       })
                    .then(
                      function(response) {
                        if (response.status !== 200) {
                          console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                          return;
                        }

                        // Examine the text in the response
                        response.json().then(function(data) {
                           component.setState({
                             head: data.head,
                             body:data.body,
                             foot:data.foot
                           })

                           return
                        });
                      }
                    )
                    .catch(function(err) {
                      console.log('Error', err);
                    });
                 }
                 render() {
                   const {head, body, foot} = this.state
                   return (
                      <div className="box">
                      <Table
                          head = {head}
                          body= {body}
                          foot = {foot}


                      />
                      </div>
                   );
                 }
               }




               function bindResponsiveCallToAction() {
                   $(window).resize(function() {
                       if (this.resizeTO) {
                           clearTimeout(this.resizeTO)
                       }
                       this.resizeTO = setTimeout(function() {
                           $(this).trigger('resizeEnd')
                       }, 500)
                   });
                   $(window).on('resizeEnd', function() {
                       var ga = ReactGA.ga();
                       if ($(window).width() < 680) {
                           $('[data-title="First"]').off('click');
                           $('[data-title="First+"]').off('click');
                           $('[data-title="Open"]').off('click');
                           var pageName = window.location.pathname;
                           if (pageName === "/")
                               pageName = 'accueil';
                           pageName = pageName.replace('/', '');
                           $('[data-title="First"]').on('click', function() {
                               window.open("https://horizonapps.ebp.com/Try/?code=10241001FAA", "_blank");
                               ga('send', 'event', {
                                   eventCategory: 'Essai gratuit First page ' + pageName,
                                   eventAction: 'click',
                                   eventLabel: 'https://horizonapps.ebp.com/Try/?code=10241001FAA'
                               })
                           });
                           $('[data-title="First+"]').on('click', function() {
                               window.open("https://horizonapps.ebp.com/Try/?code=10242001FAC", "_blank");
                               ga('send', 'event', {
                                   eventCategory: 'Essai gratuit First+ page ' + pageName,
                                   eventAction: 'click',
                                   eventLabel: 'https://horizonapps.ebp.com/Try/?code=10242001FAC'
                               })
                           });
                           $('[data-title="Open"]').on('click', function() {
                               window.open("https://horizonapps.ebp.com/Try/?code=10243001FAA", "_blank");
                               ga('send', 'event', {
                                   eventCategory: 'Essai gratuit Open page ' + pageName,
                                   eventAction: 'click',
                                   eventLabel: 'https://horizonapps.ebp.com/Try/?code=10243001FAA'
                               })
                           })
                       } else {
                           $('[data-title="First"]').off('click');
                           $('[data-title="First+"]').off('click');
                           $('[data-title="Open"]').off('click')
                       }
                   });
                   $(window).trigger('resize')
               }
