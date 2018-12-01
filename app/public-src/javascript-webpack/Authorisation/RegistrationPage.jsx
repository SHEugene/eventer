import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import  i18n from '../lib/i18n';
class LoginPage extends  React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<form className='container'>
				<FormGroup className='row'>
					<FormControl className='col-md-3 offset-md-3' type='input' placeholder={i18n.__('login_page.enter_name.placeholder')}/>
					<FormControl className='col-md-3 ' type='input' placeholder={i18n.__('login_page.enter_surname.placeholder')}/>
				</FormGroup>
				<FormGroup className='row'>
					<FormControl className='col-md-6 offset-md-3' type='input' placeholder={i18n.__('login_page.enter_email.placeholder')}/>
				</FormGroup>
				<FormGroup  className='row'>
					<FormControl className='col-md-6 offset-md-3' type='password' placeholder={i18n.__('login_page.enter_password.placeholder')}/>
				</FormGroup>
				<FormGroup  className='row'>
					<FormControl className='col-md-6 offset-md-3' type='password' placeholder={i18n.__('login_page.confirm_password.placeholder')}/>
				</FormGroup>
				<div className='row'>
					<Button className='col-md-2 offset-md-5' type="submit">{i18n.__('login_page.login.button')}</Button>
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