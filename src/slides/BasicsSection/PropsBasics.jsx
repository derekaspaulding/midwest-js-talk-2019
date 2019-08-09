import React from "react";
import { Slide, Heading, List } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const PropsBasics = () => (
  <Slide>
    <Heading size={4} textColor="tertiary">
      Component Properties (Props)
    </Heading>
    <List>
      <ListItemAppear>
        Simplest way to share data between components
      </ListItemAppear>
      <ListItemAppear>
        Changing prop value always* causes the component to update
      </ListItemAppear>
      <ListItemAppear>Data flows from parent to child</ListItemAppear>
      <List>
        <ListItemAppear>
          Known as <strong>One Way Data Binding</strong>
        </ListItemAppear>
      </List>
    </List>
  </Slide>
);
