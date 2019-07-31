// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import {
  OneWayDataBindingExampleSlide,
  WhyIsStateHardSlide,
  OneWayDataBinding,
  PresentationTitle,
  Basics,
  ComponentState
} from "./slides";

// Require CSS
require("normalize.css");
require("./global.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const Presentation = () => (
  <Deck
    transition={["fade"]}
    transitionDuration={500}
    theme={theme}
    contentWidth={1200}
    contentHeight={900}
  >
    <PresentationTitle />
    {/* Hacky workaround to make Appear components work when splitting slides into separate components
     * See: https://github.com/FormidableLabs/spectacle/issues/340 */}
    {WhyIsStateHardSlide()}
    <OneWayDataBinding />
    <OneWayDataBindingExampleSlide />
    <Basics />
    <ComponentState />
  </Deck>
);

export default Presentation;
