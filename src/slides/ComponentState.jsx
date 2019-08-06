import React from "react";
import { Slide, Heading, List, Code } from "spectacle";
import ListItemAppear from "../helpers/ListItemAppear";

export const ComponentState = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Component State
    </Heading>
    <List textSize={32}>
      <ListItemAppear>Simplest form of state</ListItemAppear>
      <ListItemAppear>Triggers the component to update</ListItemAppear>
      <ListItemAppear>Building block for all application state</ListItemAppear>
      <ListItemAppear>Two ways to use it</ListItemAppear>
      <List>
        <ListItemAppear>
          <Code>useState</Code> hook
        </ListItemAppear>
        <ListItemAppear>
          <Code>setState</Code> class method
        </ListItemAppear>
      </List>
    </List>
  </Slide>
);
