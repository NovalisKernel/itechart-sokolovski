import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
import contactsReducer from 'store/contacts/reducer';
import loginReducer from 'store/login/reducer';


const rootReducer = combineReducers({
  router: connectRouter(history),
  contacts: contactsReducer,
  auth: loginReducer
});

export default rootReducer;
