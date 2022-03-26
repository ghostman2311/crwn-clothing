import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { cartItems, selectCartTotal } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: cartItems,
});

export default connect(mapStateToProps)(Checkout);
