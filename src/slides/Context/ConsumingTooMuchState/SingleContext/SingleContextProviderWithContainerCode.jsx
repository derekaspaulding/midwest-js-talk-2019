import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../../../examples/ContextObservingTooMuchState/SingleContext/SingleContextProviderUsingContainer";
import { Slide } from "spectacle";
import LiveCode from "../../../../helpers/LiveCode";

export const SingleContextProviderWithContainerCode = () => (
  <Slide>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={24} />
  </Slide>
);
