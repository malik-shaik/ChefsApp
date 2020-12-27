import React, { createContext, useReducer } from 'react';
import { reducer, authState } from './authReducer';
import { errorMessages } from '../../utils';
import {
  AUTH_ERROR,
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
  const { isAuthenticated, error, user } = authData;

  /* Actions */
  // Load User Action
  const loadUserAction = async () => {
    const token = await getToken();
    const res = await userAPI.loadUser(token);
    if (res.ok) {
      const { token, user } = res.data;
      // await storeToken(token);
      dispatch({ type: USER_LOADED, payload: { token, user } });
    } else if ((res.problem = 'CLIENT_ERROR')) {
      dispatch({ type: AUTH_ERROR, payload: { error: errorMessages.INVALID_USER } });
    }
  };

  // Login User Action
  const loginAction = async (data) => {
    // console.log('login clicked');
    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json' },
    //   body: JSON.stringify(data)
    // };
    // const res = await fetch('http://localhost:5000/users/login', options);
    // console.log(res.status);
    // const data1 = await res.json();
    // console.log(data1);
    const res = await userAPI.login(data);
    console.log(res);
    if (res.ok) {
      const { token, user } = res.data;
      await storeToken(token);
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log(res);
      dispatch({ type: LOGIN_FAIL, payload: { error: errorMessages.INVALID_USER } });
    }
  };

  // Profile Update Action
  const profileUpdateAction = async (data) => {
    const res = await userAPI.updateProfile(data);
    if (res.ok) {
      const { user, message } = res.data;
      console.log('RESPONSE DATA:', res.data);
      dispatch({ type: USER_LOADED, payload: { user } });
      return message;
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log(res);
      return false;
    }
  };

  // Logout Action
  const logoutAction = async () => {
    await removeToken();
    dispatch({ type: LOGOUT, payload: { error: null } });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isAuthenticated,
        loadUserAction,
        loginAction,
        logoutAction,
        profileUpdateAction
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
