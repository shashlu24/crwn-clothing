import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-checkout -button/StripeCheckoutButton";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/Selectors/cartSelectors";
import "./Checkout.scss";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
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
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} />;
      })}

      <div className="checkout-container">
        <div className="total">
          <div className="total-pay">TOTAL : ${total}</div>
        </div>
        <div className="test-warning">
          <div className="warning-test">
            Please use the Following Test Card For Successful checkout
            <br />
            4242-4242-4242-4242 Exp:01/24 CVV:123
          </div>
        </div>
        <div className="paynow-btn">
          <div className="pay-button">
            <StripeCheckoutButton price={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
