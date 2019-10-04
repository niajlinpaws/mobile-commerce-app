import {
    USER_CONTACTUS_REQUESTED,
    USER_CONTACTUS_SUCCESS,
    USER_CONTACTUS_FAILED,
    RESET_CONTACTUS_STATE,
} from "./types";

export const userContactusSuccess = ({email, subject, message, }) => ({
    types: [
        USER_CONTACTUS_REQUESTED,
        USER_CONTACTUS_SUCCESS,
        USER_CONTACTUS_FAILED,
    ],
    payload: {
      client: "default",
      request: {
        method: "POST",
        url: "/ContactUs",
        data: {
          email,
          subject,
          message,
        }
      }
    }
  });
  export const resetContactUsState = () => ({
    type: RESET_CONTACTUS_STATE,
  });
  
  