import React from "react";
import { Heading, Slide, Text, Layout, Fill, Link } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Learn by Practice
    </Heading>
    <Text margin="5em 0 2em 0" textColor="tertiary" size={1}>
      Let's build a Photo Album App!
    </Text>
    <Layout >
      <Fill>
        <Link textColor="white" href="https://github.com/agzertuche/Intro-to-React/tree/master/mockups">
          Mockups
        </Link>
      </Fill>
      <Fill>
        <Link textColor="white" href="https://github.com/agzertuche/Intro-to-React">
          Demo
        </Link>
      </Fill>
    </Layout>
  </Slide>
);
