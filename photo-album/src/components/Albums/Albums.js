import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Album, { AlbumForm } from '../Common/Album';
import { Card } from 'semantic-ui-react'
import StatusBar from '../StatusBar';

class Albums extends Component {
  state = { }

  renderAlbum = (key) => {
    const { albums, photos } = this.props;
    const album = albums[key];
    const albumPhotos = album.idsPhotos
                        .map(id => {
                          return photos[id];
                        });

    return (
      <Album 
        key={key} 
        size="tiny"
        {...album}
        photos={albumPhotos}
      />
    );
  };

  createAlbum = (e) => {
    console.log('Album Created', e);
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <AlbumForm createAlbum={this.createAlbum} />
        <StatusBar />
        <Card.Group itemsPerRow={4} doubling>
          {
            Object.keys(albums)
            .map(key => {
              return this.renderAlbum(key);
            })
          }
        </Card.Group>
      </div>
    );
  }

  static propTypes = {
    albums: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired,
  };
}

export default Albums;