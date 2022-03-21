import React from "react";
import "./carticon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/ShoppingBag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cartAction";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCart()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
