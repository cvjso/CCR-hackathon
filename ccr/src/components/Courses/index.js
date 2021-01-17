import React, { Component } from 'react';
import Panel from '../Panel';
import Navbar from '../Navbar';
import logoImg from '../../images/coursePreview.png';
import './styles.css';
import ReactModal from 'react-modal';
import imgCourse from '../../images/logoCurso.png';

export default class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: this.props.modal,
			toggleVideo: true
		};
		this.changeModal = this.changeModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.changeVideo = this.changeVideo.bind(this);
	}

	changeModal() {
		this.setState({ modal: true });
	}

	changeVideo() {
		this.setState({ toggleVideo: false });
	}

	closeModal() {
		this.setState({ modal: false });
	}

	render() {
		return (
			<div>
				<Panel />
				<div className="course-panel">
					<text id="course-header">Seus cursos</text>
					<div id="course-subline" />
				</div>
				<div>
					<div className="course-content" onClick={this.changeModal}>
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Como Utilizar As Ferramentas De Produtividade</text>
							<div>
								<text className="course-tag">Básico</text>
								<text className="course-tag">Obrigatório</text>
							</div>
						</div>
					</div>

					<div className="course-content" onClick={this.changeModal}>
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Como criar um currículo</text>
							<div>
								<text className="course-tag">Básico</text>
								<text className="course-tag">Obrigatório</text>
							</div>
						</div>
					</div>

					<div className="course-content" onClick={this.changeModal}>
						<img src={logoImg} className="course-image" />
						<div className="course-text">
							<text className="course-title">Como Portar-se Em Uma Entrevista De Emprego</text>
							<div>
								<text className="course-tag">Básico</text>
								<text className="course-tag">Obrigatório</text>
							</div>
						</div>
					</div>
				</div>

				{/* Modal abaixo */}

				<div>
					<ReactModal
						isOpen={this.state.modal}
						onRequestClose={this.closeModal}
						style={{
							overlay: { background: '#00295fb7' },
							content: {
								top: '5%',
								bottom: '4%',
								left: '4%',
								right: '4%',
								borderRadius: '20px'
							}
						}}
						id="modal-style"
					>
						<div className="modal-content">
							<button onClick={this.closeModal} id="popup-close">
								X
							</button>
							<h1 id="popup-header">Como Utilizar As Ferramentas De Produtividade</h1>
							<text id="popup-text">
								Curso voltado para qualificação em ferramentas essenciais não só no contexto da
								pandemia, como para experiência profissional.
							</text>
							<text id="popup-tags">Serão abordados: Trello, Google Suite, Evernote, Rescue Time.</text>
							<img
								hidden={!this.state.toggleVideo}
								onClick={this.changeVideo}
								src={imgCourse}
								id="popup-img"
							/>
							<iframe
								id="popup-img"
								hidden={this.state.toggleVideo}
								width="280"
								height="157.5"
								src="https://www.youtube.com/embed/MeRvtzjkhkw"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/>
							<button id="popup-button">ASSISTIR</button>
						</div>
					</ReactModal>
				</div>

				<Navbar />
			</div>
		);
	}
}
