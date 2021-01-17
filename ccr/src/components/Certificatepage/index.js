import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import certificate1 from '../../images/Rectangle 35.png';
import certificate2 from '../../images/Rectangle 36.png';
import Navbar from '../Navbar';
import Panel from '../Panel';
import './styles.css';
export class Certificatepage extends Component {
	render() {
		return (
			<div className="main-certicatepage">
				<Panel />
				<img src={certificate1} id="certificatepage-certificate1" />
				<div>
					<text className="text1-certificatepage"> Certificado do curso "Como Criar seu Currículo"</text>
				</div>
				<div>
					<img src={certificate2} id="certificatepage-certificate2" />
				</div>
				<div>
					<text className=" text2-certificatepage">
						Certificado do curso " Como Portar-se Em Uma Entrevista de Emprego"
					</text>
				</div>
				<Navbar />
			</div>
		);
	}
}
