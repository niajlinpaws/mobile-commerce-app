import {
  PRODUCT_DETAIL_REQUESTED,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILED,
  PRODUCT_ADD_TO_LIKE_REQUESTED,
  PRODUCT_ADD_TO_LIKE_SUCCESS,
  PRODUCT_ADD_TO_LIKE_FAILED,
} from "./types";

export const productDetailSuccess = ({ access_token, product_id  }) => ({
  types: [
    PRODUCT_DETAIL_REQUESTED,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: `/Products-Detail/${product_id }`,
      headers: {
        access_token,
      },
    }
  }
});

export const productToggleLikeStatus = ({ access_token, product_id, status }) => ({
  types: [
    PRODUCT_ADD_TO_LIKE_REQUESTED,
    PRODUCT_ADD_TO_LIKE_SUCCESS,
    PRODUCT_ADD_TO_LIKE_FAILED,
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
