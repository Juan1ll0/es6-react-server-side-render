import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      counter: parseInt(props.counter)
    };
  }

  onClickButton () {
    this.setState({ counter: this.state.counter += 1 });
  }

  render () {
    return (
      <section>
        <button onClick={this.onClickButton}>Click ME!!!</button>
        <span> {this.state.counter} Clicks</span>
      </section>
    );
  }
};
