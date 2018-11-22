import React from 'react';
import render from 'react-dom';
import  {Router,IndexRedirect} from 'react-router';
import routes from './routes'
render(
	<Router routes={routes}></Router>
);