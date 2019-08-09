import React from "react";
import { Slide, Heading, List } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const LibraryTradeoffs = () => (
  <Slide>
    <Heading textColor="tertiary" size={3}>
      Library Tradeoffs
    </Heading>
    <List>
      <ListItemAppear>Most add boilerplate to your code</ListItemAppear>
      <ListItemAppear>
        Many have their own gotchas that you need to learn
      </ListItemAppear>
      <ListItemAppear>
        Can rise and fall in popularity and support
      </ListItemAppear>
      <ListItemAppear>Add some size to your bundle</ListItemAppear>
    </List>
  </Slide>
);
