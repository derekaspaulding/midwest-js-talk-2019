import React from "react";
import { Slide, List, Heading } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const SubTreeState = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Sub-Tree State
    </Heading>
    <List>
      <ListItemAppear>
        More than global state, but try to push down to component state
      </ListItemAppear>
      <ListItemAppear>
        Manage either through props or through lower level contexts
      </ListItemAppear>
      <ListItemAppear>It's okay to do some prop drilling</ListItemAppear>
      <ListItemAppear>
        Can include API requests if the data is unique to a small slice of the
        app
      </ListItemAppear>
    </List>
  </Slide>
);
