import {
  USER_VERIFICATION_REQUESTED,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAILED,
  USER_RESEND_VERIFICATION_REQUESTED,
  USER_RESEND_VERIFICATION_SUCCESS,
  USER_RESEND_VERIFICATION_FAILED,
  RESET_VERIFICATION_STATE
} from "../actions/types";

const initialState = {
  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_VERIFICATION_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true,
      };
    case USER_VERIFICATION_SUCCESS:
      return {
        access_token: payload.data.token,
        message: payload.data.message,
        isFailed: false,
        loading: false,
      };
    case USER_VERIFICATION_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false,
      };
    case USER_RESEND_VERIFICATION_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading:true,
      };
    case USER_RESEND_VERIFICATION_SUCCESS:
      return {
        resendMessage: payload.data.message,
        isFailed: false,
        loading:false,
      };
    case USER_RESEND_VERIFICATION_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        loading:false,
      };
    case RESET_VERIFICATION_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
