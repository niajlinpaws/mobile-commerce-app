import {
  USER_HOME_REQUESTED,
  USER_HOME_SUCCESS,
  USER_HOME_FAILED,
  USER_ADD_TO_LIKE_REQUESTED,
  USER_ADD_TO_LIKE_SUCCESS,
  USER_ADD_TO_LIKE_FAILED,
  HOME_SEARCH,
  HOME_PULL_TO_REFRESH
} from "../actions/types";

const initialState = {
  data: [],
  nextPage:1,
  error: undefined,
  isFailed: false,
  loading: false,
  pullToRefresh: false
};
export default (state = initialState, action) => {
  const { type, payload, meta, error } = action;

  switch (type) {
    case USER_HOME_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading: true,
      };
    case USER_HOME_SUCCESS:
      return {
        data: state.pullToRefresh ? payload.data.data : state.data.concat(payload.data.data),
        nextPage: state.pullToRefresh ? 2 : ++state.nextPage,
        isFailed: false,
        loading: false,
        pullToRefresh: false
      };
    case USER_HOME_FAILED:
      return {
        error: error.response.data.message,
        isFailed: true,
        loading: false,
        pullToRefresh: false
      };

    case USER_ADD_TO_LIKE_REQUESTED:
    {
      const id = payload.request.data.product_id;
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === id)
          item.is_liked = Number(!item.is_liked);
          return item;
        }),
        isFailed: false,
      };
    }
    case USER_ADD_TO_LIKE_SUCCESS:
      return {
        ...state,
        message: payload.data.message,
        isFailed: false,
      };
    case USER_ADD_TO_LIKE_FAILED:
    {
      const id = meta.previousAction.payload.request.data.product_id;
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === id)
            item.is_liked = Number(!item.is_liked);
          return item;
        }),
        error: error.response.data.message,
        isFailed: true,
      };
    }
    case HOME_SEARCH:
      return {
        ...state,
        searchData: state.data.filter((item) => RegExp(payload.title,"i").test(item.title)),
      };
      case HOME_PULL_TO_REFRESH:
      return {
        ...state,
        pullToRefresh: !state.pullToRefresh
      };
      
    default:
      return state;
  }
};