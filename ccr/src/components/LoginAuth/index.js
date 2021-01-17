import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../images/ON.png';
import './styles.css';
export class LoginAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
		this.Auth = this.Auth.bind(this);
	}

	Auth() {
		this.setState({ redirect: true });
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={{ pathname: '/home' }} />;
		}
		return (
			<div className="main-loginauth">
				<img src={logo} id="loginauth-logo" />
				<div>
					<text className="firsttext-loginauth"> Usuário</text>
					<div>
						<input type="text" className="firstbar" />
					</div>
				</div>
				<div>
					<text className="secondtext-loginauth"> Senha</text>
					<div>
						<input type="password" className="secondbar" />
					</div>
				</div>
				<button onClick={this.Auth} className="button-loginauth">
					Login
				</button>
			</div>
		);
	}
}

export default LoginAuth;
