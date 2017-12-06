import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { AlbumList } from '../Album';
import { PhotoList } from '../Photo';
import Auth from '../Auth';
import { Message } from 'semantic-ui-react'
import { RequireAuth } from '../Auth';

class Main extends Component {
  renderError() {
    return (
      <Message
        icon="warning circle"
        header="Ups... Page Not Found"
        content="Our engineers didn't found what your are looking for, please try again!"
      />
    );
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/albums" component={RequireAuth(AlbumList)} />
        <Route path="/photos" component={RequireAuth(PhotoList)} />
        <Route path="/auth" component={Auth} />
        <Route render={this.renderError} />
      </Switch>
    );
  }
}

export default Main;