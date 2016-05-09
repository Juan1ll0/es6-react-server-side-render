'use strict';

import { dispatch, register } from '../dispatchers/dispatchers';
import { EventEmitter } from 'events';
import AppConstants from '../constants/constants';

// DEBUG ONLY
import util from 'util';

const CHANGE_EVENT = 'change';

// Application State
const _store = {
    state: {
      name: 'User',
      counter: 0,
      colors: []
    },
    props: {},
    startup: false,
};

// EventEmitter
const _events = new EventEmitter();

const _setStore = (state) => {
    Object.assign(_store, state);
    _events.emit(CHANGE_EVENT);
};

const _getStore = () => Object.assign({}, _store);

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
        if (! _getStore().startup ) {
          const auxState = window.__APP_INITIAL_STATE__;
          auxState.startup =true;
          _setStore(auxState);
        }
      // Save state.
      } else {
          // Must be in API Controller. Only for demo.
          state.colors = [ 'red', 'green', 'blue' ];

          _setStore({state: state, props: props});
      }
    },

    getState() {
        return _getStore().state;
    },

    getProps() {
        return _getStore().props;
    },

    getStore() {
        return _getStore();
    },

    incCounter() {
      _setStore({counter: _store.state.counter += 1});

      return _getStore().counter;
    },

    dispatcherIndex: register((action) => {
        switch (action.actionType) {
            case AppConstants.STARTUP:
                AppStore.loadInitialState(action.state, action.props);
                break;
            case AppConstants.INC_COUNTER:
                AppStore.incCounter();
                break;
        }
    })
};

export default AppStore;
