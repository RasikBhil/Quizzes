import Quiz from './reducers';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createPromise} from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({Quiz});
const persistedReducer = persistReducer(persistConfig, reducers);

const preloadedState = {};
const store = createStore(
  persistedReducer,
  preloadedState,
  applyMiddleware(thunk, reduxPromise),
);

const persistor = persistStore(store);

export {persistor, store};
