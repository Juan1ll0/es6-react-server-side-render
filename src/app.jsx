import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';

import AppActions from './actions/actions';
import AppStore from './stores/store';

// Load server state in AppStore.
AppActions.initApp();
const props = AppStore.getProps();

// Create Object
const AppInstance = <Home name={props.name} counter={props.counter} />

// Render App
ReactDOM.render(AppInstance, document.getElementById('react-root'));
