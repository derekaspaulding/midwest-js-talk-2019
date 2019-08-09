import React from "react";
import { Slide, Heading, List, ListItem, Appear, Code } from "spectacle";
import ListItemAppear from "../../helpers/ListItemAppear";

export const ContextGotchas = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Context Gotchas and Downsides
    </Heading>
    <List>
      <ListItemAppear>
        If multiple providers are rendered, the nearest one's value is used
      </ListItemAppear>
      <ListItemAppear>
        Lose some dev tooling such as Redux dev tools
      </ListItemAppear>
      <Appear>
        <div>
          <ListItem>
            Everything under your provider will re-render when the value changes
          </ListItem>
          <List>
            <ListItem>
              Unless you prevent it with <Code>React.memo</Code> or{" "}
              <Code>shouldComponentUpdate</Code>
            </ListItem>
          </List>
        </div>
      </Appear>
      <ListItemAppear>Can have unnecessary re-renders</ListItemAppear>
      <List>
        <ListItemAppear>
          Provider re-creating objects when the values haven't changed
        </ListItemAppear>
        <ListItemAppear>
          Consumer that is observing more state than it needs to
        </ListItemAppear>
      </List>
    </List>
  </Slide>
);
