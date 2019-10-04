import {
    PRODUCT_DETAIL_REQUESTED,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILED,
    PRODUCT_ADD_TO_LIKE_REQUESTED,
    PRODUCT_ADD_TO_LIKE_SUCCESS,
    PRODUCT_ADD_TO_LIKE_FAILED,
} from "../actions/types";

const initialState = {
    error: undefined,
    isFailed: false,
    loading: false,
};
export default (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case PRODUCT_DETAIL_REQUESTED:
            return {
                ...state,
                isFailed: false,
                loading: true,
            };
        case PRODUCT_DETAIL_SUCCESS:
        return {
            data: payload.data.data,
            isFailed: false,
            loading: false,
        };
        case PRODUCT_DETAIL_FAILED:
            return {
                error: error.response.data.message,
                isFailed: true,
                loading: false,
            };

        case PRODUCT_ADD_TO_LIKE_REQUESTED:
            return {
                ...state,
                data: {
                    ...state.data,
                    is_liked : Number(!state.data.is_liked),
                },
                isFailed: false,
            };
        case PRODUCT_ADD_TO_LIKE_SUCCESS:
            return {
                ...state,
                message: payload.data.message,
                isFailed: false,
            };
        case PRODUCT_ADD_TO_LIKE_FAILED:
            return {
                ...state,
                data: {
                    ...state.data,
                    is_liked : Number(!state.data.is_liked),
                },
                error: error.response.data.message,
                isFailed: true,
            };
        default:
            return state;
    }
};