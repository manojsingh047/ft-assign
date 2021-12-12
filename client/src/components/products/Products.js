import { useCallback, useContext } from "react";
import useProducts from "../../hooks/useProducts";
import ProductItem from "../product-item/ProductItem";
import { actions, store } from "../state/state";
import VirtualInfiniteScroll from "../virtual-infinite-scroll/VirtualInfiniteScroll";
import "./Products.css";

function Products() {
  const { data: products, isLoading } = useProducts();
  const { state, dispatch } = useContext(store);

  const handleLastRow = useCallback(() => {
    dispatch({ type: actions.SET_PRODUCTS_CNT });
  }, [dispatch]);

  if (isLoading) {
    return <div className="loader text-center">Loading...</div>;
  }

  const productsInRange = products.slice(0, state.productsLimit);

  const renderedProducts = productsInRange.map((product) => (
    <ProductItem product={product} />
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
