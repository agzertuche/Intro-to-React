import React from "react";
import { Heading, Slide, CodePane, List, ListItem } from "spectacle";

const code =
`class InputForm extends React.Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <div>
        <input name='name' placeholder='Name' type='text' value={this.state.value}
          onChange={(e) => this.handleChange(e)}>
        </input>
      </div>
    )}
}`;

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      Stateful Component
    </Heading>
    <List margin="10px 0 0" textColor="tertiary">
      <ListItem textSize="0.9em">Can maintain internal data and have the ability to change it</ListItem>
      <ListItem textSize="0.9em">Provides data</ListItem>
      <ListItem textSize="0.9em">Has living knowledge of the current state</ListItem>
      <ListItem textSize="0.9em">Renders stateless (or even stateful) child components</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.6em"
    />
  </Slide>
);
