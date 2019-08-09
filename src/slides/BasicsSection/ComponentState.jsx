import React from "react";
import { Slide, Heading, List, Code } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const ComponentState = () => (
  <Slide>
    <Heading size={4} textColor="tertiary">
      Component State
    </Heading>
    <List textSize={32}>
      <ListItemAppear>Simplest form of state</ListItemAppear>
      <ListItemAppear>Changes trigger the component to update</ListItemAppear>
      <List>
        <ListItemAppear>
          This also causes all children of the component to update
        </ListItemAppear>
      </List>
      <ListItemAppear>Building block for all application state</ListItemAppear>
      <ListItemAppear>Two ways to use it</ListItemAppear>
      <List>
        <ListItemAppear>
          <Code>setState</Code> class method
        </ListItemAppear>
        <ListItemAppear>
          <Code>useState</Code> hook
        </ListItemAppear>
      </List>
    </List>
  </Slide>
);
