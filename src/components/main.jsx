import React from 'react';

import AppActions from '../actions/actions';

export default class Main extends React.Component {
  incCounter() {
    AppActions.incCounter();
  }

  render () {
    return (
      <section>
        <button onClick={this.incCounter.bind(this)}>Click ME!!!</button>
        <span> {this.props.counter} Clicks</span>
      </section>
    );
  }
};
