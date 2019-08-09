import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

export const OneWayDataBinding = () => (
  <Slide>
    <Heading size={4} textColor="tertiary">
      One Way Data Binding
    </Heading>
    <List>
      <ListItem>Data changes can only flow down the component tree</ListItem>
      <ListItem>
        If a child needs to update parent data, the parent must pass a function
        to it
      </ListItem>
      <ListItem>
        This Means that we often pass both data and change handlers down through
        many levels
      </ListItem>
    </List>
  </Slide>
);
