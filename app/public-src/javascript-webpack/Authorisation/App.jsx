import React from 'react';
import {PageHeader } from 'react-bootstrap';
import  TabBar from  '../components/TabBar';
import i18n from '../lib/i18n';

class  App extends React.Component {
	render () {
		return (
			<div className='container'>
				<PageHeader className='row d-flex justify-content-center'>
					{i18n.__('login_page.welcome.header')}
				</PageHeader>
				<TabBar links={[
					{
						link : '/',
						title : 'Login'
					},
					{
						link : '/register',
						title : 'Register'
					}
				]}/>
			</div>
		);
	}

}


export default App;