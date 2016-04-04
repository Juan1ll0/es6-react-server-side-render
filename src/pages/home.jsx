import React from 'react';

import Header from '../components/header';
import Main from '../components/main';
import Store from '../stores/globalStore';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: parseInt(this.props.counter)
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter () {
    this.setState({ counter: this.state.counter += 1 });
    // TODO Use Store
  }

  componentWillMount() {
    // Render in Client
    if (process.browser) {
      this.setState(Store.getState());

    // Render in Server
    } else {
      Store.setInitialState(this.state);
      Store.setInitialProps(this.props);
    }

  }
  render () {
    return (
      <div>
        <Header name={this.props.name} />
        <Main counter={this.state.counter} onClickCallback={this.incrementCounter}/>
      </div>
    )
  }
}
