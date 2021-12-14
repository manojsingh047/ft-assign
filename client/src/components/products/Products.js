import { useProduct } from "../../hooks/useProduct";
import useProducts from "../../hooks/useProducts";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import ProductItem from "../product-item/ProductItem";
import VirtualInfiniteScroll from "../virtual-infinite-scroll/VirtualInfiniteScroll";
import "./Products.css";

function Products() {
  const { data: products, isLoading, isError } = useProducts();
  const {
    productsState: { productsLimit },
    setVisibleProductsCnt,
  } = useProduct();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  let productsInRange = products.slice(0, productsLimit);

  const renderedProducts = productsInRange.map((product) => (
    <ProductItem product={product} />
  ));

  return (
    <div className="products-container">
      <VirtualInfiniteScroll
        items={renderedProducts}
        lastRowHandler={setVisibleProductsCnt}
      />
    </div>
  );
}

export default Products;
