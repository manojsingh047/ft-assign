import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import useProducts from "../../hooks/useProducts";
import ProductItem from "../product-item/ProductItem";
import VirtualInfiniteScroll from "../virtual-infinite-scroll/VirtualInfiniteScroll";
import "./Products.css";

function Products() {
  const [filterQuery, setFilterQuery] = useState(0);
  const { data: products, isLoading } = useProducts();
  const { productState, setVisibleProductsCnt } = useProduct();

  if (isLoading) {
    return <div className="loader text-center">Loading...</div>;
  }

  let productsInRange = products.slice(0, productState.productsLimit);

  if (filterQuery > 0) {
    productsInRange = productsInRange.filter(
      (product) => product.price > filterQuery
    );
  }

  const renderedProducts = productsInRange.map((product) => (
    <ProductItem product={product} />
  ));

  return (
    <>
      <div className="flex justify-center">
        <input
          type="number"
          placeholder="Search"
          onChange={(event) => {
            setFilterQuery(event.target.value);
          }}
          value={filterQuery}
        />
      </div>
      <div className="products-container">
        <VirtualInfiniteScroll
          items={renderedProducts}
          lastRowHandler={setVisibleProductsCnt}
        />
      </div>
    </>
  );
}

export default Products;
