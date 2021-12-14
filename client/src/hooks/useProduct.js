import { useCallback } from "react";
import { useStateValue } from "../components/state";
import { setProductsCnt } from "../components/state/products/actions";
export const useProduct = () => {
  const { state, dispatch } = useStateValue();
  const setVisibleProductsCnt = useCallback(() => {
    dispatch(setProductsCnt());
  }, [dispatch]);

  return {
    productsState: state.productsState,
    setVisibleProductsCnt,
  };
};
