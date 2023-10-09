import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import rootReducer from './root-reducer.store';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;