import { useCallback } from "react";
import { useStateValue } from "../components/state";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../components/state/cart/actions";
export const useCart = () => {
  const { state, dispatch } = useStateValue();
  const setCartItem = useCallback(
    (cartItem) => {
      dispatch(addItemsToCart(cartItem));
    },
    [dispatch]
  );
  const removeCartItem = useCallback(
    (id) => {
      dispatch(removeItemsFromCart(id));
    },
    [dispatch]
  );

  return {
    cartState: state.cartState,
    setCartItem,
    removeCartItem,
  };
};
