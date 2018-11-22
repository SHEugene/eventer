import React from 'react';
import  {Route,IndexRedirect} from 'react-router';
import  Main from './login/Main'


const routes = [
	{
		path:'/login',
		component:Main
	}
];
export default routes;