import React, { createContext } from "react";

const PRODUCTS_CNT = 20;

const initialState = {
  productsLimit: PRODUCTS_CNT,
  cartItems: [],
};

export const store = createContext(initialState);

export const actions = {
  SET_PRODUCTS_CNT: "SET_PRODUCTS_CNT",
  ADD_ITEMS_TO_CART: "ADD_ITEMS_TO_CART",
  REMOVE_ITEMS_FROM_CART: "REMOVE_ITEMS_FROM_CART",
};

const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case actions.SET_PRODUCTS_CNT:
        return {
          ...state,
          productsLimit: state.productsLimit + PRODUCTS_CNT,
        };
      case actions.ADD_ITEMS_TO_CART:
        const isAlreadyInCart = state.cartItems.some(
          (item) => item.productId === action.payload.productId
        );
        if (isAlreadyInCart) {
          return state;
        }
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case actions.REMOVE_ITEMS_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.productId !== action.payload
          ),
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
