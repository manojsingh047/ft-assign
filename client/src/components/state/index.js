import React, { createContext, useContext, useReducer } from "react";
import { CART_INITIAL_STATE } from "./cart/reducer";
import { PRODUCTS_INITIAL_STATE } from "./products/reducer";

export const APP_INITIAL_STATE = {
  productsState: PRODUCTS_INITIAL_STATE,
  cartState: CART_INITIAL_STATE,
};

export const StateContext = createContext({});

const { Provider } = StateContext;

export const StateProvider = ({ reducers, initialState, children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStateValue = () => useContext(StateContext);
