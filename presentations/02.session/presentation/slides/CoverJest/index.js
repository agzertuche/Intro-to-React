import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Text, Image } from "spectacle";

const images = {
  jestLogo: require("../../../assets/jest-logo.svg"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Image src={images.jestLogo} width="12em" margin="-0.5em 0 0 0" />
    <Heading size={4} caps textColor="secondary" padding="1.5em 0 0.5em 0">
      Jest Unit Testing
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} >
      Delightful JavaScript Testing
    </Text>
  </Slide>
);