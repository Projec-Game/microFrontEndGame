import * as appTypes from './app.types';

export const setStateAppReducer = (prop, value) => (dispatch) => {
	dispatch({ type: appTypes.SET_STATE_APP, payload: { prop, value } });
};

export const resetStateAppReducer = () => async (dispatch) => {
	dispatch({ type: appTypes.RESET_STATE_APP });
};