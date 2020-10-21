import {CHANGE_SEARCH_STRING} from 'store/actionTypes'


export function changeSearchString(value){
    return{
        type: CHANGE_SEARCH_STRING,
        payload: value
    }
}