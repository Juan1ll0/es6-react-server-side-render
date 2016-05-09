// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import routes from './router/routes';

let previousState = {};

if (typeof(window)) {
  previousState = window.APP_PROPS;
}

// This script will run in the browser and will render our component.
ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document);
