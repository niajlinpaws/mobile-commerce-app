import {
  USER_HOME_REQUESTED,
  USER_HOME_SUCCESS,
  USER_HOME_FAILED,
  USER_ADD_TO_LIKE_REQUESTED,
  USER_ADD_TO_LIKE_SUCCESS,
  USER_ADD_TO_LIKE_FAILED,
  HOME_SEARCH,
  HOME_PULL_TO_REFRESH
} from "./types";

export const userHomeSuccess = ({ access_token, feed_type, page }) => ({
  types: [
    USER_HOME_REQUESTED,
    USER_HOME_SUCCESS,
    USER_HOME_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: `/Products-List/${feed_type || 'Latest'}/${page || 1}`,
      headers: {
        access_token,
      },
    }
  }
});

export const toggleLikeStatus = ({ access_token, product_id, status }) => ({
  types: [
    USER_ADD_TO_LIKE_REQUESTED,
    USER_ADD_TO_LIKE_SUCCESS,
    USER_ADD_TO_LIKE_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      headers: {
        access_token,
      },
      method: "POST",
      url: "/Add-To-Like",
      data: {
        product_id,
        status
      }
    }
  }
});

export const homeSearch = ({ title }) => ({
  type: HOME_SEARCH,
  payload: {
    title,
  }
});

export const pullToRefresh = () => ({
  type: HOME_PULL_TO_REFRESH
});

