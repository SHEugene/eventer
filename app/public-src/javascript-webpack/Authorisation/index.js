import React from 'react';
import  {Route, Switch} from 'react-router';
import  LoginPage from '../Authorisation/LoginPage';
import  RegistrationPage  from '../Authorisation/RegistrationPage';

const authorisationRoutes = (
	<Switch>
		<Route exact path='/login' component={LoginPage} />
		<Route path='/registration/' component={RegistrationPage}   />
	</Switch>
);
export default authorisationRoutes;