import { useContext } from "react";
import { actions, store } from "../state/state";
import "./ProductItem.css";
function ProductItem({ product }) {
  const { dispatch } = useContext(store);

  return (
    <div
      className="product border-radius transition-duration"
      key={product.productId}
    >
      <div className="product-img">
        <img src={product.searchImage} />
      </div>
      <div className="product-info text-center">
        <p>{product.brand}</p>
        <p>
          {product.additionalInfo} ({product.productId})
        </p>
        <div className="product-price-cart flex space-bw">
          <span className="strong ">Rs {product.price}</span>
          <button
            className="border-radius product-add-cart pointer"
            onClick={() => {
              dispatch({ type: actions.ADD_ITEMS_TO_CART, payload: product });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
