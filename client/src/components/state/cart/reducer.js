import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART } from "./actions";

export const CART_INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      const isAlreadyInCart = state.cartItems.some(
        (item) => item.productId === action.payload.productId
      );
      if (isAlreadyInCart) {
        return state;
      }
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
