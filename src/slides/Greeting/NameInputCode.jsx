import React from "react";
import { Slide, Heading, Code } from "spectacle";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawNameInput from "!!raw-loader!../../examples/PropsGreeting/NameInput";
import LiveCode from "../../helpers/LiveCode";

export const NameInputCode = () => (
  <Slide>
    <Heading style={{ marginBottom: "15px" }}>
      <Code textSize={60}>NameInput.jsx</Code>
    </Heading>
    <LiveCode rawCode={rawNameInput} lang="jsx" textSize={20} />
  </Slide>
);
