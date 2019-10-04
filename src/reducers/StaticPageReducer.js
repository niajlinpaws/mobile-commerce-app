import {
    STATIC_PAGE_REQUESTED,
    STATIC_PAGE_SUCCESS,
    STATIC_PAGE_FAILED,
} from "../actions/types";

const initialState = {
  error: undefined,
  isFailed: false,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case STATIC_PAGE_REQUESTED:
      return {
        ...state,
        isFailed: false,
      };
    case STATIC_PAGE_SUCCESS:
      return {
        data: payload.data.data,
        isFailed: false,
      };
    case STATIC_PAGE_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
      };
    default:
      return state;
  }
};