import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Album from '../Common/Album';
import { Card } from 'semantic-ui-react'
import StatusBar from '../StatusBar';

class Albums extends Component {
  state = { 
    deleteConfirmOpen: false,
  }

  renderAlbum = (key) => {
    const { albums, photos, deleteAlbum, editAlbum } = this.props;
    const album = albums[key];
    
    return (
      <Album 
        key={key} 
        index={key}
        size="tiny"
        album={album}
        photos={photos}
        deleteAlbum={deleteAlbum}
        editAlbum={editAlbum}
      />
    );
  }

  createAlbum = (e) => {
    console.log('Album Created', e);
  }

  render() {
    const { albums, photos, createAlbum } = this.props;

    return (
      <div>
        <StatusBar photos={photos} createAlbum={createAlbum} />
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
    deleteAlbum: PropTypes.func.isRequired,
    editAlbum: PropTypes.func.isRequired,
    createAlbum: PropTypes.func.isRequired,
  };
}

export default Albums;