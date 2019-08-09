import React from "react";
import { Slide, Heading, List, ListItem, Code } from "spectacle";

export const MotivationsRecap = () => (
  <Slide>
    <Heading textColor="tertiary" size={4}>
      Recap: Motivations for this talk
    </Heading>
    <List>
      <ListItem>To get a fresh look at state management in React</ListItem>
      <List>
        <ListItem>Saw new context API</ListItem>
        <ListItem>Saw a lot of examples of state with hooks</ListItem>
      </List>
      <ListItem>
        To see some pitfalls of new state management approaches
      </ListItem>
      <List>
        <ListItem>Saw gotchas to context</ListItem>
        <ListItem>
          Saw some solutions to the 2 most common mistakes people make
        </ListItem>
      </List>
      <ListItem>
        To have knowledge to make more informed decisions on which state
        management approach is best for you
      </ListItem>
      <List>
        <ListItem>Reviewed the usage of common libraries</ListItem>
        <ListItem>Discussed tradeoffs to using or not using a library</ListItem>
        <ListItem>
          Framed state management decisions in a similar mindset to testing
          decisions
        </ListItem>
      </List>
    </List>
  </Slide>
);
