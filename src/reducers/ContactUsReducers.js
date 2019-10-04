import {
  USER_CONTACTUS_REQUESTED,
  USER_CONTACTUS_SUCCESS,
  USER_CONTACTUS_FAILED,
  RESET_CONTACTUS_STATE
} from "../actions/types";

const initialState = {
  token: undefined,
  isAuthenticating: false,
  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_CONTACTUS_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true
      };
    case USER_CONTACTUS_SUCCESS:
      return {
        message: payload.data.message,
        loading: false
      };
    case USER_CONTACTUS_FAILED:

      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false
      };
    case RESET_CONTACTUS_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};