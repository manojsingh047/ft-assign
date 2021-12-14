import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer";

const reducers = ({ cartState, productsState }, action) => ({
  cartState: cartReducer(cartState, action),
  productsState: productsReducer(productsState, action),
});

export default reducers;
