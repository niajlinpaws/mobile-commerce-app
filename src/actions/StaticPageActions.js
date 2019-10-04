import {
    STATIC_PAGE_REQUESTED,
    STATIC_PAGE_SUCCESS,
    STATIC_PAGE_FAILED,
} from "./types";

export const staticPageSuccess = ({url}) => ({
  types: [
    STATIC_PAGE_REQUESTED,
    STATIC_PAGE_SUCCESS,
    STATIC_PAGE_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url,
    }
  }
});