import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { actions, store } from "../state/state";
import "./Cart.css";
function Cart() {
  const { state, dispatch } = useContext(store);

  if (state.cartItems.length === 0) {
    return (
      <div className="cart-empty flex items-center flex-column">
        <h2>Your cart is empty</h2>
        <Link to="/">
          <h3>Continue shopping</h3>
        </Link>
      </div>
    );
  }

  const cartItemsEle = state.cartItems.map((product) => (
    <CartItem key={product.productId} product={product} />
  ));
  return (
    <>
      <h4 className="cart-back">
        <Link to="/">Back</Link>
      </h4>
      <div className="cart-container flex flex-column items-center">
        <h2 className="text-center">Cart Items</h2>
        <div className="cart-body">{cartItemsEle}</div>
      </div>
    </>
  );
}

export default Cart;
