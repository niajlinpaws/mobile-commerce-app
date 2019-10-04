import {
    USER_CHANGEPASSWORD_REQUESTED,
    USER_CHANGEPASSWORD_SUCCESS,
    USER_CHANGEPASSWORD_FAILED,
    RESET_CHANGEPASSWORD_STATE
} from "./types";

export const userChangePasswordSuccess = ({access_token, current_password, new_password, }) =>{
  console.log("inside user chnagepassword action===========>",{access_token, current_password, new_password });
  return {
  types: [
    USER_CHANGEPASSWORD_REQUESTED,
    USER_CHANGEPASSWORD_SUCCESS,
    USER_CHANGEPASSWORD_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/Changepassword",
      headers:{
        access_token,
      },
      data: {
        current_password,
        new_password,
       
      }
    }
  }
}
};
export const resetChangePasswordState = () => ({
  type: RESET_CHANGEPASSWORD_STATE,
});
