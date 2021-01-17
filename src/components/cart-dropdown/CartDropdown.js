import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItem } from "../../redux/Selectors/cartSelectors";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItem(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
