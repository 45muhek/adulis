import axios from "axios";
import {
  GET_CART_QTY,
  GET_CART,
  PRODUCT_LOADING,
  GET_ERRORS,
  GET_CART_TOTAL_PRICE
} from "./Types";

//CART LOADING
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};

//GET CART QUANTITY
export const getToatalCartQty = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("/cart-total-qty")
    .then(res =>
      dispatch({
        type: GET_CART_QTY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CART_QTY,
        payload: err.response.data
      })
    );
};
//ADD A PRODUCT TO CRT
export const addToCart = (id, history) => dispatch => {
  dispatch(setProductLoading());
  axios
    .get(`/add-to-cart/${id}`)
    .then(res => history.push("/shop"))
    .catch(
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    );
};
//VIEW THE CART
export const getCart = () => dispatch => {
  dispatch(setProductLoading());

  axios
    .get("/shopping-cart")
    .then(res =>
      dispatch({
        type: GET_CART,
        payload: res.data.products
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//GET THE TOTAL PRICE OF ITEMS IN THE CART
export const getCartTotalPrice = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("/shopping-cart")
    .then(res =>
      dispatch({
        type: GET_CART_TOTAL_PRICE,
        payload: res.data.totalPrice
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
