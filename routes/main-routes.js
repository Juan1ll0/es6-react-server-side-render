// Dependencies
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Components
import Header from '../src/components/header';
import Main from '../src/components/main';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  var locals = {
    header: ReactDOMServer.renderToString(<Header name='User' />),
    main: ReactDOMServer.renderToString(<Main counter={0} />),
    componentContext: {name: 'User', counter: 0}
  };
  res.render('home', locals);
});

// Name route
router.get('/:name', (req, res) => {
  var locals = {
    header: ReactDOMServer.renderToString(<Header name={req.params.name} />),
    main: ReactDOMServer.renderToString(<Main counter={0} />),
    componentContext: { name: req.params.name, counter: 0 }
  };
  res.render('home', locals);
});

// Name + counter route
router.get('/:name/:counter', (req, res) => {
  var locals = {
    header: ReactDOMServer.renderToString(<Header name={req.params.name} />),
    main: ReactDOMServer.renderToString(<Main counter={req.params.counter} />),
    componentContext: { name: req.params.name, counter: req.params.counter }
  };
  res.render('home', locals);
});

export default router;
