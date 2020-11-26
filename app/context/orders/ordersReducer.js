// TODO: implement orders reducer
import { LOAD_ALL_MESSAGES } from '../../utils/actionTypes';

export const ordersState = {
  allOrders: undefined,
  oneOrder: null
};

// **** Reducer ****
export const ordersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_MESSAGES:
      return {
        ...state,
        allOrders: payload.data
      };

    default:
      return state;
  }
};
