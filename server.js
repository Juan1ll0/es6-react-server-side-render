// Dependencies
import express from 'express';
import path from 'path';

// Routes
import routes from './routes/main-routes';

// consts
const app = express();

// Set view engine to jade
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { pretty: true })
app.set('view engine','jade');

// Middlewares
app.use(express.static(path.join(__dirname + '/public')));
app.use('/', routes);

// Start server
const server = app.listen(3000, () => {
	// Extract port
  const {port} = server.address();

  // string interpolation:
  console.log(`React ES6 Server Side Render app listening at http://localhost:${port}`);
});
