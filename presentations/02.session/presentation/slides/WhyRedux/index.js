import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";

const images = {
  whyRedux: require("../../../assets/why-redux.svg"),
};

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Why Redux?
    </Heading>
    <Text textAlign="left" textSize="1em" margin="10px 0 0" textColor="tertiary">
       As your App keeps changing and growing, it's state will be harder to mantain, and you could lost control over the when, why, and how of its state.
    </Text>
    <Image src={images.whyRedux} width="20em" margin="1em 0 0 0" />
    <Text textSize="1em" margin="10px 0 0" textColor="tertiary">
       This is where Redux comes in handy. Redux offers a solution of storing all your application state in one place. 
    </Text>
  </Slide>
);
