import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
} from '../actions/session_actions';

const initialState = Object.freeze({
  isAuthenticated: false,
  user: {},
});

const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!payload.currentUser,
        user: payload.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    default:
      return state;
  }
};

export default sessionReducer;
