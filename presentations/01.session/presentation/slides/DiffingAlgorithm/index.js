import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import { Heading, Slide, Image, Notes, List, ListItem } from "spectacle";

const images = {
  setState: require("../../../assets/diff-algorithm-setstate.png"),
  rendered: require("../../../assets/diff-algorithm-rendered.png"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Diffing Algorithm
    </Heading>
    <Heading size={5} textAlign="right" lineHeight={1} textColor="secondary">
      Virtual DOM
    </Heading>
    <List ordered textColor="tertiary">
      <ListItem textSize="1em">Traverses the tree using breadth first search algorithm</ListItem>
      <ListItem textSize="1em">Diffs it with the old tree</ListItem>
      <ListItem textSize="1em">Computes minimal DOM mutations and queue them</ListItem>
      <ListItem textSize="1em">Executes all updates on batches</ListItem>
    </List>
    <Image src={images.setState} width="40%" margin="0 1em" />
    <Image src={images.rendered} width="40%" margin="0 1em" />
    <Notes>If a node is found to be different it will re-render the entire sub-tree,
      This ensures that a node that wasn't added to the update list, but one of its parents did, the node will be updated</Notes>
  </Slide>
);