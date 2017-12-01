import React from "react";
import { Heading, Slide, Link, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      References
    </Heading>
    <List margin="10px 0 30px 0" textColor="tertiary">      
      <ListItem textSize="1em">
        <Link textColor="white" href="https://redux.js.org/docs/basics/UsageWithReact.html">Redux Docs</Link>        
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://redux.js.org/docs/introduction/Motivation.html">Why Redux?</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentational and Container Components</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f">When do I know I’m ready for Redux?</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://css-tricks.com/learning-react-redux/">Leveling Up with React: Redux</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://facebook.github.io/jest/docs/en/getting-started.html">Jest Docs</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests">Running Tests</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="http://airbnb.io/enzyme/">Enzyme Docs</Link>
      </ListItem>
      <ListItem textSize="1em">
        <Link textColor="white" href="https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f">Testing React components with Jest and Enzyme</Link>
      </ListItem>
    </List>
  </Slide>
);
