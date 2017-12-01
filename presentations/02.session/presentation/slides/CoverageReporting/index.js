import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Text, Image, CodePane } from "spectacle";

const images = {
  jestCoverage: require("../../../assets/jest-coverage.png"),
};

preloader(images);

const code =
` npm test -- --coverage
`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Coverage Reporting
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
      Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="1em"
    />
    <Image src={images.jestCoverage} width="20em" margin="1em 0 0 0" />    
  </Slide>
);
