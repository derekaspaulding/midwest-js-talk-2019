import React from "react";
import { Slide, List, Heading } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const ComponentStateLevel = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      ComponentState
    </Heading>
    <List>
      <ListItemAppear>As much state as possible should be here</ListItemAppear>
      <ListItemAppear>
        This could include state that is passed to a "Presentational" component
        through props
      </ListItemAppear>
      <ListItemAppear>Small Components</ListItemAppear>
      <ListItemAppear>Easiest to test</ListItemAppear>
    </List>
  </Slide>
);
