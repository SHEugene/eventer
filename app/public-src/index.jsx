import 'babel-polyfill'
import React from 'react';
import render from 'react-dom';
import { Provider } from 'react-redux'
import  {Router,IndexRedirect} from 'react-router';
import routes from './routes'
render(
	<div>Hello</div>,
	document.getElementById('app')
);