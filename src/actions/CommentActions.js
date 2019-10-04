import {
  COMMENT_LIST_REQUESTED,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILED
} from "./types";
  
export const commentListSuccess = ({ access_token, product_id, page }) => ({
  types: [
    COMMENT_LIST_REQUESTED,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      //url: `/Get-Comment/${product_id || 0}/${page || 1}`,
      url: `/Get-Comment/2044/0`,
      headers: {
        access_token,
      },
    }
  }
});
 
