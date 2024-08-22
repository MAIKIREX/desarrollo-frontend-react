import { SET_PRODUCTS } from "./productTypes";

const initialState = {
    products: [],
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        default:
            return state;
    }
};

export default defaultReducer;
