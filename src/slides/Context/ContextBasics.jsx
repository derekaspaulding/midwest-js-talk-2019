import React from "react";
import { Slide, List, Heading, Code } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const ContextBasics = () => (
  <Slide>
    <Heading>React Context</Heading>
    <List>
      <ListItemAppear>Built into React</ListItemAppear>
      <List>
        <ListItemAppear>
          Stable API released with React 16.3.0 in March 2018
        </ListItemAppear>
      </List>

      <ListItemAppear>
        Lets us <strong>provide</strong> a value to children
      </ListItemAppear>
      <ListItemAppear>
        Children at any level can <strong>consume</strong> the value
      </ListItemAppear>
      <ListItemAppear>
        Any time the provided value changes, all children are updated
      </ListItemAppear>
      <ListItemAppear>3 Syntax Variants</ListItemAppear>
      <List>
        <ListItemAppear>
          <Code>useContext</Code> Hook
        </ListItemAppear>
        <ListItemAppear>
          <Code>Consumer</Code> component render prop
        </ListItemAppear>
        <ListItemAppear>
          <Code>static contextType</Code> class property
        </ListItemAppear>
      </List>
    </List>
  </Slide>
);
