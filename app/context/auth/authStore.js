import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED } from '../../utils/actionTypes';

export const authState = {
  isAuthenticated: null,
  user: null,
  error: null
};

// **** Reducer ****
export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return { ...state, isAuthenticated: true, user: payload.user };

    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: payload.user };

    case LOGIN_FAIL:
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: payload.error };

    default:
      return state;
  }
};
