import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
class LoginPage extends  React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<form className='container'>
				<FormGroup className='row'>
					<ControlLabel className='col-lg-5'>Email</ControlLabel>
					<FormControl type='input' placeholder='Enter your email '/>
				</FormGroup>
			</form>
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