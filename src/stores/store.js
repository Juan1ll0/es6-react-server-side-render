'use strict';

import { dispatch, register } from '../dispatchers/dispatchers';
import { EventEmitter } from 'events';
import AppConstants from '../constants/constants';

// DEBUG ONLY
import util from 'util';

const CHANGE_EVENT = 'change';

// Application State
var _store = {
    state: {
      name: 'User',
      counter: 0
    },
    props: {}
};

// EventEmitter
var _events = new EventEmitter();

var _setState = (state) => {
    Object.assign(_store, state);
    _events.emit(CHANGE_EVENT);
    return Object.assign({}, _store);
};

var _getState = () => Object.assign({}, _store);

const AppStore = {
    addChangeListener( callback ) {
        _events.addListener( CHANGE_EVENT, callback);
    },

    removeChangeListener( callback ) {
        _events.removeListener( CHANGE_EVENT, callback );
    },

    loadInitialState(state, props) {
      // Load state from server.
      if (process.browser) {
          let auxState = window.__APP_INITIAL_STATE__;
          return _setState(auxState);
      } else {
          return _setState({state: state, props: props});
      }
    },

    // setInitialState(state) {
    //   if (!process.browser)
    //     _setState({state: state});
    // },
    //
    // setInitialProps(props) {
    //   if (!process.browser)
    //     _setState({props: props});
    // },

    getState() {
        return _getState().state;
    },

    getProps() {
        return _getState().props;
    },

    incCounter() {
      _setState({counter: _store.state.counter += 1});

      return _getState().counter;
    },

    dispatcherIndex: register((action) => {
        switch (action.actionType) {
            case AppConstants.STARTUP:
                AppStore.loadInitialState();
                break;
            case AppConstants.INC_COUNTER:
                AppStore.incCounter();
                break;
            case AppConstants.GET_COUNTER:
                AppStore.getState();
                break;
        }
    })
};

export default AppStore;
