import { useCallback } from "react";
import { useStateValue } from "../components/state";
import { setProductsCnt } from "../components/state/products/actions";
// import { SET_PRODUCTS_CNT } from "../components/state/products/actions";
export const useProduct = () => {
  const { state, dispatch } = useStateValue();
  const setVisibleProductsCnt = useCallback(() => {
    dispatch(setProductsCnt());
  }, [dispatch]);

  return {
    productState: state.productsState,
    setVisibleProductsCnt,
  };
};
