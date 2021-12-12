import { useContext } from "react";
import { Link } from "react-router-dom";
import { actions, store } from "../state/state";
import "./CartItem.css";
function CartItem({ product }) {
  const { state, dispatch } = useContext(store);

  return (
    <>
      <div
        className="cartitem border-radius transition-duration flex"
        key={product.productId}
      >
        <div className="cart-img">
          <img src={product.searchImage} alt={product.additionalInfo} />
        </div>
        <div className="cart-info text-center">
          <p>{product.brand}</p>
          <p>
            {product.additionalInfo} ({product.productId})
          </p>
        </div>
        <button
          className="border-radius cart-add-cart pointer"
          onClick={() => {
            dispatch({
              type: actions.REMOVE_ITEMS_FROM_CART,
              payload: product.productId,
            });
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
