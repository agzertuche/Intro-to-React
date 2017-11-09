import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={4} lineHeight={1} textColor="secondary">
      Real world apps using react
    </Heading>
    <List textColor="tertiary">
      <ListItem>https://www.facebook.com</ListItem>
      <ListItem>https://www.instagram.com</ListItem>
      <ListItem>https://www.netflix.com</ListItem>
      <ListItem>https://web.whatsapp.com</ListItem>
      <ListItem>https://www.airbnb.com</ListItem>
      <ListItem>https://go.twitch.tv</ListItem>
      <ListItem>https://outlook.live.com (BETA)</ListItem>
    </List>
  </Slide>
);
