import React from "react";
import { Slide, Heading } from "spectacle";

export const ExampleDisclaimer = () => (
  <Slide bgColor="secondary">
    <Heading textColor="tertiary" size={2}>
      Warning: Examples in this talk are for illustrative purposes only. They
      are extremely contrived and likely not directly useful to anyone.
    </Heading>
  </Slide>
);
