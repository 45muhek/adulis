import axios from "axios";

import { GET_PRODUCTS, PRODUCT_LOADING } from "./Types";

//GET ALL PRODUCTS
export const getAllProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get("/products")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
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
