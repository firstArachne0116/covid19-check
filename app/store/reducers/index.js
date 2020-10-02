import {combineReducers} from 'redux';

const createReducer = (asyncReducers) =>
  combineReducers({
    ...asyncReducers,
  });

export default createReducer;
