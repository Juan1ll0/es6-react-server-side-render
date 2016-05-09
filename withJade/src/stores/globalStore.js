import util from 'util';

let store = {state: {}, props: {}};

const GolbalAppStore = {
  // Load state from server.
  loadState(){
    if (process.browser) {
        store = window.__APP_INITIAL_STATE__;
    }
  },

  getState () {
    return store.state;
  },

  getProps () {
    return store.props;
  },

  getStore () {
    return store;
  },

  setInitialState (state) {
    store.state = state;
  },

  setInitialProps (props) {
    store.props = props;
  },
}

export default GolbalAppStore;
