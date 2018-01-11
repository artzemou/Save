// hello-world.jsx

import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
//import addRecaptchaApi from '../addRecapchaApi.js';

import $ from 'jquery';

window.jQuery = window.$ = $;

//addRecaptchaApi()

class ListContact extends React.Component{
      constructor() {
        super();

        this.state = {
          open:false,

          email: '',
          name: '',
          firstName: '',
          compagny: '',
          phone:'',
          msg:'',

          error: []

        };

        this.baseState = this.state
        this.toggle = this.toggle.bind(this);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeCompagny = this.handleChangeCompagny.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSetMailto = this.handleSetMailto.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
      }

      handleSetMailto(event) {
        console.log('VVVV')
        //this.setState({mailto: event.target.value});
      }
      handleChangeName(event) {
        this.setState({name: event.target.value});
      }
      handleChangeFirstName(event) {
        this.setState({firstName: event.target.value});
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangeCompagny(event) {
        this.setState({compagny: event.target.value});
      }
      handleChangePhone(event) {
        this.setState({phone: event.target.value});
      }
      handleChangeMsg(event) {
        this.setState({msg: event.target.value});
      }


      handleSubmit(e) {
        e.preventDefault()
        const {email, name, firstName, compagny, phone, msg, error} = this.state
        this.setState({error : []}, () => {
          let errors = []
          console.log(error)
          // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //  console.log(re.test(value))
          if (firstName === '') errors.push('Prénom obligatoire')
          if (name === '') errors.push('Nom obligatoire')
          if (compagny === '') errors.push('Nom de société obligatoire')
          if (phone === '') errors.push('Numéro de téléphone obligatoire')
          if (email === '') errors.push('Email obligatoire')
          else if (!re.test(email)) errors.push('Email invalide')
          if (msg === '') errors.push('Merci de préciser votre message')
          this.setState({error: errors}, () =>{
            //console.log(error.length, this.state.error, error === [])
            if(this.state.error.length === 0){
              this.recaptcha.reset();
              this.recaptcha.execute();
            }
          })
        })

      }

      onResolved() {
        alert( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
        const self = this;
        const greCaptchaResponse = this.recaptcha.getResponse()
        fetch( process.env.PUBLIC_URL + '/webServices/fetchMail.php',{
          method: 'POST',
          mode:'no-core',
          body: JSON.stringify({
             email: self.state.email,
             name: self.state.name,
             firstName: self.state.firstName,
             compagny: self.state.compagny,
             msg: self.state.msg,
             phone: self.state.phone,
             mailto: self.mailtoInput.value,
             subject: self.subjectInput.value,
             greCaptchaResponse: greCaptchaResponse

          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(function(response){
          //console.log(response.ok)
          self.setState({error: ["Votre message a bien été envoyé"]})
          //return response.json()
        }).then(function(body){

        });

      }

      toggle(){
        this.state.open ? this.setState({open: false}) : this.setState({open: true})

      }
      render(){
        const {data} = this.props
        const {title, tel, text, mailto} = {...data}
        const {email, name, firstName, compagny, phone, msg, error, open} = this.state

          return(
            <div className={open ? "Form open" : "Form "}>
              <ul className={title}>
                <li className="title">{title}</li>
                <li className="tel">{tel}</li>
                <li className="mailto" dangerouslySetInnerHTML={{__html: text}} onClick={this.toggle}></li>
                <li className="formContact" >
                  <form autoComplete="off">
                    <div className="alert__msg">
                      {error.map((error, index) => (<Error key={index} error={error}/>))}
                    </div>
                    <input ref={(input) => { this.mailtoInput = input }} name="mailto" type="hidden" value={mailto}/>
                    <input ref={(input) => { this.subjectInput = input }} name="subject" type="hidden" value="Demande d'information"/>

                    <input name="firstName" placeholder="Votre pr&eacute;nom" onChange={this.handleChangeFirstName}/>
                    <input name="name"  placeholder="Votre nom" onChange={this.handleChangeName}/>
                    <input name="compagny" placeholder="Votre soci&eacute;t&eacute;" onChange={this.handleChangeCompagny}/>
                    <input name="phone"  placeholder="Votre num&eacute;ro de t&eacute;l&eacute;phone" onChange={this.handleChangePhone}/>
                    <input name="email"  placeholder="Votre email" onChange={this.handleChangeEmail}/>
                    <textarea name="msg" placeholder="Votre message" onChange={this.handleChangeMsg}></textarea>
                    <Recaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6Lf6dSMUAAAAAAgumM39MretD5sJh1Tw_ntC07_L"
                        onResolved={ this.onResolved }
                    />
                    <input onClick={this.handleSubmit} type="submit" value="Envoyer"/>
                  </form>
                </li>
              </ul>
            </div>

          )
      }
  }


  class Error extends Component {
    render() {
      const {error} = this.props
      return(
        <div className="error">{error}</div>
      )
    }
  }





    class Btn extends React.Component{

      constructor(props) {
        super(props);
        this.state = {
          open: false

        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.state.open ? this.setState({open: false }) : this.setState({open: true })
        this.state.open ? this._reactInternalInstance._currentElement._owner._instance.setState({display: false}) : this._reactInternalInstance._currentElement._owner._instance.setState({display: true})
      }

      render(){


          return(
            <div className="open_form" onClick={this.handleClick}>
                {this.props.data.content}
            </div>

          )

      }
    }


   class Legend extends React.Component{
     render(){

         return(
           <legend>
             <div>{this.props.data.content}</div>
           </legend>

         )

     }
   }


   class Select extends React.Component {
        constructor(props) {
          super(props);
          this.setWrapperRef = this.setWrapperRef.bind(this);
          this.state = {
            value: '0',
            open: false

          };
          this.handleChange = this.handleChange.bind(this);
          this.toggleOptions = this.toggleOptions.bind(this);
          this.handleClickOutside = this.handleClickOutside.bind(this);


        }

        componentDidMount() {

            document.addEventListener('mousedown', this.handleClickOutside);
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }

        /**
         * Set the wrapper ref
         */
        setWrapperRef(node) {
            this.wrapperRef = node;
        }

        /**
         * Alert if clicked on outside of element
         */
        handleClickOutside(e) {
            if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
                if (this.state.open) this.setState({open: false})
            }
        }

        handleChange(e) {
          this.setState({value: e.target.value});
          console.log(this.state.value)
        }
        toggleOptions(){
          this.state.open ? this.setState({open: false}) : this.setState({open: true})

        }

        render(){
           const options = this.props.data.options.map((data, index) =>
                 <Options key={index} data={data}/>
           );
           const optionsList = this.props.data.options.map((data, index) =>
                 <OptionsList index={index} key={index} data={data}/>
           );

           return(
             <div className="select">
               <select name={this.props.data.name} value={this.state.value} onChange={this.handleChange}> {options} </select>
               <ul className="optionsGroup" ref={this.setWrapperRef}>
                  <li>
                    <ul>
                      <li className="optionSelected"  onMouseDown={this.toggleOptions}> {this.props.data.options[parseInt(this.state.value)].content} </li>
                      <li><i className={this.state.open ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i></li>
                    </ul>
                  </li>
                  <li className={this.state.open ? "options open" : "options "}>
                    <ul>{optionsList}</ul>
                  </li>
               </ul>
             </div>
           )
       }


   }



   class Options extends React.Component {
       render(){
         return(
             <option value={this.props.data.value}>{this.props.data.content}</option>
         )
       }
   }

   class OptionsList extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: '0',
           display: false
         };

         this.handleChange = this.handleChange.bind(this);
         this.isActive = this.isActive.bind(this);
       }

       handleChange(e) {

         this._reactInternalInstance._currentElement._owner._instance.setState({
           value: e.target.value,
           open: false
         });
         this.setState({
           value: e.target.value
         })
         console.log($(e.target).parents('.select').find('select'), e.target.value)
         $(e.target).parents('.select').find('select').val(e.target.value)
         console.log($(e.target).parents('.select').find('select').val())
       }

       isActive(){
         this.props.index === parseInt(this.state.value)  ? this.setState({display: false}): this.setState({display: true})
        }

        render(){

             return(
                 <li className="option" value={this.props.data.value} onMouseDown={this.handleChange}>
                      {this.props.data.content}
                 </li>
             )
        }

   }


  class Form extends React.Component{

      constructor() {
        super();
        this.state = {
          display: false,
          telValue: '',
          displayAlert: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }




      onChange(e){
         this.setState({telValue: e.target.value});
         var re = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{9})$");
         console.log(re.test(this.state.telValue))
         if(re.test(this.state.telValue)){
           this.setState({displayAlert: false});
         }

      }


      handleSubmit(e) {
        e.preventDefault();

        var re = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");
        if(!re.test(this.state.telValue)){
          this.setState({displayAlert: true});

          console.log('::):):)');
          return
        }
        else{
          this.setState({displayAlert: false});
          alert(':) :) :) :) ');
        }

      }
      render(){

        const btn = this.props.data.btn.map((data, index) =>
              <Btn key={index} data={data}/>
        );


        const legend = this.props.data.legends.map((data, index) =>
              <Legend key={index} data={data}/>
        );

        const select = this.props.data.selects.map((data, index) =>
              <Select key={index} data={data}/>
        );

        return(
          <form  onSubmit={this.handleSubmit} className={this.state.display ? "open" : ""}>

            {btn}
            <fieldset>
               {legend}
               {select}
               <div className="wrap_input">
                 <input type="tel" placeholder="Votre num&eacute;ro de t&eacute;l&eacute;phone" onChange={this.onChange}/>
                 <div className={!this.state.displayAlert ? "tooltip" : "tooltip alert"}>Num&eacute;ro invalide</div>
               </div>
               <input type="submit"/>
            </fieldset>
          </form>
        )
      }
    }







    export default class RenderContacts extends React.Component {
          constructor() {
            super();
            this.state = {
              open: false,
              data : []

            };
            this.toggle = this.toggle.bind(this);
            this.loadData = this.loadData.bind(this);
          }
          componentDidMount(){
            this.loadData ()

          }

          loadData ()  {
            let self = this
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
                    self.setState({
                      data: data
                    })

                    return
                 });
               }
             )
             .catch(function(err) {
               console.log('Error', err);
             });
          }
          toggle(e){
            this.state.open ? this.setState({open: false}) : this.setState({open: true})
          }
          render() {
            const {data} = this.state
            console.log(data)


            return (
              <div>
                   <div className="clearfix">

                        {!!data.items ? data.items.map((data, index) =><ListContact key={index} data={data}/>) : null }

                   </div>
                   <div className={this.state.open ? "callBack open" : "callBack"} onClick={this.toggle}>
                       <div className="open_form">Faites-vous rappeler</div>

                       <iframe  scrolling="no"  src="https://www.ebp.com/groupe/a-propos/callback-horizon"></iframe>

                   </div>

              </div>

            );

          }

    }
