import React from 'react';

// action
import AppActions from '../actions/actions'

// Components
import Header from '../components/header';
import Main from '../components/main';
import ListColors from '../components/list';

// Stores
import AppStore from '../stores/store';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      counter: parseInt(this.props.counter),
      colors: []
    };

    this._onChangeStore = this._onChangeStore.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChangeStore);

    // Load App Initial Store from window or component state
    AppActions.initApp(this.state, this.props);

    this.setState(AppStore.getState());
  }

  componentWillUnmount() {
      AppStore.removeChangeListener(this._onChangeStore);
  }

  _onChangeStore() {
      this.setState(AppStore.getState());
  }

  render () {
    return (
      <div>
        <Header name={this.state.name} />
        <Main counter={this.state.counter} />
        <ListColors colors={this.state.colors} />
      </div>
    )
  }
}
