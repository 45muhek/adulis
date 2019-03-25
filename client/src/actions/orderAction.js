import axios from "axios";
import {
  GET_ORDER,
  GET_ERRORS,
  GET_CURRENT_USER_ORDER,
  PRODUCT_LOADING
} from "./Types";

//PRODUCT LOADING
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};
//PLACE AN ORDER
export const placeOrder = (orderData, history) => dispatch => {
  axios
    .post("/order", orderData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//GET THE CURRENT USER'S ORDERS
export const getMyOrders = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get(`/order/view`)
    .then(res =>
      dispatch({
        type: GET_CURRENT_USER_ORDER,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_CURRENT_USER_ORDER,
        payload: {}
      })
    );
};
