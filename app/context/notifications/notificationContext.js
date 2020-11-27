import React, { createContext, useReducer } from 'react';
import { badgeState, notificationReducer } from './notificaitonReducer';
import { SET_BADGE_NUMBER } from '../../utils/actionTypes';

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const [badgeData, dispatch] = useReducer(notificationReducer, badgeState);
  const { badgeNumber } = badgeData;

  /* Actions */

  // Set Badge number
  const setBadgeNumber = async () => {
    //   const res = await ordersAPI.getAllOrders();
    //   if (res.ok) {
    //     dispatch({ type: LOAD_ALL_MESSAGES, payload: { data: res.data } });
    //   } else if ((res.problem = 'CLIENT_ERROR')) {
    //     console.log('messages loading ERROR !');
    //     // dispatch({ type: LOGIN_FAIL, payload: { error: errorMessages.INVALID_USER } });
    //   }
  };

  return (
    <NotificationContext.Provider value={{ badgeNumber, setBadgeNumber }}>
      {props.children}
    </NotificationContext.Provider>
  );
};
