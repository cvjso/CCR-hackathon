import React, { Component } from 'react';
import logoPanel from '../../images/Frame 1.png';
import './styles.css';

export default class Panel extends Component {
	render() {
		return (
			<div className="panel">
				<img src={logoPanel} id="panel-img" />
			</div>
		);
	}
}
