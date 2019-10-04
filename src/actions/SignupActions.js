import { Platform } from 'react-native';
import {
  USER_SIGNUP_REQUESTED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from "./types";

export const userSingupSuccess = ({ name, email, phone, password, }) => ({
  types: [
    USER_SIGNUP_REQUESTED,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/SignUp",
      data: {
        name,
        email,
        phone,
        password,
        device_token: "1234567890",
        device_type: Platform.OS
      }
    }
  }
});
