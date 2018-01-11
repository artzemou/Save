
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Recaptcha from 'react-google-invisible-recaptcha';


class MagnetBtn extends Component {
  constructor(props){
    super(props);


  }


  render(){
    const {data, className, clicked} = this.props
    const {innerText} = {... data}
    return(
        <li
          className={ className }
          onClick={clicked()}

        >
          <span>{innerText}</span>
        </li>
    )
  }
}

class MagnetWindowRappel extends Component {

  constructor(props){
    super(props);

  }

  render(){
    const {className} = this.props
    return(
        <li>
          <ul className={className}>
            <li className="iframeContainer">
                <iframe scrolling="no" src="https://www.ebp.com/groupe/a-propos/callback-horizon"></iframe>
            </li>
          </ul>


        </li>

    )
  }

}

class MagnetWindowContact extends Component {

  constructor(props){
    super(props);

  }

  render(){
    const {className} = this.props
    return(
      <li>
        <ul className={className}>
          <li>
              <ul className="Entreprises">
                <li className="title">Entreprises</li>
                <li className="tel">01 34 94 85 85</li>
              </ul>
              <ul className="Expert-Comptable">
                <li className="title">Expert-Comptable</li>
                <li className="tel">01 34 94 80 55</li>
              </ul>
          </li>
        </ul>


      </li>

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

class FormExpert extends React.Component{
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

      render(){

        const {email, name, firstName, compagny, phone, msg, error, open} = this.state
        const {className} = this.props

          return(
            <li className={className}>
              <ul className="Form">
                <li className="formContact" >
                  <form autoComplete="off">
                    <div className="alert__msg">
                      {error.map((error, index) => (<Error key={index} error={error}/>))}
                    </div>
                    <input ref={(input) => { this.mailtoInput = input }} name="mailto" type="hidden" value="benjamin.frizon@ebp.com"/>
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
            </li>

          )
      }
  }

class FormEntreprise extends React.Component{
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

      render(){

        const {email, name, firstName, compagny, phone, msg, error, open} = this.state
        const {className} = this.props

          return(
            <li className={className}>
              <ul className="Form">

                <li className="formContact" >
                  <form autoComplete="off">
                    <div className="alert__msg">
                      {error.map((error, index) => (<Error key={index} error={error}/>))}
                    </div>
                    <input ref={(input) => { this.mailtoInput = input }} name="mailto" type="hidden" value="benjamin.frizon@ebp.com"/>
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
            </li>

          )
      }
  }



class MagnetModalWindowsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
      data :[
         {
          "title":"Nous joindre par téléphone",
          "windows":[
            {
              "innerText":"Nous contacter",
              "Component": MagnetWindowContact
            },
            {
              "innerText":"Faites-vous rappeler",
              "Component": MagnetWindowRappel
            }

          ]
        },{
         "title":"Envoyez-nous un message",
         "windows":[
           {
             "innerText":"Entreprises",
             "Component": FormEntreprise
           },
           {
             "innerText":"Expert-Comptable",
             "Component": FormExpert
           }

         ]
       }

      ]
    }

  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }
  handleFocused(index) {
    this.setState({
      activeIndex: index


     });

  }
  handleClickOutside(event) {
      const {isOpened} = this.props

      const domNode = ReactDOM.findDOMNode(this);
      if (!domNode || !domNode.contains(event.target)  ) {
        console.log(domNode.className, domNode.className === 'magnetWindow')
      }
  }

  render(){


    const {data} = this.state
    const {windowActive, isOpened} = this.props

    return(

        <li className="MagnetModalWindowsContainer">
          {data.map(({title, windows}, index)=>
            <ul key={index} className={ windowActive === index ? 'magnetWindow active' : 'magnetWindow'} >
             <li>
              <ul className="magnetTitle clearfix">
                <li>
                  {title}
                  <button onClick={isOpened} className="close">
                    <span aria-hidden="true">×</span>
                  </button>
                </li>

              </ul>
              <ul className="magnetBtnGroup">
                  {windows.map((magnetBtn, index)=>
                      <MagnetBtn
                        className={this.state.activeIndex === index ? 'magnetBtn active' : 'magnetBtn'}
                        key={index}
                        data={magnetBtn}
                        clicked={() => this.handleFocused.bind(this, index)}
                        />

                  )}
              </ul>
              <ul>
                 {windows.map(({Component, innerText}, index)=>
                     <Component
                        key={index}
                        className={this.state.activeIndex === index ? 'magnetWindowContent active' : 'magnetWindowContent'}
                        />

                 )}


              </ul>
            </li>
          </ul>

          )}

        </li>
    )
  }
}





class MagnetModal extends Component {
  constructor(props){
    super(props);

  }



  render(){
    const{windowActive, isOpened} = this.props

    return(
      <ul>
        <MagnetModalWindowsContainer windowActive={windowActive} isOpened={isOpened} />
      </ul>
    )
  }
}


export default class BarreMagnetique extends Component {

  constructor(props){
    super(props);
    this.state = {
      windowActive  : null,
      isOpen: false
    }
  }

  isOpened(){
    this.state.isOpen ? this.setState({isOpen: false}) : this.setState({isOpen: true})
  }

  handleFocused(index) {
    this.setState({
      windowActive: index
    });
  }


  render() {
    const data = this.state
    const Btns =[
      {"className": "fa fa-phone"},
      {"className": "fa fa-envelope"},
    ]


    return (
        <div className="magnet_container">
          <ul className="magnet">
                {Btns.map(({className}, index) =>
                  <li key={index}>
                    <ul>
                      <li onClick={this.isOpened.bind(this)} onMouseDown={this.handleFocused.bind(this, index) }>
                        <i className={className}></i>
                      </li>
                    </ul>
                  </li>
                )}

          </ul>
          <div className={this.state.isOpen ? "magnetModal open" : "magnetModal" }>
              <MagnetModal {...data} isOpened={this.isOpened.bind(this)}/>
          </div>
      </div>


    );
  }
}
