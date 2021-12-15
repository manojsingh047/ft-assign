import { useCallback } from "react";
import { useStateValue } from "../state";
import { setProductsCnt } from "../state/products/actions";
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
