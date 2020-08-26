import Quiz from './reducers';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createPromise} from 'redux-promise-middleware';
export const PromiseStatus = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const reduxPromise = createPromise({
  promiseTypeSuffixes: [
    PromiseStatus.START,
    PromiseStatus.SUCCESS,
    PromiseStatus.ERROR,
  ],
});

const reducers = combineReducers({Quiz});
const preloadedState = {};
const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(thunk, reduxPromise),
);

export default store;
