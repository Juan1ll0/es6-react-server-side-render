// Dependencies
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Componentes
import App from '../src/app';
import Home from '../src/components/home';
import Users from '../src/components/users';
import About from '../src/components/about';

// Routes
const routes = <Route path='/' component={App}>
  <IndexRoute component={Home} />
  <Route path='/users' component={Users} />
  <Route path='/about' component={About} />
</Route>

export default routes;
