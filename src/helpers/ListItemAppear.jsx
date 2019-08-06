import React from "react";
import { Appear, ListItem } from "spectacle";

export default ({ children }) => (
  <Appear>
    <ListItem>{children}</ListItem>
  </Appear>
);
