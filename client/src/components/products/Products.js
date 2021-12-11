import { useContext, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { actions, store } from "../state/state";
import VirtualInfiniteScroll from "../virtual-infinite-scroll/VirtualInfiniteScroll";
import "./Products.css";

function Products() {
  const { data: products, isLoading } = useProducts();
  const { state, dispatch } = useContext(store);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log({ products });
  const handleLastRow = () => {
    dispatch({ type: actions.SET_PRODUCTS_CNT });
  };

  const productsInRange = (products || []).slice(0, state.productsLimit);

  const renderedProducts = productsInRange.map((product) => (
    <div className="product border" key={product.productId}>
      <h3>{product.productId}</h3>
      <h3>{product.brand}</h3>
      <p>{product.additionalInfo}</p>
      <p
        className="product-add-cart pointer"
        onClick={() => {
          dispatch({ type: actions.ADD_ITEMS_TO_CART, payload: product });
        }}
      >
        Add to cart
      </p>
    </div>
  ));

  return (
    <div className="products-container">
      <VirtualInfiniteScroll
        onLastRow={handleLastRow}
        items={renderedProducts}
        lastRowHandler={handleLastRow}
      />
    </div>
  );
}

export default Products;
