import React from "react";
import { Slide, Heading, Code } from "spectacle";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawGreeting from "!!raw-loader!../../examples/PropsGreeting/Greeting";
import LiveCode from "../../helpers/LiveCode";

export const GreetingCode = () => (
  <Slide>
    <Heading style={{ marginBottom: "15px" }}>
      <Code textSize={60}>Greeting.jsx</Code>
    </Heading>
    <LiveCode rawCode={rawGreeting} lang="jsx" textSize={24} />
  </Slide>
);
