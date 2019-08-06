import React from "react";
import { Slide, Heading, Code } from "spectacle";
import LiveCode from "../helpers/LiveCode";
import HookSetStateExample from "../examples/HookSetState";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawHookSetStateExample from "!!raw-loader!../examples/HookSetState";
import "./styles/CounterExample.css";

export const HookSetState = () => (
  <Slide>
    <Heading size={4} textSize={60} style={{ marginBottom: "20px" }}>
      <Code textSize={60}>useState</Code> Hook Example
    </Heading>
    <LiveCode rawCode={rawHookSetStateExample} lang="jsx" textSize={20}>
      <div className="example">
        <HookSetStateExample />
      </div>
    </LiveCode>
  </Slide>
);
