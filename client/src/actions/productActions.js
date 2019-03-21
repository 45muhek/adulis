import axios from "axios";

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_CART_QTY,
  GET_CART,
  PRODUCT_LOADING,
  GET_ERRORS,
  GET_CART_TOTAL_PRICE
} from "./Types";

//GET ALL PRODUCTS
export const getAllProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("/products")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.allProducts
      })
    )
    .catch(
      dispatch({
        type: GET_PRODUCTS,
        payload: {}
      })
    );
};

//PRODUCT LOADING
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};

//GET SINGLE PRODUCT BY ID
export const getProductById = id => dispatch => {
  dispatch(setProductLoading());
  axios
    .get(`/product/${id}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data.product
      })
    )
    .catch(
      dispatch({
        type: GET_PRODUCT,
        payload: {}
      })
    );
};

export const getToatalCartQty = () => dispatch => {
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

export const getCartTotalPrice = () => dispatch => {
  dispatch(setProductLoading());
};
