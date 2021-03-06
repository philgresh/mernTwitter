import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';

const nullErrors = Object.freeze([]);

const SessionErrorsReducer = (state = nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return nullErrors;
    case CLEAR_SESSION_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
