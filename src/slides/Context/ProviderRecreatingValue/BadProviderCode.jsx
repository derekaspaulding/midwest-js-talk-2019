import React from "react";
import { Slide } from "spectacle";
import LiveCode from "../../../helpers/LiveCode";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../../examples/ProviderRecreatingValue/BadProvider";

export const BadProviderCode = () => (
  <Slide>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={20} />
  </Slide>
);
