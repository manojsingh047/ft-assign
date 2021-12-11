import { useQuery } from "react-query";
import { ENDPOINTS } from "../constants/Endpoints";

const getProducts = async () => {
  const productsData = await fetch(ENDPOINTS.products);
  //todo - update endpoints to return json
  const products = await productsData.json();
  return products;
};

export default function useProducts() {
  return useQuery("products", getProducts, {
    staleTime: Infinity,
  });
}
