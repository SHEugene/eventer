import React from 'react';
import  {Route} from 'react-router';
import  App from './Authorisation/App';

const routes = (
	<div>
		<Route path='/login' component={App}  />
	</div>
);
export default routes;