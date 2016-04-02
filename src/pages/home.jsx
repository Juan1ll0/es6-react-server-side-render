import React from 'react';

import Header from '../components/header.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      name: props.name,
      counter: 0
    };
  }

  onClickButton () {
    this.setState({ counter: this.state.counter += 1 });
  }

  render () {
    return (
      <html>
        <head>
          <title>Example of isomorphic App in ES6.</title>
        </head>
        <body>
          <Header name={this.props.name} />
          <main>
            <button onClick={this.onClickButton}>Click ME!!!</button>
            <span> {this.state.counter} Clicks</span>
            <p><noscript><strong>You don't have Javascript enabled in your browser</strong></noscript></p>
          </main>
          {
            React.DOM.script({dangerouslySetInnerHTML: {
                                __html: 'var APP_PROPS = ' + JSON.stringify(this.state) + ';'
                            }})
          }
          <script src='./js/app.js'></script>
        </body>
      </html>
    );
  }
};
