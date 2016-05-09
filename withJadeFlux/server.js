// Dependencies
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';

// Routes
import routes from './routes/main-routes';

// consts
const app = express(),
      faviconURL = __dirname + '/public/img/favicon.ico';

// Set view engine to jade
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { pretty: true })
app.set('view engine','jade');

// Favicon
app.use(favicon(faviconURL));

// Middlewares
app.use(express.static(path.join(__dirname + '/public')));
app.use('/', routes);

// Start server
const server = app.listen(3000, () => {
	// Extract port
  const {port} = server.address();

  // String interpolation:
  console.log(`React ES6 Server Side Render app listening at http://localhost:${port}`);
});
