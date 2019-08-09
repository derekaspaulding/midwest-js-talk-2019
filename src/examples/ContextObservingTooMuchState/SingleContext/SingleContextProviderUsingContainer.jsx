import React from "react";
import { ShowValueSingleContex } from "./ShowValueSingleContext";
import { UpdateSingleContextContainer } from "./UpdateSingleContextWithContainer";
import SingleContext from "./SingleContext";

// live-code-helper:include:start
export const ProvideValueAndUpdater = () => {
  const [state, setState] = React.useState({
    value: 0,
    setValue: value => {
      setState({ ...state, value });
    }
  });

  return (
    <SingleContext.Provider value={state}>
      <UpdateSingleContextContainer />
      <ShowValueSingleContex />
    </SingleContext.Provider>
  );
};
// live-code-helper:include:end
