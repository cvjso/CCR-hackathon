import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/ON.png';
import './styles.css';
export class LoginAuth extends Component {
	render() {
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
				<button className="button-loginauth"> Login</button>
			</div>
		);
	}
}

export default LoginAuth;
