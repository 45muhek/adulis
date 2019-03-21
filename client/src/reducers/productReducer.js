import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_LOADING } from "../actions/Types";

const initialState = {
  products: null,
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
