import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from 'store/actionTypes'

const initialState = {
    isRequesting: false,
    isAuth: false,
    user: {},
    error: ''
}

function contactsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                error: payload,
                isRequesting: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: { username: payload.username },
                isAuth: true,
                isRequesting: false
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isRequesting: true

            }

        default:
            return state;
    }
}

export default contactsReducer;