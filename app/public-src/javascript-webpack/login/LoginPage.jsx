import React from 'react';
import {connect} from 'react-redux';

class LoginPage extends  React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div className='red' >
				Hello
			</div>
		);
	}
}

export  default connect(
	(state) => {
		return {
			q: state
		};
	}
)(LoginPage);