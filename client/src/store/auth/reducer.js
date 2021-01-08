import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REG_FAILURE,
  REG_SUCCESS,
  REG_REQUEST,
  LOG_OUT,
  IS_REG_MODAL,
} from 'store/actionTypes';

const initialState = {
  isRequesting: false,
  isAuth: false,
  user: {},
  error: '',
  isRegistred: false,
  regModal: false,
};

function loginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
        isRequesting: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: { username: payload.user },
        isAuth: true,
        isRequesting: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case REG_FAILURE:
      return {
        ...state,
        error: payload,
        isRequesting: false,
      };
    case REG_SUCCESS:
      return {
        ...state,
        isRequesting: false,
      };
    case REG_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };
    case IS_REG_MODAL:
      return {
        ...state,
        regModal: !state.regModal,
      };
    default:
      return state;
  }
}

export default loginReducer;
