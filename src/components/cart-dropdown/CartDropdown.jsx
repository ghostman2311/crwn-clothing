import React from "react";
import "./cartdropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { cartItems } from "../../redux/cart/cartSelector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
const mapStateToProps = (state) => {
  return {
    cartItems: cartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
