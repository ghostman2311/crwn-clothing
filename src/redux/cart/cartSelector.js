import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const cartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const cartItemsCount = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
