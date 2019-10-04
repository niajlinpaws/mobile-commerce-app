import { Platform } from 'react-native';
import {
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_REQUESTED,
  USER_SET_AUTH_DATA
} from "./types";

export const userLoginSuccess = ({ email, password }) => ({
  types: [
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "POST",
      url: "/Login",
      data: {
        email,
        password,
        device_token: "1234567890",
        device_type: Platform.OS

      }
    }
  }
});

export function userRequestLogout() {
  return {
    type: USER_LOGOUT_REQUESTED,
  };
}

export function setAuthData(user_data) {
  return {
    type: USER_SET_AUTH_DATA,
    payload:{
      user_data,
    }
  }
}
