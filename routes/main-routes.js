// Import node module
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from '../src/Home';

const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  // res.send(ReactDOMServer.renderToStaticMarkup(<Home name='Juan' />));
  let html = ReactDOMServer.renderToString(<Home name='Juan' />);
  res.end('<!DOCTYPE html>' + html);
});
// Exporting an object as the default import for this module
export default router;
