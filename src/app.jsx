import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';
import Store from './stores/globalStore';

// Load server state in Store.
Store.loadState();

// Extract props from store
let props = Store.getProps();

// Create Object
let AppInstance = <Home name={props.name} counter={props.counter} />

// Render App
ReactDOM.render(AppInstance, document.getElementById('react-root'));
