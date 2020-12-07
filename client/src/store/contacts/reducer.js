import {
    ADD_CONTACT_FAILURE, CHANGE_CONTACT_SUCCESS, CHANGE_SEARCH_STRING,
    DELETE_CONTACT, DELETE_CONTACT_FAILURE, DELETE_CONTACT_SUCCESS, EDIT_CONTACT,
    GET_CONTACT_SUCCESS, GET_CONTACT_FAILURE, GET_CONTACT_REQUEST,
    ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, CHANGE_CONTACT_REQUEST, CHANGE_CONTACT_FAILURE
    , DELETE_CONTACT_REQUEST
} from 'store/actionTypes'

const initialState = {
    data: [
        // {
        //     id: 1, name: 'Paul', job: 'CEO', decision: 'Deside', promoter: 'Promoter', level: "High", relatOwner: 'Laura',
        //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // },

        // {
        //     id: 2, name: 'Maksim', job: 'CTO', decision: 'Deside', promoter: 'Strong Promoter', level: "Medium", relatOwner: 'John',
        //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // },

        // {
        //     id: 3, name: 'Andrey', job: 'CMO', decision: 'Agree', promoter: 'Detractor', level: "Emerging", relatOwner: 'Laura',
        //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // },


        // {
        //     id: 4, name: 'Vadim', job: 'Accountant', decision: 'Recommend', promoter: 'Neutral', level: "Medium", relatOwner: 'John',
        //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // },

        // {
        //     id: 5, name: 'Vladlen', job: 'CMO', decision: 'Recommend', promoter: 'Neutral', level: "Low", relatOwner: 'Laura',
        //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // },
    ],
    searchString: '',
    editContactId: null,
    error: '',
    isRequestion:true
}

function contactsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CHANGE_SEARCH_STRING:
            return {
                ...state,
                searchString: payload,
                filteredContacts: state.searchString ? state.data.filter(item => item.name.includes(payload)) : state.data
            }
        case DELETE_CONTACT:
            return {
                ...state,
                data: state.data.filter(item => item.id !== payload),
                editContactId: null
            }
        case EDIT_CONTACT:
            return {
                ...state,
                editContactId: payload
            }
        case GET_CONTACT_FAILURE:
            return {
                ...state,
                error: payload,
                isRequestion:false
            }
        case GET_CONTACT_REQUEST:
            return {
                ...state,
                isRequestion:true
            }

        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                data:payload,
                isRequestion:false
            }
        case ADD_CONTACT_FAILURE:
            return {
                ...state,
                error: payload,
                isRequestion:false
            }
        case ADD_CONTACT_REQUEST:
            return {
                ...state,
                isRequestion:true
            }
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                data:payload,
                isRequestion:false
            }
        case CHANGE_CONTACT_SUCCESS:
            return {
                ...state,
                data:payload,
                isRequestion:false
            }
        case CHANGE_CONTACT_FAILURE:
            return {
                ...state,
                error: payload,
                isRequestion:false
            }
        case CHANGE_CONTACT_REQUEST:
            return {
                ...state,
                isRequestion:true
            }
        case DELETE_CONTACT_FAILURE:
            return {
                ...state,
                error: payload,
                isRequestion:false
            }
        case DELETE_CONTACT_REQUEST:
            return {
                ...state,
                isRequestion:true
            }
        case DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                data:payload,
                editContactId:null,
                isRequestion:false
            }

        default:
            return state;
    }
}

export default contactsReducer;