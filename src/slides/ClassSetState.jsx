import React from "react";
import { Slide, Heading, Code } from "spectacle";
import LiveCode from "../helpers/LiveCode";
import ClassSetStateExample from "../examples/ClassSetState";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawClassSetStateExample from "!!raw-loader!../examples/ClassSetState";
import "./styles/CounterExample.css";

export const ClassSetState = () => (
  <Slide>
    <Heading size={4} textSize={60} style={{ marginBottom: "20px" }}>
      <Code textSize={60}>setState</Code> Class Method
    </Heading>
    <LiveCode rawCode={rawClassSetStateExample} lang="jsx" textSize={20}>
      <div className="example">
        <ClassSetStateExample />
      </div>
    </LiveCode>
  </Slide>
);
