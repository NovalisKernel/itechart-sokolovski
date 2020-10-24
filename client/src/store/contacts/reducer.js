import { CHANGE_SEARCH_STRING, DELETE_CONTACT,EDIT_CONTACT} from 'store/actionTypes'

const initialState = {
    data: [
        {
            id: 0, name: 'Paul', job: 'CEO', decision: 'Deside', promoter: 'Promoter', level: "High", relatOwner: 'Laura',
            topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

        {
            id: 1, name: 'Maksim', job: 'CTO', decision: 'Deside', promoter: 'Strong Promoter', level: "Medium", relatOwner: 'John',
            topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

        {
            id: 2, name: 'Andrey', job: 'CMO', decision: 'Agree', promoter: 'Detractor', level: "Emerging", relatOwner: 'Laura',
            topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },


        {
            id: 3, name: 'Vadim', job: 'Accountant', decision: 'Recommend', promoter: 'Neutral', level: "Medium", relatOwner: 'John',
            topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

        {
            id: 4, name: 'Vladlen', job: 'CMO', decision: 'Recommend', promoter: 'Neutral', level: "Low", relatOwner: 'Laura',
            topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ],
    searchString: '',
    editContactId: -1
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
            return{
                ...state,
                data:state.data.filter(item=>item.id!==payload),
                editContactId:-1
            }
        case EDIT_CONTACT:
            return{
                ...state,
                editContactId:payload
            }

        default:
            return state;
    }
}

export default contactsReducer;