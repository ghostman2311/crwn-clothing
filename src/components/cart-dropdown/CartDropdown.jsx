import React from "react";
import "./cartdropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { cartItems } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cartAction";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(history);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
// const mapStateToProps = (state) => {
//   return {
//     cartItems: cartItems(state),
//   };
// };

const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
