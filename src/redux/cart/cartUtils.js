export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (exisitingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItemFromCart) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeItemFromCart.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== removeItemFromCart.id
    );
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === removeItemFromCart.id
      ? { ...cartItems, quantity: cartItem.quantity - 1 }
      : cartItems;
  });
};
