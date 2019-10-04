import {
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT_REQUESTED,
    USER_SET_AUTH_DATA
} from "../actions/types";

const initialState = {
  user_data: undefined,
  error: undefined,
  isFailed: false,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_LOGIN_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        user_data: payload.data.data,
        isFailed: false,
        loading: false
      };
    case USER_LOGIN_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false
      };
    case USER_LOGOUT_REQUESTED:
      return {
        ...initialState
      };

    case USER_SET_AUTH_DATA:
    console.log("inside user set auth data reducer===========>",payload);
    const data = state.user_data;
    const {user_data} = payload;
    return{
      ...state,
      user_data:{
        ...data,        
        ...user_data,
      }
    }
    default:
      return state;
  }
};