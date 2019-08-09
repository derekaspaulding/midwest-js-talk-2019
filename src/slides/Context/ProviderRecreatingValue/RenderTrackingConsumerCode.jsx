import React from "react";
import { Slide } from "spectacle";
import LiveCode from "../../../helpers/LiveCode";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../../examples/ProviderRecreatingValue/RenderTrackingConsumer";

export const RenderTrackingConsumerCode = () => (
  <Slide>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={28} />
  </Slide>
);
