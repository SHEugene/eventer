import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import  {Router,Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux'
import routes from './routes';
import store from './reducer';
import { syncHistoryWithStore } from 'react-router-redux';
const history = createBrowserHistory()
ReactDOM.render(
	<Provider store={store}>
		<Router history={history} children={routes}>
		</Router>
	</Provider>,

	document.getElementById('app')
);