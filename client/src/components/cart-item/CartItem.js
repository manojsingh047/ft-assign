import { useCart } from "../../hooks/useCart";
import "./CartItem.css";
function CartItem({ product }) {
  const { removeCartItem } = useCart();

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
          <p className="strong ">Rs {product.price}</p>
        </div>
        <button
          className="border-radius cart-add-cart pointer"
          onClick={() => {
            removeCartItem(product.productId);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
