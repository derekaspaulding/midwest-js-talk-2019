import React from "react";
import { Slide, List, ListItem, Heading, Appear } from "spectacle";

export const WhyIsStateHardSlide = () => (
  <Slide>
    <Heading size={3} textColor="tertiary">
      Why is React State Hard?
    </Heading>
    <List>
      <Appear>
        <ListItem bold>
          Data can have many different shapes
          <List>
            <Appear>
              <ListItem bold={false}>
                Inherently means there is no single solution
              </ListItem>
            </Appear>

            <Appear>
              <ListItem bold={false}>
                Difficult to create patterns for all possible uses
              </ListItem>
            </Appear>
          </List>
        </ListItem>
      </Appear>

      <Appear>
        <ListItem bold style={{ marginTop: "50px" }}>
          Component Model Makes Sharing Data Among Siblings Non-Trivial
          <List>
            <Appear>
              <ListItem bold={false}>
                Components are really good at managing a small slice of the
                application
              </ListItem>
            </Appear>
            <Appear>
              <ListItem bold={false}>
                Components should be small, but this means we pass data through
                multiple components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem bold={false}>One Way Data Binding</ListItem>
            </Appear>
          </List>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
