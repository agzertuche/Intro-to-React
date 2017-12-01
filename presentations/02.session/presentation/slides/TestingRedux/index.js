import React from "react";
import { Heading, Slide, Text, CodePane } from "spectacle";

const code =
` // Reducer
it('should handle ADD_ALBUM', () => {
  const action = {
    type: actionTypes.ADD_ALBUM,
    album,
    key
  }
  const result = albumReducer(initialState = {}, action);
  expect(result).toEqual({
    [key]: album,
    ...initialState
  })
});

// Action
it('should create an action to add an Album', () => {
  const expectedAction = {
    type: actionTypes.ADD_ALBUM,
    album,
    key
  }
  expect(albumActions.addAlbum(album)).toEqual(expectedAction);
});
`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Testing Redux
    </Heading>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.6em"
    />
  </Slide>
);
