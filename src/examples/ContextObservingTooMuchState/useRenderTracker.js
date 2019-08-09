import React from "react";

export default function useRenderTracker() {
  const renderCountRef = React.useRef(0);
  renderCountRef.current = renderCountRef.current + 1;
  return renderCountRef.current;
}
