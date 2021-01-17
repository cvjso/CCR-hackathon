import React, { Component } from 'react';
import ReactModal from 'react-modal';
import imgCourse from '../../images/logoCurso.png';
import './styles.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: this.props.modal,
			toggleVideo: true
		};
		this.closeModal = this.closeModal.bind(this);
		this.changeVideo = this.changeVideo.bind(this);
	}

	changeVideo() {
		this.setState({ toggleVideo: false });
	}

	closeModal() {
		this.setState({ modal: false });
		cookies.remove('modal');
	}

	componentDidUpdate() {
		this.setState({ modal: this.props.modal });
	}

	render() {
		return (
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
							Curso voltado para qualificação em ferramentas essenciais não só no contexto da pandemia,
							como para experiência profissional.
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
							src="https://www.youtube.com/embed/cimiVGZqHZ8"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
						<button id="popup-button">ASSISTIR</button>
					</div>
				</ReactModal>
			</div>
		);
	}
}

export default Popup;
