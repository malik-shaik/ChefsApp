import React, { createContext, useReducer } from 'react';
import { reducer, authState } from './authReducer';
import { errorMessages } from '../../utils';
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED
} from '../../utils/actionTypes';
import { getToken, removeToken, storeToken } from '../tokenStorage';
import { userAPI } from '../../api';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authData, dispatch] = useReducer(reducer, authState);
  const { token, isAuthenticated, loading, error, user } = authData;

  /* Actions */
  // Load User
  const loadUser = async () => {
    const res = await userAPI.loadUser(token);
    if (res.ok) {
      const { token, user } = res.data;
      await storeToken(token);
      dispatch({ type: USER_LOADED, payload: { token, user } });
    } else if ((res.problem = 'CLIENT_ERROR')) {
      dispatch({ type: AUTH_ERROR, payload: { error: errorMessages.INVALID_USER } });
    }
  };

  // Login User
  const loginAction = async (data) => {
    const res = await userAPI.login(data);
    if (res.ok) {
      const { token, user } = res.data;
      await storeToken(token);
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    } else if ((res.problem = 'CLIENT_ERROR')) {
      dispatch({ type: LOGIN_FAIL, payload: { error: errorMessages.INVALID_USER } });
    }
  };

  //Forgot password
  const resetPasswordEmail = async (email) => {
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    //   headers: { "Content-Type": "application/json" },
    // };
    // const res = await fetch("/api/users/forgotpassword", options);
    // const data = await res.json();
    // console.log(data);
  };

  // Logout
  // TODO: implement Logout
  const logout = async () => {
    await removeToken();
    dispatch({ type: LOGOUT });
  };

  // Clear Errors
  //   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        user,
        // token,
        error,
        // loading,
        // register,
        isAuthenticated,
        loadUser,
        loginAction,
        logout
        // clearErrors,
        // resetPasswordEmail
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
