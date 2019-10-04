import {
    USER_EDITPROFILE_REQUESTED,
    USER_EDITPROFILE_SUCCESS,
    USER_EDITPROFILE_FAILED,
    RESET_EDITPROFILE_STATE,
} from "./types";

export const userEditProfileSuccess = ({ access_token,name,phone,email }) => ({
  types: [
    USER_EDITPROFILE_REQUESTED,
    USER_EDITPROFILE_SUCCESS,
    USER_EDITPROFILE_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/edit_profile",
      headers:{
        access_token,
      },
      data: {
        name,
        phone,
        email,
      }
    }
  }
});
export const resetEditProfileState = () => ({
  type: RESET_EDITPROFILE_STATE,
});



