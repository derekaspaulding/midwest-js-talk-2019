import React from "react";
import { Slide, Heading, List } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const ContextAdvantages = () => (
  <Slide>
    <Heading size={2} textColor="tertiary">
      Context Advantages
    </Heading>
    <List>
      <ListItemAppear>Built into React</ListItemAppear>
      <ListItemAppear>Easy to Scope State</ListItemAppear>
      <ListItemAppear>Relatively little boilerplate</ListItemAppear>
      <ListItemAppear>Performant</ListItemAppear>
    </List>
  </Slide>
);
