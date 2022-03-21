import React from "react";
import "./carticon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/ShoppingBag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
