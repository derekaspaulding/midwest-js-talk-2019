import React from "react";
import useRenderTracker from "../useRenderTracker";
import SingleContext from "./SingleContext";

// live-code-helper:include:start
export const ShowValueSingleContex = () => {
  const renderCount = useRenderTracker();
  const contextValue = React.useContext(SingleContext);
  const value = contextValue === undefined ? "blah" : contextValue.value;

  return (
    <div>
      <div>Display Component Rendered {renderCount} Times</div>
      <div>Context Value: {value}</div>
    </div>
  );
};
// live-code-helper:include:end
