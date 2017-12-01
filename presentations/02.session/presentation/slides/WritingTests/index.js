import React from "react";
import { Heading, Slide, Text, CodePane } from "spectacle";

const code =
`import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Writing Tests
    </Heading>
    <Text textAlign="left" textSize="0.9em" margin="20px 0 30px 0" textColor="tertiary">
      To create tests, add it() block with the name of the test and its code. 
    </Text>
    <Text textAlign="left" textSize="0.9em" margin="20px 0 30px 0" textColor="tertiary">
      You may optionally wrap them in describe() blocks for logical grouping.
    </Text>
    <Text textAlign="left" textSize="0.9em" margin="20px 0 30px 0" textColor="tertiary">
      Jest provides a built-in expect()
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.8em"
    />
  </Slide>
);
