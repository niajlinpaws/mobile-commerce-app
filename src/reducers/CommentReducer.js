import {
  COMMENT_LIST_REQUESTED,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILED
} from "../actions/types";

const initialState = {
  data: [],
  nextPage:0,
  error: undefined,
  isFailed: false,
  loading: false
};
export default (state = initialState, action) => {
  const { type, payload, meta, error } = action;

  switch (type) {
    case COMMENT_LIST_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true,
      };
    case COMMENT_LIST_SUCCESS:
    console.log('payload ' + payload.data);
      return {
        data: state.data.concat( (payload.data.data).reverse() ),
        nextPage: ++state.nextPage,
        isFailed: false,
        loading: false
      };
    case COMMENT_LIST_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false
      };
  
    default:
      return state;
  }
};