import axios from 'axios';
import {CHANGE_SEARCH_STRING, EDIT_CONTACT,
        GET_CONTACT_FAILURE,GET_CONTACT_REQUEST,GET_CONTACT_SUCCESS,
        ADD_CONTACT_FAILURE,ADD_CONTACT_REQUEST,ADD_CONTACT_SUCCESS,
        CHANGE_CONTACT_FAILURE,CHANGE_CONTACT_REQUEST,CHANGE_CONTACT_SUCCESS,
        DELETE_CONTACT_FAILURE,DELETE_CONTACT_REQUEST,DELETE_CONTACT_SUCCESS,LOG_OUT} from 'store/actionTypes';
import history from '../history';



export function changeSearchString(value) {
    return {
        type: CHANGE_SEARCH_STRING,
        payload: value
    }
}
// export function deleteContact(value) {
//     return {
//         type: DELETE_CONTACT,
//         payload: value
//     }
// }
export function editContact(value) {
    return {
        type: EDIT_CONTACT,
        payload: value
    }
}
export function getContactRequest(){
    return{
        type:GET_CONTACT_REQUEST
    }
}
export function getContactSuccess(contacts) {
    return {
        type: GET_CONTACT_SUCCESS,
        payload: contacts
    }
}
export function getContactFailure(error) {
    return {
        type: GET_CONTACT_FAILURE,
        payload: error
    }
}

export function addContactRequest(){
    return{
        type:ADD_CONTACT_REQUEST
    }
}
export function addContactSuccess(contacts) {
    return {
        type: ADD_CONTACT_SUCCESS,
        payload: contacts
    }
}
export function addContactFailure(error) {
    return {
        type: ADD_CONTACT_FAILURE,
        payload: error
    }
}

export function changeContactRequest(){
    return{
        type:CHANGE_CONTACT_REQUEST
    }
}
export function changeContactSuccess(contacts) {
    return {
        type: CHANGE_CONTACT_SUCCESS,
        payload: contacts
    }
}
export function changeContactFailure(error) {
    return {
        type: CHANGE_CONTACT_FAILURE,
        payload: error
    }
}

export function deleteContactRequest(){
    return{
        type:DELETE_CONTACT_REQUEST
    }
}
export function deleteContactSuccess(contacts) {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: contacts
    }
}
export function deleteContactFailure(error) {
    return {
        type: DELETE_CONTACT_FAILURE,
        payload: error
    }
}
export function logOut(){
    localStorage.clear();
    history.push('/');
    return{
        type:LOG_OUT
    }
}

export const getContacts = (user) => async dispatch => {
    dispatch(getContactRequest());
    try {
        const response = await axios.get("http://localhost:3001/contacts");
        dispatch(getContactSuccess(response.data.contacts))

    } catch (e) {
        dispatch(getContactFailure(e.message))
    }
}

export const addContact = (newContact) => async dispatch => {
    dispatch(addContactRequest());
    try {
        const response = await axios.post("http://localhost:3001/contacts", newContact);
        dispatch(addContactSuccess(response.data.contacts)) //Вернет все контакты

    } catch (e) {
        dispatch(addContactFailure(e.message))
    }
}

export const changeContact = (contact) => async dispatch => {
    dispatch(changeContactRequest());
    try {
        console.log('Contact on server',contact);
        const response = await axios.put("http://localhost:3001/contacts", contact);
        dispatch(changeContactSuccess(response.data.contacts)) //Вернет все контакты

    } catch (e) {
        dispatch(changeContactFailure(e.message))
    }
}

export const deletedContact = (contactId) => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        const response = await axios.delete("http://localhost:3001/contacts", {data:{id:contactId}});
        dispatch(deleteContactSuccess(response.data.contacts)) //Вернет все контакты

    } catch (e) {
        dispatch(deleteContactFailure(e.message))
    }
}
