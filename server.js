// Dependencies
import express from 'express';

// Routes
import routes from './routes/main-routes';

// consts
const app = express();

// Set public path
app.use(express.static(__dirname + '/public'));

// Route /
app.use('/', routes);

// Start server
const server = app.listen(3000, () => {
	// Extract port
  const {port} = server.address();

  // string interpolation:
  console.log(`React ES6 Server Side Render app listening at http://localhost:${port}`);
});
