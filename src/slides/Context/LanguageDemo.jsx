import React from "react";
import App from "../../examples/LanguageContext/App";
import { Slide, Heading } from "spectacle";

export const LanguageDemo = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Langauge Context Demo
    </Heading>
    <div style={{ marginTop: "50px" }}>
      <App />
    </div>
  </Slide>
);
