import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsReducer from 'store/contacts/reducer';
import loginReducer from 'store/auth/reducer';
import history from './history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  contacts: contactsReducer,
  auth: loginReducer,
});

export default rootReducer;
