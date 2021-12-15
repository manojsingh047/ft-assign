import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../cart-item/CartItem";
import "./Cart.css";
function Cart() {
  const {
    cartState: { cartItems },
  } = useCart();
  const total = useMemo(() => {
    return cartItems.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty flex items-center flex-column">
        <h2>Your cart is empty</h2>
        <Link to="/">
          <h3>Continue shopping</h3>
        </Link>
      </div>
    );
  }

  const cartItemsEle = cartItems.map((product) => (
    <CartItem key={product.productId} product={product} />
  ));
  return (
    <>
      <h4 className="cart-back">
        <Link to="/">Back</Link>
      </h4>
      <div className="cart-container flex flex-column items-center">
        <h2 className="text-center">Cart Items, Total Price - Rs {total}</h2>
        <div className="cart-body">{cartItemsEle}</div>
      </div>
    </>
  );
}

export default Cart;
