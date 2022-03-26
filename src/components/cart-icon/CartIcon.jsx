import React from "react";
import "./carticon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/ShoppingBag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cartAction";
import { cartItemsCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemsCount, toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {
//     itemsCount: cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     ),
//   };
// };

// const mapStateToProps = (state) => {
//   return { itemsCount: cartItemsCount(state) };
// };

const mapStateToProps = createStructuredSelector({
  itemsCount: cartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
