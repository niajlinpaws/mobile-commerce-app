import {
  USER_CHANGEPASSWORD_REQUESTED,
  USER_CHANGEPASSWORD_SUCCESS,
  USER_CHANGEPASSWORD_FAILED,
  RESET_CHANGEPASSWORD_STATE
} from "../actions/types";

const initialState = {

  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_CHANGEPASSWORD_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true,
      };
    case USER_CHANGEPASSWORD_SUCCESS:
      console.log("inside change password reducer=========>", payload);
      return {
        message: payload.data.message,
        isFailed: false,
        loading: false,
      };
    case USER_CHANGEPASSWORD_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false,
      };
    case RESET_CHANGEPASSWORD_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
