# es6-react-server-side-render

A simple example of how to do server-side rendering (ES6) with the
[React](http://facebook.github.io/react/) library so that component code can be
shared between server and browser, as well as getting fast initial page loads
and search-engine-friendly pages.

## Technologies:
  - React
  - Webpack (front & back)
  - Node
  - Express
  - Babel
  - ES6 (front & back)

## Examples:
  ### pureReact
  Small App without any template engine, only React.

  ### pureWithRouter
  Simple App without any template engine, only React and react router.

  Libs used:
  - react-router


  ### withJade
  Easy App with Jade template engine at server.
  Sends app state to client in a global variable.
  > window.__APP_INITIAL_STATE__

  Avalaible routes:
  - / - Uses "User" as default name to render in template.
  - /:name - Name to render in template.
  - /:name/:number -  Name to render in template and number to initialize counter.


  Libs used:
  - Jade


  ### withJadeFlux
  App with Jade as template engine at server and Flux architecture.
  > window.__APP_INITIAL_STATE__

  Libs used:
  - React Router
  - Jade
  - Flux



## References:
  - https://github.com/500tech/nodejs-express-es6
  - https://www.terlici.com/2015/03/18/fast-react-loading-server-rendering.html
  - https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
