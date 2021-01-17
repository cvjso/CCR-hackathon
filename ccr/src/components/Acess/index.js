import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/ON.png';
import './styles.css';
export class Acess extends Component {
	render() {
		return (
			<div className="main-acess">
				<img src={logo} id="acess-logo" />
				<div>
					<text className="acess-text"> Escolha um acesso:</text>
				</div>
				<button className="acess-button"> Estudante </button>
				<button className="acess-button"> Instrutor</button>
				<button className="acess-button"> Empresas</button>
			</div>
		);
	}
}
export default Acess;
