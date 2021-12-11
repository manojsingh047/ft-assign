import { useContext } from "react";
import { Link } from "react-router-dom";
import { actions, store } from "../state/state";

function Cart() {
  const { state, dispatch } = useContext(store);

  const cartItemsEle = state.cartItems.map((item) => (
    <div className="cart-item" key={item.productId}>
      <h3>{item.productId}</h3>
      <h3>{item.brand}</h3>
      <p>{item.additionalInfo}</p>
      <p
        onClick={() => {
          dispatch({
            type: actions.REMOVE_ITEMS_FROM_CART,
            payload: item.productId,
          });
        }}
      >
        remove from cart
      </p>

      <div className="cart-item-image"></div>
    </div>
  ));
  return (
    <div className="cart-container">
      <Link to="/">Back</Link>
      <div className="cart-header">Cart Items</div>
      <div className="cart-body">{cartItemsEle}</div>
    </div>
  );
}

export default Cart;
