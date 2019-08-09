import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../examples/LanguageContext/RenderPropGreeting";
import { Slide, Heading } from "spectacle";
import LiveCode from "../../helpers/LiveCode";

export const ContextRenderPropDemo = () => (
  <Slide>
    <Heading size={6} style={{ marginBottom: "10px" }} textAlign="left">
      Consumer componet with Render Prop
    </Heading>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={24} />
  </Slide>
);
