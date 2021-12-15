export const ADD_ITEMS_TO_CART = "cart/ADD_ITEMS_TO_CART";
export const REMOVE_ITEMS_FROM_CART = "cart/REMOVE_ITEMS_FROM_CART";

export const addItemsToCart = (product) => ({
  type: ADD_ITEMS_TO_CART,
  payload: product,
});

export const removeItemsFromCart = (productId) => ({
  type: REMOVE_ITEMS_FROM_CART,
  payload: productId,
});
