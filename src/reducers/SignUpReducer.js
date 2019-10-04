import {
  USER_SIGNUP_REQUESTED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from "../actions/types";

const initialState = {
  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case USER_SIGNUP_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true
      };
    case USER_SIGNUP_SUCCESS:
      return {
        user_data: payload.data.data,
        message: payload.data.message,
        isFailed: false,
        loading: false
      };
    case USER_SIGNUP_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false
      };
    default:
      return state;
  }
};
