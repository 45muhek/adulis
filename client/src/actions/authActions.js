import { GET_ERRORS, SET_CURRENT_USER } from "./Types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/user/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/user/login", userData)
    .then(res => {
      //SAVE TO LOCALSTORAGE
      const { token } = res.data;
      //SET TOKEN TO LOCAL STORAGE
      localStorage.setItem("jwtToken", token);
      //SET TOKEN TO AUTH HEADER
      setAuthToken(token);
      //DECODE TOKEN TO GET USER DATA
      const decoded = jwt_decode(token);
      //SET CURRENT USER
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//SET LOGGED IN USER
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
