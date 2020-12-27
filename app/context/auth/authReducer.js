import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED } from '../../utils/actionTypes';

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
    case USER_LOADED:
      return { ...state, isAuthenticated: true, isLoading: false, user: payload.user };

    case LOGIN_SUCCESS:
      return {
        ...state,
        authToken: payload.token,
        isAuthenticated: true,
        loading: false,
        user: payload.user
      };

    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload.error
      };

    default:
      return state;
  }
};
