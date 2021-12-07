import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import VirtualInfiniteScroll from "../virtual-infinite-scroll/VirtualInfiniteScroll";
import "./Products.css";

const PRODUCTS_CNT = 20;

function Products() {
  const { data: products, isLoading } = useProducts();

  const [productsLimit, setProductsLimit] = useState(PRODUCTS_CNT);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log({ products });
  const handleLastRow = () => {
    setProductsLimit(productsLimit + PRODUCTS_CNT);
  };

  const productsInRange = products.slice(0, productsLimit);

  const renderedProducts = productsInRange.map((product) => (
    <div className="product border" key={product.productId}>
      <h3>{product.productId}</h3>
      <h3>{product.brand}</h3>
      <p>{product.additionalInfo}</p>
      <p className="product-add-cart pointer">Add to cart</p>
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
