import {
    USER_EDITPROFILE_REQUESTED,
    USER_EDITPROFILE_SUCCESS,
    USER_EDITPROFILE_FAILED,
    RESET_EDITPROFILE_STATE
} from "../actions/types";

const initialState = {
  user_data: undefined,
  error: undefined,
  isFailed: false,
  loading:false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_EDITPROFILE_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading:true,
      };
    case USER_EDITPROFILE_SUCCESS:
      console.log(payload);
      return {
        user_data: payload.data.data,
        message: payload.data.message,
        isFailed: false,
        loading:false,
      };
    case USER_EDITPROFILE_FAILED:
      console.log(action);
      return {
        error: error.response.data.message,
       
        isFailed: true,
        loading:false,
      };
    case RESET_EDITPROFILE_STATE:
      return {
        ...initialState
      };
      
    default:
      return state;
  }
};
