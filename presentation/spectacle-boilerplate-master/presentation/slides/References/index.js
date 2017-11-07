import React from "react";
import { Heading, Slide, Link, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      References
    </Heading>
    <List textColor="tertiary">
      <ListItem>
        <Link textColor="white" href="https://reactjs.org/docs/hello-world.html">
          React Docs
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="white" href="https://www.slideshare.net/nikgraf/react-redux-introduction">
          React + Redux Introduction
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="white" href="https://www.slideshare.net/jaisanth/react-js">
          React js
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="white" href="https://www.youtube.com/watch?v=mLMfx8BEt8g">
          How React.js Works
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="white" href="https://calendar.perfplanet.com/2013/diff/">
          React’s diff algorithm
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="white" href="https://www.kirupa.com/react/introducing_react.htm">
            Introducing React
        </Link>
      </ListItem>
    </List>
  </Slide>
);
