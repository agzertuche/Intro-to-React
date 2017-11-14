import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import * as api from '../../api';
import { AlbumList } from '../Album';
import { PhotoList } from '../Photo';
import Login from '../Login';
import { Message } from 'semantic-ui-react'

class Main extends Component {
  state = {
    albums: {},
    photos: {}
  }

  componentWillMount() {
    // If there is no data in local storage, get data from api
    const localAlbums = localStorage.getItem('albums');
    const localPhotos = localStorage.getItem('photos');

    if(localAlbums && localPhotos) {
      this.setState({
        albums: JSON.parse(localAlbums),
        photos: JSON.parse(localPhotos)
      });
    } else {
      this.setState({
        albums: api.getAlbums(),
        photos: api.getPhotos(),
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      'albums',JSON.stringify(nextState.albums)
    );

    localStorage.setItem(
      'photos',JSON.stringify(nextState.photos)
    );
  }

  // createAlbum =(album) => {
  //   const albums = {...this.state.albums};
  //   const timestamp = Date.now();
  //   albums[`album-${timestamp}`] = album;
  //   this.setState({
  //     albums
  //   });
  // }

  editAlbum = (key, updatedAlbum) => {
    const albums = {...this.state.albums};
    albums[key] = updatedAlbum;
    this.setState({
      albums
    });
  }

  deleteAlbum = (key) => {
    const albums = {...this.state.albums};
    delete albums[key];
    this.setState({
      albums
    });
  }

  createPhoto =(photo) => {
    const photos = {...this.state.photos};
    const timestamp = Date.now();
    photos[`photo-${timestamp}`] = photo;
    this.setState({
      photos
    });
  }

  editPhoto = (key, updatedPhoto) => {
    const photos = {...this.state.photos};
    photos[key] = updatedPhoto;
    this.setState({
      photos
    });
  }

  deletePhoto = (key) => {
    const photos = {...this.state.photos};
    delete photos[key];
    this.setState({
      photos
    });
  }

  render() {
    const { albums, photos } = this.state;

    const photoList = () => <PhotoList
                        photos={photos}
                        deletePhoto={this.deletePhoto}
                        editPhoto={this.editPhoto}
                        createPhoto={this.createPhoto}
                      />;

    const error = () => <Message
                    icon="warning circle"
                    header="Ups... Error!"
                    content="Please go back and try again."
                  />;
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/albums" component={AlbumList} />
        <Route path="/photos" render={photoList} />
        <Route path="/login" render={Login} />
        <Route render={error} />
      </Switch>
    );
  }
}

export default Main;