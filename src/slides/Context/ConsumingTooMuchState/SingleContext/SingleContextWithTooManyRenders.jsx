import React from "react";
import { Slide } from "spectacle";
import { ProvideValueAndUpdater } from "../../../../examples/ContextObservingTooMuchState/SingleContext/SingleContextProvider";

export const SingleContextWithTooManyRenders = () => (
  <Slide>
    <ProvideValueAndUpdater />
  </Slide>
);
