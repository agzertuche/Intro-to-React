import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Image, Fill, Layout } from "spectacle";

const images = {
  reactAlone: require("../../../assets/react-alone.gif"),
  reactRedux: require("../../../assets/react-redux.gif"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Heading size={2} textColor="secondary" padding="0 0 1em 0">
      React vs Redux
    </Heading>
    <Layout>
      <Fill>
        <Image bgColor="tertiary" src={images.reactAlone} width="12em" margin="-0.5em 0 0 0" />
      </Fill>
      <Fill>
        <Image bgColor="tertiary" src={images.reactRedux} width="15em" margin="-0.5em 0 0 0" />
      </Fill>
    </Layout>
  </Slide>
);