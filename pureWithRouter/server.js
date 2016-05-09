// Dependencies
import express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext, browserHistory } from 'react-router';

// Routes
import routes from './router/routes';

// Components
import App from './src/app';
import Home from './src/components/home';
import Users from './src/components/users';

// consts
const app = express(),
			faviconURL = __dirname + '/public/img/favicon.ico';

// Setup App
app.use(express.static(__dirname + '/public'));
app.use(favicon(faviconURL));

// Start App
app.use((req, res, next) => {

	// Create Router
  match({ routes, location: req.url, history: browserHistory }, (error, redirect, renderProps) => {
      if (error)
        res.status(500).send(error.message);
      else {
        let html = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
        res.end('<!DOCTYPE html>' + html);
      }
  });
});

// Start server
app.listen(3000, () => {
  console.log('React ES6 Server Side Render app listening at http://localhost:3000');
});
