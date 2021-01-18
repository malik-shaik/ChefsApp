import { SET_BADGE_NUMBER } from '../../utils/actionTypes';

export const badgeState = { badgeNumber: 0 };

// **** Reducer ****
export const notificationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BADGE_NUMBER:
      return { ...state, badgeNumber: payload.badge };

    default:
      return state;
  }
};
