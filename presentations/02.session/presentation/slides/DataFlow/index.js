import React from "react";
import { Heading, Slide, Text, Image, List, ListItem} from "spectacle";

const images = {
  dataFlow: require("../../../assets/data-flow.svg"),
};

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Redux Data Flow
    </Heading>
    <List margin="2em 0 0" textColor="tertiary">      
      <ListItem textSize="1em">Call store.dispatch(action)</ListItem>
      <ListItem textSize="1em">The store calls the reducer function</ListItem>
      <ListItem textSize="1em">The root reducer combine multiple reducers into a single state tree.</ListItem>
      <ListItem textSize="1em">The store saves the complete state tree returned by the root reducer.</ListItem>      
    </List>
    <Image src={images.dataFlow} width="30em" margin="2em 0 0 0" />
  </Slide>
);
