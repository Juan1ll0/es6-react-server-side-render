import React from 'react';

import Header from './components/header.jsx';
import Nav from './components/nav.jsx';

export default class Home extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>Example of isomorphic App in ES6.</title>
          <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        </head>
        <body>
          <Header name={this.props.name} />
          <Nav />
          <main>
            {this.props.children}
          </main>
          <script src='/js/app.js' />
        </body>
      </html>
    );
  }
};
