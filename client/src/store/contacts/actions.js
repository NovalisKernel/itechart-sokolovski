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
  CHANGE_SHOW_CONTACTS,
  CHANGE_MESSAGE,
  FILTER_MODAL_OPENED,
  FILTER_LEVEL_ADD,
  FILTER_LEVEL_REMOVE,
  FILTER_PROMOTER_ADD,
  FILTER_PROMOTER_REMOVE,
  FILTER_DECISION_ADD,
  FILTER_DECISION_REMOVE,
  COPY_FILTER,
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

export function filterLevelAdd(value) {
  return {
    type: FILTER_LEVEL_ADD,
    payload: value,
  };
}
export function filterLevelRemove(value) {
  return {
    type: FILTER_LEVEL_REMOVE,
    payload: value,
  };
}

export function filterPromoterAdd(value) {
  return {
    type: FILTER_PROMOTER_ADD,
    payload: value,
  };
}
export function filterPromoterRemove(value) {
  return {
    type: FILTER_PROMOTER_REMOVE,
    payload: value,
  };
}

export function filterDecisionAdd(value) {
  return {
    type: FILTER_DECISION_ADD,
    payload: value,
  };
}
export function filterDecisionRemove(value) {
  return {
    type: FILTER_DECISION_REMOVE,
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

export function changeShowCounts(count) {
  return {
    type: CHANGE_SHOW_CONTACTS,
    payload: count,
  };
}

export function changeMessage(text) {
  return {
    type: CHANGE_MESSAGE,
    payload: text,
  };
}

export function openFilterModal() {
  return {
    type: FILTER_MODAL_OPENED,
  };
}

export function copyFilter() {
  return {
    type: COPY_FILTER,
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
  dispatch(getPartContactRequest());
  try {
    const response = await axios.get('/contacts', {
      params: {
        page: paginationData.page,
        count: paginationData.count,
        levels: paginationData.filterLevel,
        promoters: paginationData.filterPromoter,
        decisions: paginationData.filterDecision,
      },
    });

    dispatch(getPartContactSuccess(response.data.contacts));
    dispatch(countOfContacts(response.data.countOfCOntacts));

    Math.ceil(response.data.countOfCOntacts / paginationData.count) < paginationData.page
      ? history.push(`/contacts?page=1`)
      : history.push(`/contacts?page=${paginationData.page}`);
  } catch (e) {
    dispatch(getPartContactFailure(e.message));
  }
};

export const addContact = newContact => async (dispatch, getState) => {
  dispatch(addContactRequest());
  try {
    //TODO: gestate() const fnc
    const paginationData = {
      count: getState().contacts.showContactsCount,
      page: getState().router.location.query.page,
    };
    const response = await axios.post('/contacts', { ...newContact, ...paginationData });
    dispatch(addContactSuccess(response.data.contacts));
    dispatch(countOfContacts(response.data.countOfCOntacts));
    dispatch(changeMessage('Контакт добавлен'));
  } catch (e) {
    dispatch(addContactFailure(e.message));
  }
};

export const changeContact = contact => async dispatch => {
  dispatch(changeContactRequest());
  try {
    const response = await axios.put('/contacts', contact);
    dispatch(changeContactSuccess(response.data));
    dispatch(changeMessage('Контакт изменен'));
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
    dispatch(changeMessage('Пользователь удален'));
  } catch (e) {
    dispatch(deleteContactFailure(e.message));
    dispatch(changeMessage('Что-то пошло не так...'));
  }
};
