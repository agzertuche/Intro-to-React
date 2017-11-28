import React from "react";
import { Heading, Slide, Text, List, ListItem, CodePane } from "spectacle";

const propsDefaultValue =
` MyComponent.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };
  MyComponent.defaultProps = {
    bar: 'My default value',
  };`;

const propExplicitlyTrue = `<Item onClick={() => doSomethingWith(item.name)} />`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Props
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      Use props to pass data and events to your components
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="0.9em">Props are read-only</ListItem>
      <ListItem textSize="0.9em">Always define explicit defaultProps for all non-required props</ListItem>
      <CodePane
        lang="jsx"
        source={propsDefaultValue}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
      <ListItem textSize="0.9em">Passing arguments to event handlers</ListItem>
      <CodePane
        lang="jsx"
        source={propExplicitlyTrue}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
    </List>
  </Slide>
);
