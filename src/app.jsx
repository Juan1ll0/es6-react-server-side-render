import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Main from './components/main';

let previousState = window.__APP_INITIAL_STATE__;

// This is our React component, shared by server and browser thanks to webpack
var headerComponent = <Header name={previousState.name} />;
var mainComponent = <Main counter={previousState.counter} />;

// This script will run in the browser and will render our component.
ReactDOM.render(headerComponent, document.getElementById('react-header'));
ReactDOM.render(mainComponent, document.getElementById('react-main'));
