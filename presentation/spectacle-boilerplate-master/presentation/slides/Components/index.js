import React from "react";
import { Heading, Slide, Text, Image, Notes, List, ListItem } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  components: require("../../../assets/components.png"),
};

preloader(images);


export default (
  <Slide bgColor="primary">
    <Heading size={2}  lineHeight={1} textColor="secondary">
      Components
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" textSize="1em" >
      Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="1em">Stateful:</ListItem>
        Can maintain internal data and have the ability to change it.
      <ListItem margin="0.5em 0 0 0" textSize="1em">Stateless:</ListItem>
        Calculates its internal state but it never change it.
    </List>
    <Image src={images.components} width="30%" />
    <Notes>When a component's state data changes, the rendered markup will be updated by re-invoking render()</Notes>
  </Slide>
);