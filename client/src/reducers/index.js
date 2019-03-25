import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
});
