import React from "react";
import useRenderTracker from "../useRenderTracker";
import SingleContext from "./SingleContext";

// live-code-helper:include:start
export const UpdateSingleContext = React.memo(() => {
  const renderCount = useRenderTracker();
  const { setValue } = React.useContext(SingleContext);

  return (
    <div>
      <div>Updater Rendered {renderCount} times</div>
      <button onClick={() => setValue(42)}>Set to 42</button>
    </div>
  );
});
// live-code-helper:include:end
