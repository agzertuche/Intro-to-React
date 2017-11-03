import React from "react";
import { Heading, Slide, Text, Link, CodePane, Appear } from "spectacle";

const code =
`...
  return (
    <div className="app">
      <MyCustomButton kind="primary">
        Hello World!
      </MyCustomButton>
    </div>
  );
...`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      JSX
    </Heading>
    <Text textSize="1em" margin="10px 0 0" textColor="tertiary">
      It is a syntax extension to JavaScript. JSX may remind you XML, but it comes with the full power of JavaScript.
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="1em"
    />
  </Slide>
);