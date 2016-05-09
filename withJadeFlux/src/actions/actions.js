'use strict';

import AppConstants from '../constants/constants';
import { dispatch, register } from '../dispatchers/dispatchers';

export default {
    initApp(state, props) {
        dispatch({
            actionType: AppConstants.STARTUP,
            state: state,
            props: props
        });
    },
    incCounter() {
        dispatch({
            actionType: AppConstants.INC_COUNTER
        });
    }
};
