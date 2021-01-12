import {
  LOAD_ALL_MESSAGES,
  LOAD_CONFIRMED_MESSAGES,
  LOAD_UNREAD_MESSAGES,
  LOAD_PENDING_MESSAGES,
  SET_ONE_ORDER
} from '../../utils/actionTypes';

export const ordersState = {
  allOrders: undefined,
  unreadOrders: undefined,
  pendingOrders: undefined,
  confirmedOrders: undefined,
  oneOrder: null
};

// **** Reducer ****
export const ordersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_MESSAGES:
      return { ...state, allOrders: payload.data };

    case LOAD_CONFIRMED_MESSAGES:
      return { ...state, confirmedOrders: payload.data };

    case LOAD_PENDING_MESSAGES:
      return { ...state, pendingOrders: payload.data };

    case LOAD_UNREAD_MESSAGES:
      return { ...state, unreadOrders: payload.data };

    case SET_ONE_ORDER:
      return { ...state, oneOrder: payload.data };

    default:
      return state;
  }
};
