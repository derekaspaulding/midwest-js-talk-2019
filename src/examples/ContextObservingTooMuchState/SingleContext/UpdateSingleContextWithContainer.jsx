import React from "react";
import useRenderTracker from "../useRenderTracker";
import SingleContext from "./SingleContext";

// live-code-helper:include:start
export const UpdateSingleContextContainer = () => {
  const { setValue } = React.useContext(SingleContext);

  return <UpdateSingleContext setValue={setValue} />;
};

const UpdateSingleContext = React.memo(({ setValue }) => {
  const renderCount = useRenderTracker();

  return (
    <div>
      <div>Updater Rendered {renderCount} times</div>
      <button onClick={() => setValue(42)}>Set to 42</button>
    </div>
  );
});
// live-code-helper:include:end
