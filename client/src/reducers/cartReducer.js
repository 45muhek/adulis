import {
  GET_CART_QTY,
  GET_CART,
  PRODUCT_LOADING,
  GET_CART_TOTAL_PRICE
} from "../actions/Types";

const initialState = {
<<<<<<< HEAD
  cart_qty: null,
  cart: null,
  cart_total_price: null
=======
  cart_qty: "0",
  cart: null,
  cart_total_price: "0",
  loading: false
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case GET_CART_QTY:
      return {
        ...state,
        cart_qty: action.payload,
        loading: false
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false
      };
    case GET_CART_TOTAL_PRICE:
      return {
        ...state,
        cart_total_price: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
