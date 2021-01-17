import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
