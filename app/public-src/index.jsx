import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import  {Router,Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux'
import routes from './routes';
import createEventerStore from './reducer';
const history = createBrowserHistory()
const  store = createEventerStore();
console.log(store);
ReactDOM.render(
	<Provider store={store}>
		<Router history={history} children={routes}>
		</Router>
	</Provider>,
	document.getElementById('app')
);