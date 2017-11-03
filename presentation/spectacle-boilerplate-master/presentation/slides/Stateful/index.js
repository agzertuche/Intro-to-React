import React from "react";
import { Heading, Slide, Text, Link, CodePane, Appear } from "spectacle";

const code =
`class InputForm extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <div>
        <input
          name='name'
          placeholder='Name'
          type='text'
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}>
        </input>
      </div>
    )
  }
}`;

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      Stateful Component
    </Heading>
    <Text textSize="1em" margin="10px 0 0" textColor="tertiary">
      Containers
      Drives state changes through functions
      Provides data (i.e. from http layers)
      Has living knowledge of the current state
      Is informed by stateless components when something needs to change
      Renders stateless (or even stateful) child components
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="1em"
    />
  </Slide>
);