import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from 'store/actionTypes'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    }
}
export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}
export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const login = (userData) => async dispatch => {
    dispatch(loginRequest());
    try {
        const response = await axios.post("http://localhost:3001/login", userData);
        const { token, ...user } = response.data;
        dispatch(loginSuccess(user))
        localStorage.setItem('token', token)
    } catch (e) {
        dispatch(loginFailure(e.message))
    }
}