import {
    USER_FORGOTPASSWORD_REQUESTED,
    USER_FORGOTPASSWORD_SUCCESS,
    USER_FORGOTPASSWORD_FAILED,
    RESET_FORGOTPASSWORD_STATE,
} from "../actions/types";

const initialState = {
  error: undefined,
  isFailed: false,
  loading:false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case USER_FORGOTPASSWORD_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading:true,
      };
    case USER_FORGOTPASSWORD_SUCCESS:
      return {
        message: payload.data.message,
        isFailed: false,
        loading:false,
      };
    case USER_FORGOTPASSWORD_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
        isFailed: true,
        loading:false,
      };
      case RESET_FORGOTPASSWORD_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
