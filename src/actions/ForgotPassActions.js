import {
    USER_FORGOTPASSWORD_REQUESTED,
    USER_FORGOTPASSWORD_SUCCESS,
    USER_FORGOTPASSWORD_FAILED,
    RESET_FORGOTPASSWORD_STATE
} from "./types";

export const userforgotpassSuccess = ({ email, type }) => ({
    types: [
        USER_FORGOTPASSWORD_REQUESTED,
        USER_FORGOTPASSWORD_SUCCESS,
        USER_FORGOTPASSWORD_FAILED,
    ],
    payload: {
      client: "default",
      request: {
        method: "POST",
        url: "/forgot",
        data: {
          email,
          type
        }
      }
    }
  });
  export const resetForgotPasswordState = () => ({
    type: RESET_FORGOTPASSWORD_STATE,
  });
  
  