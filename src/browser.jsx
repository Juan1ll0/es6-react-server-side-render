import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';

// This is our React component, shared by server and browser thanks to webpack
var htmlComponent = <Home name='Juan' />;

// This script will run in the browser and will render our component.
ReactDOM.render(htmlComponent, document);
