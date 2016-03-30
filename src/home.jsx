import React from 'react';

import Header from './components/header.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton () {
    console.log('You Click the BUTTON. Congratulations !!!');
  }

  render () {
    return (<html>
        <head>
          <title>My first ES6 isomorphic App.</title>
        </head>
        <body>
          <Header name={this.props.name} />
          <main>
            <button onClick={this.onClickButton}>Click ME!!!</button>
          </main>
          <script src='./js/app.js'></script>
        </body>
      </html>
    );
  }
};
