// TODO: implement orders reducer
import {} from '../../utils/actionTypes';

export const ordersState = {
  allOrders: [],
  oneOrder: null
};

// **** Reducer ****
export const ordersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
