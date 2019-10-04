import {
    USER_RESETPASSWORD_REQUESTED,
    USER_RESETPASSWORD_SUCCESS,
    USER_RESETPASSWORD_FAILED,
    RESET_RESETPASSWORD_STATE,
} from "./types";

export const userResetpasswordSuccess = ({access_token,new_password, }) => ({
    types: [
    USER_RESETPASSWORD_REQUESTED,
    USER_RESETPASSWORD_SUCCESS,
    USER_RESETPASSWORD_FAILED,
    ],
    payload: {
      client: "default",
      request: {
        method: "POST",
        url: "/Resetpassword",
        headers:{
          access_token,
        },
        data: {
          new_password,
        }
      }
    }
  });
  export const resetResetPasswordState = () => ({
    type: RESET_RESETPASSWORD_STATE,
  });
  
  