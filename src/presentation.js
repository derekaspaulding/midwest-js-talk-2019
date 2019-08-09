// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide, Heading, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import {
  OneWayDataBindingExampleSlide,
  WhyIsStateHardSlide,
  OneWayDataBinding,
  PresentationTitle,
  Basics,
  ComponentState,
  ClassSetState,
  HookSetState,
  PropsBasics,
  GreetingCode,
  GreetingDemo,
  NameInputCode,
  ContextBasics,
  LanguageDemo
} from "./slides";
import { LanguageDemoApp } from "./slides/Context/LanguageDemoApp";
import { ContextHookDemo } from "./slides/Context/ContextHookDemo";
import { ContextRenderPropDemo } from "./slides/Context/ContextRenderPropDemo";
import { ContextStaticPropertyDemo } from "./slides/Context/ContextStaticPropertyDemo";
import { ContextPerformanceDemo } from "./slides/Context/PerformanceDemo";
import { ContextAdvantages } from "./slides/Context/ContextAdvantages";
import { ContextGotchas } from "./slides/Context/ContextGotchas";
import { ExampleDisclaimer } from "./slides/ExampleDisclaimer";
import { Motivations } from "./slides/Motivations";
import { ProviderRecreatingValueDemo } from "./slides/Context/ProviderRecreatingValue/ProviderRecreatingValueDemo";
import { ProviderRecreatingValueDemoFixed } from "./slides/Context/ProviderRecreatingValue/ProviderRecreatingValueDemoFixed";
import { RenderTrackingConsumerCode } from "./slides/Context/ProviderRecreatingValue/RenderTrackingConsumerCode";
import { BadProviderCode } from "./slides/Context/ProviderRecreatingValue/BadProviderCode";
import { GoodProviderCode } from "./slides/Context/ProviderRecreatingValue/GoodProviderCode";
import { SingleContextWithTooManyRenders } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextWithTooManyRenders";
import { SingleContextProviderCode } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextProviderCode";
import { SingleContextProviderDisplayCode } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextProviderDisplayCode";
import { SingleContextProviderUpdaterCode } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextProviderUpdaterCode";
import { SingleContextProviderUpdaterWithContainerCode } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextProviderUpdaterWithContainerCode";
import { SingleContextProviderWithContainerCode } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextProviderWithContainerCode";
import { SingleContextFixed } from "./slides/Context/ConsumingTooMuchState/SingleContext/SingleContextFixed";

import boredGif from "./memes/bored.gif";
import { WhyUseALibrary } from "./slides/StateManagementLibraries/WhyUseALibrary";
import { LibraryTradeoffs } from "./slides/StateManagementLibraries/LibraryTradeoffs";
import { LibraryOptions } from "./slides/StateManagementLibraries/LibraryOptions";
import { TestingPyramid } from "./slides/WhereToPutState/TestingPyramid";
import { StatePyramid } from "./slides/WhereToPutState/StatePyramid";
import { GlobalState } from "./slides/WhereToPutState/GlobalState";
import { SubTreeState } from "./slides/WhereToPutState/SubTreeState";
import { ComponentStateLevel } from "./slides/WhereToPutState/ComponentState";
import { Thanks } from "./slides/Thanks";
import { MotivationsRecap } from "./slides/MotivationsRecap";

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
    <ExampleDisclaimer />
    {/* Hacky workaround to make Appear components work when splitting slides into separate components
     * See: https://github.com/FormidableLabs/spectacle/issues/340 */}
    {Motivations()}
    <Basics />
    {ComponentState()}
    <ClassSetState />
    <HookSetState />
    {PropsBasics()}
    {/* <OneWayDataBinding /> */}
    {/* <OneWayDataBindingExampleSlide /> */}
    <GreetingDemo />
    <GreetingCode />
    <NameInputCode />

    <Slide bgColor="secondary">
      <Image src={boredGif} height="750px" />
    </Slide>

    <Slide bgColor="secondary">
      <Heading>Complex State</Heading>
    </Slide>

    {WhyIsStateHardSlide()}
    {ContextBasics()}
    <LanguageDemo />
    <LanguageDemoApp />
    <ContextHookDemo />
    <ContextRenderPropDemo />
    <ContextStaticPropertyDemo />
    {ContextAdvantages()}
    {ContextGotchas()}
    <RenderTrackingConsumerCode />
    <BadProviderCode />
    <ProviderRecreatingValueDemo />
    <GoodProviderCode />
    <ProviderRecreatingValueDemoFixed />
    <SingleContextProviderCode />
    <SingleContextProviderDisplayCode />
    <SingleContextProviderUpdaterCode />
    <SingleContextWithTooManyRenders />
    <SingleContextProviderUpdaterWithContainerCode />
    <SingleContextProviderWithContainerCode />
    <SingleContextFixed />

    <Slide bgColor="secondary">
      <Heading>State Management Libraries</Heading>
    </Slide>

    {WhyUseALibrary()}
    {LibraryTradeoffs()}
    <LibraryOptions />

    <Slide bgColor="secondary">
      <Heading>How to choose where to put state?</Heading>
    </Slide>
    <TestingPyramid />
    <StatePyramid />
    {GlobalState()}
    {SubTreeState()}
    {ComponentStateLevel()}
    <MotivationsRecap />
    <Thanks />
  </Deck>
);

export default Presentation;
