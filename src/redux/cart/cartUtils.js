export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItemToCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItemToCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItemToCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingItemToCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
