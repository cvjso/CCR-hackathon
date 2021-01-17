import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Frame 1.png';
import './styles.css';
export class Home extends Component {
	render() {
		return (
			<div className="main-home">
				<img src={logo} id="logo" />
				<div>
					<h1 className="main-text"> A chance que você nunca teve, está bem aqui!</h1>
				</div>
				<text className="second-text"> um mundo de possibilidades na palma da sua mão!</text>
				<div>
					<Link to="/acess">
						<button className="button">Começar</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Home;
