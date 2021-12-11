import React, { useCallback, useEffect } from "react";
import { useCurrentView } from "./../../hooks/useCurrentView";

function InfiniteScroll({ items, lastRowHandler }) {
  const [setRef, isInCurrentView] = useCurrentView();
  useEffect(() => {
    // last row visible, call the last row handler
    isInCurrentView && lastRowHandler();
  }, [isInCurrentView]);

  const isLastItem = useCallback(
    (curIdx) => {
      return curIdx === items.length - 1;
    },
    [items]
  );

  return items.map((listItem, i) => {
    return (
      <div key={i} ref={isLastItem(i) ? setRef : null}>
        {listItem}
      </div>
    );
  });
}

export default InfiniteScroll;
