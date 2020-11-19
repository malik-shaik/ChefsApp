import React, { createContext, useReducer } from 'react';
import { ordersReducer, ordersState } from './ordersReducer';
import { errorMessages } from '../../utils';
import { ordersAPI } from '../../api';

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const [ordersData, dispatch] = useReducer(ordersReducer, ordersState);
  const { allOrders, oneOrder } = ordersData;

  /* Actions */

  // Load all Orders
  const loadAllOrdersAction = async () => {
    // TODO: implement this
    // const res = await ordersAPI.getAllOrders();
    // console.log(res.data);
    // if (res.ok) {
    //     dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    //   } else if ((res.problem = 'CLIENT_ERROR')) {
    //     dispatch({ type: LOGIN_FAIL, payload: { error: errorMessages.INVALID_USER } });
    //   }
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
