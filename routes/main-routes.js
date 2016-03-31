// Dependencies
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Components
import Home from '../src/pages/home';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  let html = ReactDOMServer.renderToString(<Home name='User' />);
  res.end('<!DOCTYPE html>' + html);
});

// Name route
router.get('/:name', (req, res) => {
  let html = ReactDOMServer.renderToString(<Home name={req.params.name} />);
  res.end('<!DOCTYPE html>' + html);
});

export default router;
