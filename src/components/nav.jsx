import React from 'react';
import { Link } from 'react-router';

const nav = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/about">About</Link>
  </nav>

export default nav;
