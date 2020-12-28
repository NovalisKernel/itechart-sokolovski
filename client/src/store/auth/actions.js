import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REG_FAILURE, REG_REQUEST, REG_SUCCESS, LOG_OUT } from 'store/actionTypes'
import history from '../history';

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
export function regRequest() {
    return {
        type: REG_REQUEST,
    }
}
export function regSuccess() {
    return {
        type: REG_SUCCESS,
    }
}
export function regFailure(error) {
    return {
        type: REG_FAILURE,
        payload: error
    }
}

export function logOut() {
    localStorage.clear();
    history.push('/');
    return {
        type: LOG_OUT
    }
}

export const login = (userData) => async dispatch => {
    dispatch(loginRequest());
    try {
        console.log(userData);
        const response = await axios.post("http://localhost:3001/login", userData);
        const { token, ...user } = response.data;
        //setAuthToken(token)

        localStorage.setItem('token', token)
        history.push('/contacts');
        dispatch(loginSuccess(user))
    } catch (e) {
        dispatch(loginFailure(e.message))
    }
}

export const registration = (userData) => async dispatch => {
    dispatch(regRequest());
    try {
        await axios.post("http://localhost:3001/login/reg", userData);
        dispatch(regSuccess())
    } catch (e) {
        dispatch(regFailure(e.message))
    }
}