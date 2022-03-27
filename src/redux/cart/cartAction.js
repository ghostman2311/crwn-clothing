import { cartActionTypes } from "./cartActionTypes";

export const toggleCart = () => {
  return {
    type: cartActionTypes.TOGGLE_CART,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};
