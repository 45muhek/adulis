import axios from "axios";

import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_LOADING } from "./Types";

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
