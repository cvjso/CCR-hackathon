import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/ON.png';
import './styles.css';
export class Login extends Component {
	render() {
		return (
			<div className="main-login">
				<img src={logo} id="login-logo" />
				<Link to="/loginauth" id="login-container">
					<button className="login-button"> Login </button>
				</Link>
				<button className="login-button"> Criar uma conta</button>
			</div>
		);
	}
}
export default Login;
