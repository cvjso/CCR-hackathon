import React, { Component } from 'react';
import logo from '../../images/Frame 1.png';
import './styles.css';
export class Home extends Component {
	render() {
		return (
			<div className="main-home">
				<img src={logo} id="logo" />
				<div>
					<h1 className="main-text">Uma plataforma feita por jovens para outros jovens</h1>
				</div>
				<text className="second-text"> um mundo de possibilidades na palma da sua mão!</text>
				<div>
					<button className="button"> Começar</button>
				</div>
			</div>
		);
	}
}
export default Home;
