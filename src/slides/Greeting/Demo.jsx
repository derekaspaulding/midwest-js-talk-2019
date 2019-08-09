import React from "react";
import { Slide, Heading } from "spectacle";
import Greeting from "../../examples/PropsGreeting/Greeting";

export const Demo = () => (
  <Slide>
    <Heading textSize={60} style={{ marginBottom: "25px" }}>
      Greeting Component Example
    </Heading>
    <Greeting />
  </Slide>
);
