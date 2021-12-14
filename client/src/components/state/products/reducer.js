import { SET_PRODUCTS_CNT } from "./actions";

const PRODUCTS_CNT = 20;

export const PRODUCTS_INITIAL_STATE = {
  productsLimit: PRODUCTS_CNT,
};

const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS_CNT:
      return {
        ...state,
        productsLimit: state.productsLimit + PRODUCTS_CNT,
      };
    default:
      return state;
  }
};
export default productsReducer;
