import React from "react";
import { useCurrentView } from "../../hooks/useCurrentView";

function VirtualElement({ children }) {
  const [setRef, isInCurrentView] = useCurrentView();
  return (
    <div className="virtual-child" ref={setRef}>
      {isInCurrentView ? children : null}
    </div>
  );
}

export default VirtualElement;
