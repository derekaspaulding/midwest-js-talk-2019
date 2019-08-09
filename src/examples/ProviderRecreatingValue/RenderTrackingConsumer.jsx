import React from "react";
import Context from "./Context";

// live-code-helper:include:start
const RenderTrackingConsumer = React.memo(() => {
  const renderCountRef = React.useRef(0);
  renderCountRef.current = renderCountRef.current + 1;

  const { updateCount } = React.useContext(Context);

  return (
    <div>
      <div>Context Update Count: {updateCount}</div>
      <div>Consumer Render Count: {renderCountRef.current}</div>
    </div>
  );
});
// live-code-helper:include:end

export default RenderTrackingConsumer;
