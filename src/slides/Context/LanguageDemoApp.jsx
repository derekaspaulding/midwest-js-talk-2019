import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import rawLanguageApp from "!!raw-loader!../../examples/LanguageContext/App";
import { Slide } from "spectacle";
import LiveCode from "../../helpers/LiveCode";

export const LanguageDemoApp = () => (
  <Slide>
    <LiveCode rawCode={rawLanguageApp} lang="jsx" textSize={24} />
  </Slide>
);
