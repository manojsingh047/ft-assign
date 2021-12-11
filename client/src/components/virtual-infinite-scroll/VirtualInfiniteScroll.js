import React from "react";
import VirtualElement from "../virtual-element/VirtualElement";
import InfiniteScroll from "../infinite-scroll/InfiniteScroll";

function VirtualInfiniteScroll({ items, lastRowHandler }) {
  const virtualElements = items.map((item) => (
    <VirtualElement children={item} />
  ));

  return (
    <InfiniteScroll items={virtualElements} lastRowHandler={lastRowHandler} />
  );
}

export default VirtualInfiniteScroll;
