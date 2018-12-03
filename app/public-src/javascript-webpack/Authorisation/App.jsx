import React from 'react';
import {PageHeader } from 'react-bootstrap';
import  TabBar from  '../components/TabBar';
import i18n from '../lib/i18n';
import  authorisationRoutes from './index';
class  App extends React.Component {
	render () {
		return (
			<div className='container'>
				<PageHeader className='row d-flex justify-content-center'>
					{i18n.__('login_page.welcome.header')}
				</PageHeader>
				<div className='col-md-6 offset-md-3'>
					<TabBar style={{marginBottom:'7px'}} links={[
						{
							link : '/login',
							title : i18n.__('login_page.login.tab')
						},
						{
							link : '/registration',
							title : i18n.__('login_page.registration.tab')
						}
					]}/>
				</div>
				{authorisationRoutes}
			</div>
		);
	}

}


export default App;