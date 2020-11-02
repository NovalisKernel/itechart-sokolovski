import { CHANGE_SEARCH_STRING, DELETE_CONTACT, EDIT_CONTACT } from 'store/actionTypes'



export function changeSearchString(value) {
    return {
        type: CHANGE_SEARCH_STRING,
        payload: value
    }
}
export function deleteContact(value) {
    return {
        type: DELETE_CONTACT,
        payload: value
    }
}
export function editContact(value) {
    return {
        type: EDIT_CONTACT,
        payload: value
    }
}


export const getContacts = (user) => async dispatch => {
    dispatch(getContactRequest());
    try {
        const response = await axios.get("http://localhost:3001/contacts");
        dispatch(getContactSuccess(response.data))

    } catch (e) {
        dispatch(getContactFailure(e.message))
    }
}

export const addContact = (user) => async dispatch => {
    dispatch(addContactRequest());
    try {
        const response = await axios.post("http://localhost:3001/contacts", newContact);
        dispatch(addContactSuccess(response.data)) //Вернет все контакты

    } catch (e) {
        dispatch(addContactFailure(e.message))
    }
}