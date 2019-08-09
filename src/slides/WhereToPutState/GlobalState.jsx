import React from "react";
import { Slide, List, Heading } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const GlobalState = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Global State
    </Heading>
    <List>
      <ListItemAppear>As few things as possible</ListItemAppear>
      <List>
        <ListItemAppear>
          Most likely to cause performance problems
        </ListItemAppear>
        <ListItemAppear>Hard to test consumers</ListItemAppear>
        <ListItemAppear>
          Can get very messy if too much data is here
        </ListItemAppear>
      </List>
      <ListItemAppear>
        Use 1 or more Contexts if data is relatively simple or unlikely to
        change
      </ListItemAppear>
      <ListItemAppear>
        Use state management library if changes often or is very complex data
      </ListItemAppear>
      <ListItemAppear>
        Use state management library if it integrates specifically into your
        data source
      </ListItemAppear>
    </List>
  </Slide>
);
