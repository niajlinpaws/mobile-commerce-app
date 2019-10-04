import {
  CATALOG_REQUESTED,
  CATALOG_SUCCESS,
  CATALOG_FAILED,
  CATALOG_PRODUCT_REQUESTED,
  CATALOG_PRODUCT_SUCCESS,
  CATALOG_PRODUCT_FAILED,
  CATALOG_PRODUCT_FILTER_REQUESTED,
  CATALOG_PRODUCT_FILTER_SUCCESS,
  CATALOG_PRODUCT_FILTER_FAILED,
  CATALOG_PRODUCT_PULL_TO_REFRESH,
  CATALOG_GO_BACK,
  TOGGLE_ROOT_CATEGORY,
  TOGGLE_ROOT_CATALOG,
  RESET_CATALOG_PRODUCT_FILTER_STATE
} from "./types";

export const catalogSuccess = ({ access_token, category_id, heading }) => ({
  types: [
    CATALOG_REQUESTED,
    CATALOG_SUCCESS,
    CATALOG_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: `/Categories/${category_id}`,
      headers: {
        access_token,
      },
      params: {
        heading
      }
    }
  }
});

export const catalogProductSuccess = ({ access_token, heading, category_id, page, params }) => ({
  types: [
    CATALOG_PRODUCT_REQUESTED,
    CATALOG_PRODUCT_SUCCESS,
    CATALOG_PRODUCT_FAILED
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: `/Category-Product/${category_id}/${page || 1}`,
      headers: {
        access_token,
      },
      params:{
        ...params,
        heading
      }
    }
  }
});

export const catalogProductFilterSuccess = ({ access_token }) => ({
  types: [
    CATALOG_PRODUCT_FILTER_REQUESTED,
    CATALOG_PRODUCT_FILTER_SUCCESS,
    CATALOG_PRODUCT_FILTER_FAILED,
  ],
  payload: {
    client: "default",
    request: {
      method: "GET",
      url: '/filters',
      headers: {
        access_token,
      }
    }
  }
});

export const toggleRootCategory = () => ({
  type: TOGGLE_ROOT_CATEGORY
});

export const toggleRootCatalog = () => ({
  type: TOGGLE_ROOT_CATALOG
});

export const catalogGoBack = () => ({
  type: CATALOG_GO_BACK
});

export const catalogProductPullToRefresh = () => ({
  type: CATALOG_PRODUCT_PULL_TO_REFRESH
});

export const clearFilterState = () => ({
  type: RESET_CATALOG_PRODUCT_FILTER_STATE
});