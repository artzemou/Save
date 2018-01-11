// hello-world.jsx

import React from 'react';
import ReactDOM from 'react-dom';


//Roots
import Home from '../roots/Home.js'
import About from '../roots/About.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




const Linked=({item})=>{
	return (
			<a  className="menu__link" dangerouslySetInnerHTML={{__html: item.title}}></a>
	)
}

class MenuItem extends React.Component{
	constructor(props){
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
	}

	handleOnClick(){
		this.props.clicked();
	}

	handleOnMouseUp(){
		let index = this.props.index
		this.props.slideFocused(index);

	}

	render(){
		const {active, className, item, clicked, slideFocused} = this.props;
		const cName = !active ? className : `${className} menu__item_active`;
		return (
				<li className={cName} onClick={!!clicked ? this.handleOnClick : null } onMouseUp={!!slideFocused ? this.handleOnMouseUp : null}>
						<ul>
								<li className="menu__link__btn" >
									<Linked item={item} className="Linklink" />
								</li>

						</ul>
				</li>
		)
	}
}

class BurgerBtn extends React.Component{

	render(){
		return(
			 <ul>
					<li className="burger__nav" onClick={this.props.onBurgerClicked}>
						<input id="menu__toggle" type="checkbox" />
						<label className='menu__btn__row' htmlFor="menu__toggle">
								<div className='menu__btn'></div>
						</label>
					</li>
			 </ul>
		)
	}
}


export default class Menu extends React.Component{
 constructor(props){
		super(props);
		this.state = {
			focused: -1,
			opened: false
		}
	 this.onBurgerClicked = this.onBurgerClicked.bind(this);
	}
	onBurgerClicked() {
		this.state.opened ? this.setState({opened: false}) : this.setState({opened: true})
	}
	handleFocused(i){
		if( i === this.state.focused){
			this.setState({focused: -1});
		}
		else this.setState({focused: i});
	}
	componentDidMount() {
			document.addEventListener('click', this.handleClickOutside.bind(this), true);
	}
	componentWillUnmount() {
			document.removeEventListener('click', this.handleClickOutside.bind(this), true);
	}
	handleClickOutside(event) {
			const domNode = ReactDOM.findDOMNode(this);
			if (!domNode || !domNode.contains(event.target)) {
				 this.setState({focused: -1})
			}
	}
	render(){
    const MenuItems = this.props.MenuItems
		const items = this.props.MenuItems;
		const {focused} = this.state;

		return(
			<nav className="menu">
				<BurgerBtn onBurgerClicked={this.onBurgerClicked}/>
					<ul className={this.state.opened === true ? "menu__row opened" : "menu__row"}>
						{items.map((item, index)=>(<MenuItem item={item} key={item.title} className={"menu__item"} active={index===focused} clicked={() => this.handleFocused.bind(this, index)}/>)
						)}
					</ul>
				<DropdownItems items={MenuItems} active={focused} />
			</nav>)
	}
}

/*dropdown*/
class MenuDropdown extends React.Component{

	render(){
		const {items} = this.props;

		return(
			<ul className="menu__dropdown">
				{items.map((item, index) =>
									 (<MenuItem key={index} className={"menu__item"} item={item} index={index} slideFocused={this.props.slideFocused}/>))
				}
			</ul>)
	}
}

class DropdownItem extends React.Component{

 render(){
		const {active, item, slideActive} = this.props;
		const cName = !active ? '' : `diap__item_active`;

		return (
			<ul>
				<li className={cName}>
					<ul>
						<li className="grid">
							<ul className="one-quarter">
								<li>
									{!!item.dropdown && (<MenuDropdown items={item.dropdown} slideFocused={this.props.slideFocused} />)}
								</li>
							</ul>
							<ul>
							 <li className="diap__container">
								 <ul className="diap">
									 {!!item.dropdown && (<DropdownDiapItems items={item.dropdown} slideActive={slideActive}/>)}

								 </ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

		)
	}
}


class DropdownItems extends React.Component{
 constructor(props){
		super(props);
		this.state = {
				focused: -1,
				slideFocused: 0
			}
		this.slideFocused = this.slideFocused.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			focused: newProps.active,
			slideFocused: 0
		})

	}

	slideFocused(i){
		this.setState({slideFocused: i});
	}

	render(){
		const {items} = this.props;
		const {focused} = this.state;
		const {slideFocused} = this.state;
		return(
			<nav>
				<ul>
					{items.map((item, index)=>(<DropdownItem item={item} key={item.title} active={index===focused} slideFocused={this.slideFocused} slideActive={index=slideFocused} />)
					)}
				</ul>
			</nav>)
	}
}





class DropdownDiapItems extends React.Component{


	render(){
		const {items, slideActive} = this.props;
		return(
			<li>
				<ul>
					{items.map((item, index) =>
									 (<DropdownDiapItem key={index} itemKey={index} className={"menu__subitem"} item={item} slideActive={slideActive}/>))
					}
				</ul>
			 </li>

			)
	}
}


class DropdownDiapItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			slideActive: 0,
			itemLength: null
		}
		this.setItemLength = this.setItemLength.bind(this);
	}

	setItemLength(i){
		this.setState({itemLength: i});
		console.log('????')
	}

	componentWillReceiveProps(newProps) {
			this.setState({slideActive: newProps.slideActive});
	}
	render(){
		const {item, itemKey} = this.props
		const {slideActive} = this.state
		const grid = item.imgs.length > 6 ? 'grid-6' : `grid`;

		const imgs = item.imgs;
		return(
			<li className={itemKey === slideActive ? `${grid} diap__slide active` : `${grid} diap__slide`}>
			 {imgs.map((img, index) =>
									 (<DropdownDiapImg key={index} img={img}/>))
					}
			 </li>
		)
	}
}


class DropdownDiapImg extends React.Component{

	render(){
		const src = this.props.img.src
		return(
			<ul className="img__wrap">
				<li>
					<span className="imgPath">{src}</span>
				</li>
			</ul>
		)
	}
}
