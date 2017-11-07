import React from "react";
import { Heading, Slide, Text, Image, Notes, List, ListItem, Layout, Fill } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  components: require("../../../assets/components.png"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Heading margin="0 0 0.2em 0" size={2} lineHeight={1} textColor="secondary">
      Components
    </Heading>
    <Text textAlign="left" margin="0 0 0.5em 0" textColor="tertiary" >
      Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
    </Text>
    <Layout>
      <Fill>
        <Image src={images.components} width="80%" />
      </Fill>
      <Fill>
        <List textColor="tertiary">
          <ListItem>Stateful</ListItem>
          <ListItem>Stateless</ListItem>
        </List>
      </Fill>
    </Layout>
    <Notes>When a component's state data changes, the rendered markup will be updated by re-invoking render()</Notes>
  </Slide>
);
