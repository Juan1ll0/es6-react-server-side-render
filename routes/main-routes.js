// Dependencies
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Components
import Home from '../src/pages/home';

// Stores
import AppStore from '../src/stores/store';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  var locals = {
    app: ReactDOMServer.renderToString(<Home name='User' counter={0} />),
    componentContext: AppStore.getState()
  };
  res.render('home', locals);
});

// Name route
router.get('/:name', (req, res) => {
  var locals = {
    app: ReactDOMServer.renderToString(<Home name={req.params.name} counter={0} />),
    componentContext: AppStore.getState()
  };
  res.render('home', locals);
});

// Name + counter route
router.get('/:name/:counter', (req, res) => {
  var locals = {
    app: ReactDOMServer.renderToString(<Home name={req.params.name} counter={req.params.counter} />),
    componentContext: AppStore.getState()
  };
  res.render('home', locals);
});

export default router;
