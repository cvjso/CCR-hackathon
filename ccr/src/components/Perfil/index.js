import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Photoperfil from '../../images/perfil.png';
import Navbar from '../Navbar';
import Panel from '../Panel';
import './styles.css';
export class Perfil extends Component {
	render() {
		return (
			<div className="main-perfil">
				<Panel />
				<img src={Photoperfil} id="perfil" />
				<Navbar />
			</div>
		);
	}
}
export default Perfil;
