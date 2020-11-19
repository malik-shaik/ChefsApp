import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED
} from '../../utils/actionTypes';

export const authState = {
  authToken: null,
  isAuthenticated: null,
  isLoading: true,
  user: null,
  error: null
};

// **** Reducer ****
export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // case USER_LOADED:
    //   return { ...state, isAuthenticated: true, loading: false, user: payload };

    // case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      //   localStorage.setItem("token", payload.token);
      return {
        ...state,
        authToken: payload.token,
        isAuthenticated: true,
        loading: false,
        user: payload.user
      };

    // case REGISTER_FAIL:
    case LOGIN_FAIL:
    // case AUTH_ERROR:
    case LOGOUT:
      //   localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload.error
      };

    // case CLEAR_ERRORS:
    //   return { ...state, error: null };

    default:
      return state;
  }
};
