import React, { createContext, useReducer } from 'react';
import { badgeState, notificationReducer } from './notificaitonReducer';
import { SET_BADGE_NUMBER } from '../../utils/actionTypes';

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const [badgeData, dispatch] = useReducer(notificationReducer, badgeState);
  const { badgeNumber } = badgeData;

  /* Actions */

  // Set Badge number
  const setBadgeNumberAction = async (badge) => {
    // TODO : implement this
    console.log('BADGE: ', badge);
    dispatch({ type: SET_BADGE_NUMBER, payload: { badge } });
  };

  return (
    <NotificationContext.Provider value={{ badgeNumber, setBadgeNumberAction }}>
      {props.children}
    </NotificationContext.Provider>
  );
};
