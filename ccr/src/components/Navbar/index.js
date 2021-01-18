import React, { Component } from 'react';
import './styles.css';
import LookIcon from '../../images/discover.png';
import HomeIcon from '../../images/home.png';
import CertifIcon from '../../images/polls.png';
import UserIcon from '../../images/user.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<div className="navbar-main">
				<div className="navbar-content">
					<div>
						<Link to="/search">
							<img className="nav-icon" src={LookIcon} alt="logo" />
						</Link>
					</div>
					<div>
						<Link to="/home">
							<img className="nav-icon" src={HomeIcon} alt="logo" />
						</Link>
					</div>
					<div>
						<Link to="/certificatepage">
							<img className="nav-icon" src={CertifIcon} alt="logo" />
						</Link>
					</div>
					<div>
						<Link to="/perfil">
							<img className="nav-icon" src={UserIcon} alt="logo" />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
