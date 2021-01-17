import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/Selectors/cartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemCount(state),
    // cartItems: state.cart.cartItems,
    // itemCount: state.cart.cartItems.reduce(
    //   (accumalatedQuantity, cartItem) =>
    //     accumalatedQuantity + cartItem.quantity,
    //   0
    // ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
