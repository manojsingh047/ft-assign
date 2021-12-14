import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

const { Provider } = StateContext;

export const StateProvider = ({ reducers, initialState, children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStateValue = () => useContext(StateContext);
