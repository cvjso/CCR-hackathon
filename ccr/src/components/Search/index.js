import React, { Component } from 'react';
import Panel from '../Panel';
import Navbar from '../Navbar';
import logoImg from '../../images/coursePreview.png';
import './styles.css';

export default class Search extends Component {
	render() {
		return (
			<div>
				<Panel />

				<div className="search-content">
					<input type="text" id="search-input" />
					<text id="search-title">Categorias</text>

					<div className="search-tags">
						<button className="tag-button" id="tag-active">
							Todas
						</button>
						<button className="tag-button">Tecnologia</button>
						<button className="tag-button">Línguas</button>
						<button className="tag-button">Comunicação</button>
					</div>

					<div className="course-content">
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Autocad</text>
							<div>
								<text className="course-tag">Intermediário</text>
								<text className="course-tag">Tecnologia</text>
							</div>
						</div>
					</div>

					<div className="course-content">
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Informática</text>
							<div>
								<text className="course-tag">Básico</text>
								<text className="course-tag">Tecnologia</text>
							</div>
						</div>
					</div>

					<div className="course-content">
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Inglês</text>
							<div>
								<text className="course-tag">Básico</text>
								<text className="course-tag">Línguas</text>
							</div>
						</div>
					</div>
				</div>

				<Navbar />
			</div>
		);
	}
}
