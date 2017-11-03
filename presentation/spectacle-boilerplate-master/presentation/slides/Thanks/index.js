import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Text, Image, Table, TableRow, TableItem } from "spectacle";

const images = {
  reactLogo: require("../../../assets/react-logo.svg"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Image src={images.reactLogo} width="20em" margin="-0.5em 0 0 0" />
    <Heading size={2} caps textColor="secondary" padding="0 0 0.5em 0">
      React
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      JavaScript Library for building user interfaces
    </Text>
  </Slide>
);