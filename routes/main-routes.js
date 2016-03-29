// Import node module
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from '../src/Home';

const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  // res.send(ReactDOMServer.renderToStaticMarkup(<Home name='Juan' />));

  res.end(ReactDOMServer.renderToStaticMarkup(<Home name='Juan' />));
});
// Exporting an object as the default import for this module
export default router;
