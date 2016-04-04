import React from 'react';

export default class Main extends React.Component {
  render () {
    return (
      <section>
        <button onClick={this.props.onClickCallback}>Click ME!!!</button>
        <span> {this.props.counter} Clicks</span>
      </section>
    );
  }
};
