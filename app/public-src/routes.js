import React from 'react';
import  {Route, IndexRedirect} from 'react-router';
import  Main from './login/Main'


const routes = (
	<div>
		<Route path='/login' component={Main} />
	</div>
);
export default routes;