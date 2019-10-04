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
} from "../actions/types";

const initialState = {
  rootCatalog: true,
  rootCategory: 16,
  data: [
    [
      {
        heading: 'Catalog',
        categories: []
      }
    ]
  ],
  nextPage:1,
  error: undefined,
  isFailed: false,
  loading: false,
  pullToRefresh: false,
  productFilterState:{
    horsepower: undefined,
    power: undefined,
    "input-phase": undefined,
    "output-phase": undefined,
    "enclosure-rating": undefined,
    "overload-capacity": undefined
  },
  productFilters:undefined
};

export default (state = initialState, action) => {
  const { type, payload, error, meta } = action;
  switch (type) {
    case CATALOG_REQUESTED:
      return {
        ...state,
        isFailed: false,
      };
    case CATALOG_SUCCESS:
    {
      const heading = meta.previousAction.payload.request.params.heading; 
      return {
        ...state,
        data: state.rootCatalog ? 
        [{
          heading: 'Catalog',
          categories: payload.data.data.categories
        }]
        : state.data.concat(
        [{
          heading,
          categories: payload.data.data.categories
        }]),
        isFailed: false,
      };
    }
    case CATALOG_FAILED:
      return {
        ...state,
        error: error.response.data.message,
        isFailed: true,
      };

    case CATALOG_PRODUCT_REQUESTED:
      return {
        ...state,
        isFailed: false,
        loading:true
      }; 
    case CATALOG_PRODUCT_SUCCESS:
    {
      const heading = meta.previousAction.payload.request.params.heading; 
      const data = state.data;
      const products = data[data.length-1].products;
      return {
        ...state,
        data: products && !state.pullToRefresh ? 
        state.data.slice(0,state.data.length-1).concat(
          [{
            heading,
            products:products.concat(payload.data.data)
          }]
        ):
        state.data.concat(
          [{
            heading,
            products: payload.data.data
          }]
        ),
        nextPage: state.pullToRefresh ? 2 : ++state.nextPage,
        isFailed: false,
        loading:false,
        pullToRefresh: false
      }; 
    }
    case CATALOG_PRODUCT_FAILED:
      return {
        ...state,
        error: error.response.data.message,
        isFailed: true,
        loading:false,
        pullToRefresh: false
      }; 
    case CATALOG_PRODUCT_FILTER_REQUESTED:
      return {
        ...state,
        isFailed: false,
      };
    case CATALOG_PRODUCT_FILTER_SUCCESS:
    console.log("inside CATALOG_PRODUCT_FILTER_SUCCESS=========>",payload);
      return {
        ...state,
        productFilters: payload.data.data,
        isFailed: false
      };
    case CATALOG_PRODUCT_FILTER_FAILED:
      return {
        ...state,
        error: error.response.data.message,
        isFailed: true,
      };
    case CATALOG_GO_BACK:
      return {
        ...initialState,
        rootCatalog: state.rootCatalog,
        data: state.data.filter((a, i) => !(i === state.data.length - 1))
      };
    case TOGGLE_ROOT_CATEGORY:
      return {
        ...state,
        rootCategory: state.rootCategory === 16 ? 2522 : 16
      };
    case TOGGLE_ROOT_CATALOG:
      return {
        ...state,
        rootCatalog: !state.rootCatalog
      };
    case CATALOG_PRODUCT_PULL_TO_REFRESH:
      return {
        ...state,
        pullToRefresh: !state.pullToRefresh
      };
    case RESET_CATALOG_PRODUCT_FILTER_STATE:
      return {
        ...state,
        rootCatalog: state.rootCatalog,
        data: state.data,
      };
    default:
      return state;
  }
};