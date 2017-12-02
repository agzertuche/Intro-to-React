import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Text, Image } from "spectacle";

const images = {
  reduxLogo: require("../../../assets/redux-logo.svg"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Image src={images.reduxLogo} width="16em" margin="-1em 0 0 0" />
    <Heading size={2} caps textColor="secondary" padding="0 0 0.5em 0">
      React-Redux
    </Heading>
    <Text margin="10px 0 0 0" textColor="tertiary" size={1} >
      Predictable state container for JavaScript apps.
    </Text>
  </Slide>
);