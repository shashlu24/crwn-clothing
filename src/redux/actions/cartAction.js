import { actionTypes } from "./actionTypes";

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => {
  return {
    type: actionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
