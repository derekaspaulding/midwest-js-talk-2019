import React from "react";
import { UpdateSingleContext } from "./UpdateSingleContext";
import { ShowValueSingleContex } from "./ShowValueSingleContext";
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
      <UpdateSingleContext />
      <ShowValueSingleContex />
    </SingleContext.Provider>
  );
};
// live-code-helper:include:end
