import {CHANGE_SEARCH_STRING,DELETE_CONTACT,EDIT_CONTACT} from 'store/actionTypes'



export function changeSearchString(value){
    return{
        type: CHANGE_SEARCH_STRING,
        payload: value
    }
}
export function deleteContact(value){
    return{
        type: DELETE_CONTACT,
        payload:value
    }
}
export function editContact(value){
    return{
        type: EDIT_CONTACT,
        payload:value
    }
}