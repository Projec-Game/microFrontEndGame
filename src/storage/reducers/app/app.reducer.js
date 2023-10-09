import * as appTypes from './app.types';

const INITIAL_STATE = {
	windowSize: {
		innerWidth: 0
	},
	isViewNavBar: true
};

/** 
* This reducer is intended to store information that needs to be shared at the application level.

* @param windowSize Contains the values of the window size.
* @param windowSize.innerWidth Contains the inner width of the window in pixels. This includes the width of the vertical scrollbar (if present).
* @param {[boolean]} isViewNavBar will have the control of displaying the navBar
*/

const AppReducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {

		case appTypes.SET_STATE_APP:
			return {
				...state,
				[action.payload.prop]: action.payload.value
			};

		case appTypes.RESET_STATE_APP:
			return {
				...state,
				INITIAL_STATE
			};

		default:
			return state;
	}

};

export default AppReducer;