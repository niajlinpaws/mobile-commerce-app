import {
  USER_VERIFICATION_REQUESTED,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAILED,
  USER_RESEND_VERIFICATION_REQUESTED,
  USER_RESEND_VERIFICATION_SUCCESS,
  USER_RESEND_VERIFICATION_FAILED,
  RESET_VERIFICATION_STATE,
} from "./types";

export const userverificationSuccess = ({email,otp_code}) => ({
    types: [
        USER_VERIFICATION_REQUESTED,
        USER_VERIFICATION_SUCCESS,
        USER_VERIFICATION_FAILED,
    ],
    payload: {
      client: "default",
      request: {
        method: "POST",
        url: "/Otp_Verify",
        data: {
          email,
          otp_code,
        }
      }
    }
  });

  export const resetVerificationState = () => ({
    type: RESET_VERIFICATION_STATE,
  });

  export const resendVerificationSuccess = ({ email, type }) => ({
    types: [
        USER_RESEND_VERIFICATION_REQUESTED,
        USER_RESEND_VERIFICATION_SUCCESS,
        USER_RESEND_VERIFICATION_FAILED,
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