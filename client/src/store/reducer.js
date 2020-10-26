import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
import contactsReducer from 'store/contacts/reducer'

const rootReducer = combineReducers({
  router: connectRouter(history),
  contacts: contactsReducer
});

export default rootReducer;
