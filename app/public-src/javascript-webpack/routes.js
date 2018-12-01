import React from 'react';
import  {Route} from 'react-router';
import  LoginPage from './login/LoginPage';


const routes = (
	<div>
		<Route path='/login' component={LoginPage} />
	</div>
);
export default routes;