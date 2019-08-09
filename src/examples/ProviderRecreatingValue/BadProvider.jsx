import React from "react";
import Context from "./Context";
import RenderTrackingConsumer from "./RenderTrackingConsumer";

// live-code-helper:include:start
const BadProvider = () => {
  const [updateCount, setUpdateCount] = React.useState(0);
  const [
    providerForceRenderCount,
    setProviderForceRenderCount
  ] = React.useState(0);

  const updateContext = () => {
    setUpdateCount(updateCount + 1);
  };

  const forceRender = () => {
    setProviderForceRenderCount(providerForceRenderCount + 1);
  };

  return (
    <Context.Provider value={{ updateCount }}>
      <button onClick={updateContext}>Update Context</button>
      <button onClick={forceRender}>Force Provider Re-render</button>
      <div>Provider Force Render Count: {providerForceRenderCount}</div>
      <RenderTrackingConsumer />
    </Context.Provider>
  );
};
// live-code-helper:include:end

export default BadProvider;
