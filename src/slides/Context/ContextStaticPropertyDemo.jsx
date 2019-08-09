import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../examples/LanguageContext/StaticContextTypeGreeting";
import { Slide, Heading } from "spectacle";
import LiveCode from "../../helpers/LiveCode";

export const ContextStaticPropertyDemo = () => (
  <Slide>
    <Heading size={6} style={{ marginBottom: "10px" }} textAlign="left">
      Static contextType Class Property
    </Heading>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={24} />
  </Slide>
);
