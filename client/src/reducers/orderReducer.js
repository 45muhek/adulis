import {
  GET_ORDER,
  GET_CURRENT_USER_ORDER,
  PRODUCT_LOADING
} from "../actions/Types";

const initialState = {
  userOrders: null,
  allOrders: null,
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case GET_ORDER:
      return {
        ...state,
        allOrders: action.payload,
        loading: false
      };
    case GET_CURRENT_USER_ORDER:
      console.log(action.payload);
      return {
        ...state,
        userOrders: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
