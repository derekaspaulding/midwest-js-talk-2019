import React from "react";
import { Slide, Heading } from "spectacle";
import LiveCode from "../../helpers/LiveCode";
import OneWayDataBindingExample from "../../examples/OneWayDataBindingExample";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawOneWayDataBindingExample from "!!raw-loader!../../examples/OneWayDataBindingExample";
import KeyPress from "../../helpers/KeyPress";

export const OneWayDataBindingExampleSlide = () => (
  <Slide>
    <Heading size={4} style={{ marginBottom: "20px" }}>
      One Way Data Binding
    </Heading>
    <LiveCode rawCode={rawOneWayDataBindingExample} lang="jsx" textSize={15}>
      <div style={{ padding: "30px" }}>
        <OneWayDataBindingExample />
      </div>
    </LiveCode>
    <KeyPress />
  </Slide>
);
