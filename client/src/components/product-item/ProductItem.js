import { useCart } from "../../hooks/useCart";
import "./ProductItem.css";
function ProductItem({ product }) {
  const { setCartItem } = useCart();

  return (
    <div
      className="product border-radius transition-duration"
      key={product.productId}
    >
      <div className="product-img">
        <img src={product.searchImage} alt={product.additionalInfo} />
      </div>
      <div className="product-info text-center">
        <p>{product.brand}</p>
        <p>
          {product.additionalInfo} ({product.productId})
        </p>
        <div className="product-price-cart flex space-around">
          <span className="strong ">Rs {product.price}</span>
          <button
            className="border-radius product-add-cart pointer"
            onClick={() => {
              setCartItem(product);
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
