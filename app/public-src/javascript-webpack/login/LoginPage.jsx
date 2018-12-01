import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl, PageHeader, Button} from 'react-bootstrap';
class LoginPage extends  React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<form className='container'>
				<PageHeader className='row d-flex justify-content-center'>
						Welcome to the Eventer
				</PageHeader>
				<FormGroup className='row'>
					<FormControl className='col-md-6 offset-md-3' type='input' placeholder='Enter your email '/>
				</FormGroup>
				<FormGroup  className='row'>
					<FormControl className='col-md-6 offset-md-3' type='password' placeholder='Enter your password'/>
				</FormGroup>
				<div className='row'>
					<Button className='col-md-2 offset-md-5' type="submit">Log in</Button>
				</div>
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