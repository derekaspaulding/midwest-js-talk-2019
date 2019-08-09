import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawCode from "!!raw-loader!../../examples/LanguageContext/HooksGreeting";
import { Slide, Heading } from "spectacle";
import LiveCode from "../../helpers/LiveCode";

export const ContextHookDemo = () => (
  <Slide>
    <Heading size={6} style={{ marginBottom: "10px" }} textAlign="left">
      useContext Hook
    </Heading>
    <LiveCode rawCode={rawCode} lang="jsx" textSize={24} />
  </Slide>
);
