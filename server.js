// // Dependencies
//
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import express from 'express';
//
// // Initialization
// var Home = React.createFactory(require('../frontend/Home.js')),
//     app = express(),
//     DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;
//
// // Set public path
// app.use(express.static(__dirname + '/public'));
//
// // Root route.
// app.get('/', function(req, res){
//   res.setHeader('Content-Type', 'text/html')
//
//     // `props` represents the data to be passed in to the React component for
//     // rendering - just as you would pass data, or expose variables in
//     // templates such as Jade or Handlebars.  We just use some dummy data
//     // here (with some potentially dangerous values for testing), but you could
//     // imagine this would be objects typically fetched async from a DB,
//     // filesystem or API, depending on the logged-in user, etc.
//     var props = {
//       items: [
//         'Item 0',
//         'Item 1',
//         'Item </script>',
//         'Item <!--inject!-->',
//       ]
//     }
//
//     // Here we're using React to render the outer body, so we just use the
//     // simpler renderToStaticMarkup function, but you could use any templating
//     // language (or just a string) for the outer page template
//     var html = ReactDOMServer.renderToStaticMarkup(body(null,
//
//       // The actual server-side rendering of our component occurs here, and we
//       // pass our data in as `props`. This div is the same one that the client
//       // will "render" into on the browser from browser.js
//       div({id: 'content', dangerouslySetInnerHTML: {__html:
//         ReactDOMServer.renderToString(Home(props))
//       }}),
//
//       // The props should match on the client and server, so we stringify them
//       // on the page to be available for access by the code run in browser.js
//       // You could use any var name here as long as it's unique
//       script({dangerouslySetInnerHTML: {__html:
//         'var APP_PROPS = ' + safeStringify(props) + ';'
//       }}),
//
//       // We'll load React from a CDN - you don't have to do this,
//       // you can bundle it up or serve it locally if you like
//       script({src: '//fb.me/react-0.14.7.min.js'}),
//       script({src: '//fb.me/react-dom-0.14.7.min.js'}),
//
//       // Then the browser will fetch and run the browserified bundle consisting
//       // of browser.js and all its dependencies.
//       // We serve this from the endpoint a few lines down.
//       script({src: '/bundle.js'})
//     ))
//
//     // Return the page to the browser
//     res.end(html)
//   // res.send(ReactDOMServer.renderToString(Home));
// });
//
// // Start server
// app.listen(3000, function() {
//   console.log('App React Server Side Render is online at port 3000!!');
// });
//
// // A utility function to safely escape JSON for embedding in a <script> tag
// function safeStringify(obj) {
//   return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
// }



// Importing node modules
import express from 'express';
// Importing source files
import routes from './routes/main-routes';
// consts
const app = express();

app.use('/', routes);
// // Set public path
app.use(express.static(__dirname + '/public'));

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`React ES6 Server Side Render app listening at http://localhost:${port}`);
});
