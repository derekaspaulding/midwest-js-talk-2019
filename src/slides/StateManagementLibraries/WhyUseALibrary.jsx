import React from "react";
import { List, Slide, Heading } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const WhyUseALibrary = () => (
  <Slide>
    <Heading textColor="tertiary" size={3}>
      Why Use a Library
    </Heading>
    <List>
      <ListItemAppear>
        Many solve or provide helpers to solve the issues I outlined with
        context
      </ListItemAppear>
      <ListItemAppear>
        Additonal tools to help make common tasks easier
      </ListItemAppear>
      <List>
        <ListItemAppear>Dev tools</ListItemAppear>
        <ListItemAppear>Middleware</ListItemAppear>
      </List>
      <ListItemAppear>Can be highly specialized</ListItemAppear>
      <List>
        <ListItemAppear>E.g. Apollo for GraphQL</ListItemAppear>
      </List>
    </List>
  </Slide>
);
