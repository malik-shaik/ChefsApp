import React, { createContext, useReducer } from 'react';
import { ordersReducer, ordersState } from './ordersReducer';
import { ordersAPI } from '../../api';
import {
  LOAD_ALL_MESSAGES,
  LOAD_CONFIRMED_MESSAGES,
  LOAD_PENDING_MESSAGES,
  LOAD_UNREAD_MESSAGES
} from '../../utils/actionTypes';

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const [ordersData, dispatch] = useReducer(ordersReducer, ordersState);
  const { allOrders, unreadOrders, pendingOrders, confirmedOrders, oneOrder } = ordersData;

  /* Actions */

  // Load all Orders
  const loadAllOrdersAction = async (type) => {
    const res = await ordersAPI.getAllOrders(type);

    if (res.ok) {
      if (type === 'all') {
        dispatch({ type: LOAD_ALL_MESSAGES, payload: { data: res.data } });
      }
      if (type === 'requested') {
        dispatch({ type: LOAD_PENDING_MESSAGES, payload: { data: res.data } });
      }
      if (type === 'confirmed') {
        dispatch({ type: LOAD_CONFIRMED_MESSAGES, payload: { data: res.data } });
      }
      return true;
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log('messages loading ERROR !');
      return false;
    }
  };

  const loadUnreadMessages = async (type) => {
    type = type === 'unread' && 'all';
    const res = await ordersAPI.getAllOrders(type);
    if (res.ok) {
      const unreadOrders = await res.data.filter((order) => order.unread === 1);
      dispatch({ type: LOAD_UNREAD_MESSAGES, payload: { data: unreadOrders } });
      return true;
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log('messages loading ERROR !');
      return false;
    }
  };

  // Set One Order
  const setOneOrderAction = () => {
    // TODO: implement this
  };

  return (
    <OrdersContext.Provider
      value={{
        allOrders,
        unreadOrders,
        pendingOrders,
        confirmedOrders,
        oneOrder,
        loadUnreadMessages,
        loadAllOrdersAction,
        setOneOrderAction
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};
