import React, { createContext, useReducer } from 'react';
import { ordersReducer, ordersState } from './ordersReducer';
import { ordersAPI } from '../../api';
import {
  LOAD_ALL_MESSAGES,
  LOAD_CONFIRMED_MESSAGES,
  LOAD_PENDING_MESSAGES,
  LOAD_UNREAD_MESSAGES,
  SET_ONE_ORDER
} from '../../utils/actionTypes';

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const [ordersData, dispatch] = useReducer(ordersReducer, ordersState);
  const { allOrders, unreadOrders, pendingOrders, confirmedOrders, oneOrder } = ordersData;

  /* Actions */

  // FIX: create context for messages and orders

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
      console.log('messages loading ERROR !', res);
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
  const loadOneOrderAction = async (token) => {
    // TODO: implement this
    console.log(token);
    const res = await ordersAPI.getOneOrder(token);
    if (res.ok) {
      console.log('ORDER : ', res.data);
      dispatch({ type: SET_ONE_ORDER, payload: { data: res.data } });
      return true;
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log('order loading ERROR ! :', res);
      return false;
    }
  };

  const respondOrderAction = async (token, type) => {
    const res = await ordersAPI.respondOrder(token, type);

    if (res.ok) {
      console.log('MESSAGE : ', res.data);
      const types = ['all', 'requested', 'confirmed'];
      types.forEach(async (type) => await loadAllOrdersAction(type));
      await loadUnreadMessages('unread');
      await loadOneOrderAction(token);
      return res.data;
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log('SOME ERROR FROM SERVER :', res);
    }
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
        loadOneOrderAction,
        respondOrderAction
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};
