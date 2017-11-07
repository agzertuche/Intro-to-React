import React from "react";
import { Heading, Slide, Text, CodePane, Notes } from "spectacle";

const code =
  `// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {

    ....

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}`;

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      High-Order Components
    </Heading>
    <Text textSize="1em" margin="10px 0 0" textColor="tertiary" size={1}>
      Is an advanced technique in React for reusing component logic.
      This is no a feature of React, is just a pattern.
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.6em"
    />
    <Notes>
      Concretely, a higher-order component is a function that takes a component and returns a new component.
    </Notes>
  </Slide>
);
