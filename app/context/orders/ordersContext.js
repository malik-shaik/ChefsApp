import React, { createContext, useReducer } from 'react';
import { ordersReducer, ordersState } from './ordersReducer';
import { errorMessages } from '../../utils';
import { ordersAPI } from '../../api';
import { LOAD_ALL_MESSAGES } from '../../utils/actionTypes';

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const [ordersData, dispatch] = useReducer(ordersReducer, ordersState);
  const { allOrders, oneOrder } = ordersData;

  /* Actions */

  // Load all Orders
  const loadAllOrdersAction = async () => {
    const res = await ordersAPI.getAllOrders();
    if (res.ok) {
      dispatch({ type: LOAD_ALL_MESSAGES, payload: { data: res.data } });
    } else if ((res.problem = 'CLIENT_ERROR')) {
      console.log('messages loading ERROR !');
      // dispatch({ type: LOGIN_FAIL, payload: { error: errorMessages.INVALID_USER } });
    }
  };

  // Set One Order
  const setOneOrderAction = () => {
    // TODO: implement this
  };

  return (
    <OrdersContext.Provider value={{ allOrders, oneOrder, loadAllOrdersAction, setOneOrderAction }}>
      {props.children}
    </OrdersContext.Provider>
  );
};
