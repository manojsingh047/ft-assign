import { useQuery } from "react-query";
import { ENDPOINTS } from "../constants/Endpoints";

const getProducts = async () => {
  const response = await fetch(ENDPOINTS.products);
  const productsData = await response.json();
  return productsData.products;
};

export default function useProducts() {
  return useQuery("products", getProducts, {
    staleTime: Infinity,
  });
}
