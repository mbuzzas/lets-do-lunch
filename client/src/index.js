import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import App from './App';

import store from './store';

const Router = (
	<Provider store={store}>
		<BrowserRouter>
			<div>
		    	<Route exact path='/' component={Home} />
		    	<Route path='/login' component={LoginForm} />
		    	<Route path='/signup' component={SignupForm} />
		    	<Route path='/app' component={App} />
	    	</div>
		</BrowserRouter>
	</Provider>
)

injectTapEventPlugin();

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
