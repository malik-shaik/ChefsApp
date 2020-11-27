import { SET_BADGE_NUMBER } from '../../utils/actionTypes';

export const badgeState = { badgeNumber: 8 };

// **** Reducer ****
export const notificationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BADGE_NUMBER:
      return {
        ...state,
        badgeNumber2: payload.day
      };

    default:
      return state;
  }
};
