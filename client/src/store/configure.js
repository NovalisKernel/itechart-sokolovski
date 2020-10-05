import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
import rootReducer from './reducer';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleWare = [logger, routerMiddleware(history), sagaMiddleware];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);
// sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });
export const dispatcher = credentials => store.dispatch(credentials);
export default store;
