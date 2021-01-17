import React from "react";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">{name}</div>
      <div className="price">
        {quantity} X ${price}
      </div>
    </div>
  );
};

export default CartItem;
