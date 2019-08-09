import React from "react";
import { Slide, Heading, List } from "spectacle";
import ListItemAppear from "../helpers/ListItemAppear";

export const Motivations = () => (
  <Slide>
    <Heading textColor="tertiary" size={3}>
      Motivations for this talk
    </Heading>
    <List>
      <ListItemAppear>
        To get a fresh look at state management in React
      </ListItemAppear>
      <ListItemAppear>
        To see some pitfalls of new state management approaches
      </ListItemAppear>
      <ListItemAppear>
        To have knowledge to make more informed decisions on which state
        management approach is best for you
      </ListItemAppear>
    </List>
  </Slide>
);
