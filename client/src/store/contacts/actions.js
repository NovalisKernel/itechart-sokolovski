import axios from 'axios';
import {
  CHANGE_SEARCH_STRING,
  EDIT_CONTACT,
  // GET_CONTACT_FAILURE,
  // GET_CONTACT_REQUEST,
  // GET_CONTACT_SUCCESS,
  GET_PART_CONTACT_FAILURE,
  GET_PART_CONTACT_REQUEST,
  GET_PART_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  CHANGE_CONTACT_FAILURE,
  CHANGE_CONTACT_REQUEST,
  CHANGE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  CREATE_MODEL_OPENED,
  EDIT_MODEL_OPENED,
  SORT_CONTACT,
  OPEN_DELETE_MODAL,
  CONTACTS_COUNT,
} from 'store/actionTypes';
import history from '../history';

export function changeSearchString(value) {
  return {
    type: CHANGE_SEARCH_STRING,
    payload: value,
  };
}
export function sortContacts(value) {
  return {
    type: SORT_CONTACT,
    payload: value,
  };
}
export function openDeleteModal(value) {
  return {
    type: OPEN_DELETE_MODAL,
    payload: value,
  };
}
export function editContact(value) {
  return {
    type: EDIT_CONTACT,
    payload: value,
  };
}

export function createModalOpened(value) {
  return {
    type: CREATE_MODEL_OPENED,
    payload: value,
  };
}
export function editModalOpened(value) {
  return {
    type: EDIT_MODEL_OPENED,
    payload: value,
  };
}

// export function getContactRequest() {
//   return {
//     type: GET_CONTACT_REQUEST,
//   };
// }
// export function getContactSuccess(contacts) {
//   return {
//     type: GET_CONTACT_SUCCESS,
//     payload: contacts,
//   };
// }
// export function getContactFailure(error) {
//   return {
//     type: GET_CONTACT_FAILURE,
//     payload: error,
//   };
// }

export function getPartContactRequest() {
  return {
    type: GET_PART_CONTACT_REQUEST,
  };
}
export function getPartContactSuccess(contacts) {
  return {
    type: GET_PART_CONTACT_SUCCESS,
    payload: contacts,
  };
}
export function getPartContactFailure(error) {
  return {
    type: GET_PART_CONTACT_FAILURE,
    payload: error,
  };
}

export function addContactRequest() {
  return {
    type: ADD_CONTACT_REQUEST,
  };
}
export function addContactSuccess(contacts) {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: contacts,
  };
}
export function addContactFailure(error) {
  return {
    type: ADD_CONTACT_FAILURE,
    payload: error,
  };
}

export function changeContactRequest() {
  return {
    type: CHANGE_CONTACT_REQUEST,
  };
}
export function changeContactSuccess(contacts) {
  return {
    type: CHANGE_CONTACT_SUCCESS,
    payload: contacts,
  };
}
export function changeContactFailure(error) {
  return {
    type: CHANGE_CONTACT_FAILURE,
    payload: error,
  };
}

export function deleteContactRequest() {
  return {
    type: DELETE_CONTACT_REQUEST,
  };
}
export function deleteContactSuccess(contacts) {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: contacts,
  };
}
export function deleteContactFailure(error) {
  return {
    type: DELETE_CONTACT_FAILURE,
    payload: error,
  };
}
export function countOfContacts(count) {
  return {
    type: CONTACTS_COUNT,
    payload: count,
  };
}

// export const getContacts = user => async dispatch => {
//   dispatch(getContactRequest());
//   try {
//     const response = await axios.get('/contacts');
//     dispatch(getContactSuccess(response.data.contacts));
//     dispatch(countOfContacts(response.data.countOfCOntacts));
//   } catch (e) {
//     dispatch(getContactFailure(e.message));
//   }
// };

export const getPartContacts = paginationData => async dispatch => {
  history.push(`/contacts?page=${paginationData.page}`);
  dispatch(getPartContactRequest());
  try {
    const response = await axios.get('/contacts', {
      params: {
        page: paginationData.page,
        count: paginationData.count,
      },
    });

    dispatch(getPartContactSuccess(response.data.contacts));
    dispatch(countOfContacts(response.data.countOfCOntacts));
  } catch (e) {
    dispatch(getPartContactFailure(e.message));
  }
};

export const addContact = newContact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post('/contacts', newContact);
    dispatch(addContactSuccess(response.data));
  } catch (e) {
    dispatch(addContactFailure(e.message));
  }
};

export const changeContact = contact => async dispatch => {
  dispatch(changeContactRequest());
  try {
    const response = await axios.put('/contacts', contact);
    dispatch(changeContactSuccess(response.data));
  } catch (e) {
    dispatch(changeContactFailure(e.message));
  }
};

export const deletedContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    const response = await axios.delete('/contacts', { data: { id: contactId } });
    dispatch(deleteContactSuccess(response.data.allContacts));
    dispatch(countOfContacts(response.data.countOfCOntacts));
  } catch (e) {
    dispatch(deleteContactFailure(e.message));
  }
};
