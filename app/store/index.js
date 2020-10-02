import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const initStore = (initialState = {}) => {
  return createStore(createReducer(), initialState, enhancer);
};
export default initStore;
