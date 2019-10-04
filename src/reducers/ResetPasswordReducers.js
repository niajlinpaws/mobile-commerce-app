import {
  USER_RESETPASSWORD_REQUESTED,
  USER_RESETPASSWORD_SUCCESS,
  USER_RESETPASSWORD_FAILED,
  RESET_RESETPASSWORD_STATE,

} from "../actions/types";

const initialState = {
  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_RESETPASSWORD_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true,
      };
    case USER_RESETPASSWORD_SUCCESS:
      console.log(payload);
      return {
        message: payload.data.message,
        isFailed: false,
        loading: false,
      };
    case USER_RESETPASSWORD_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false,
      };
    case RESET_RESETPASSWORD_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
