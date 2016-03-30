import React from 'react';

import Header from '../components/header.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      counter: 0
    };
  }

  onClickButton () {
    this.setState({ counter: this.state.counter += 1 });
  }

  render () {
    return (<html>
        <head>
          <title>Example of isomorphic App in ES6.</title>
        </head>
        <body>
          <Header name={this.props.name} />
          <main>
            <button onClick={this.onClickButton}>Click ME!!!</button>
            <span> {this.state.counter} Clicks</span>
          </main>
          <script src='./js/app.js'></script>
        </body>
      </html>
    );
  }
};