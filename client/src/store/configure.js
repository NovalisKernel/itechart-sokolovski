import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
import rootReducer from './reducer';
import { getFromLocalStorage } from 'utils/tokenUtils';
import thunk from 'redux-thunk';



const getInitialState = () => {
  const token = getFromLocalStorage();
  if (token) {
    return {
      auth: {
        isRequesting: false,
        isAuth: true,
        user: {},
        error: ''
      },
    }
  }
  return {
    auth: {
      isRequesting: false,
      isAuth: false,
      user: {},
      error: ''
    },
  };
};


const initialState = getInitialState();




const middleWare = [logger, routerMiddleware(history)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  // composeEnhancers(applyMiddleware(...middleWare))
  composeEnhancers(applyMiddleware(thunk))

);
// sagaMiddleware.run(rootSaga);
export default store;
