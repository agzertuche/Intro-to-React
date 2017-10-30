import React from 'react';
import PropTypes from 'prop-types';
import Album, { AlbumForm } from '../Album';
import { Card, Button, Icon } from 'semantic-ui-react'
import StatusBar from '../StatusBar';
import { WithLightbox, DeleteButton } from '../Common';

const AlbumList = (props) => {
  const { albums, photos, deleteAlbum, editAlbum, createAlbum } = props;

  const getAlbumPhotos = (album) => {
    return album.photosIds
      .filter(id => photos[id])
      .map(id => {
        return photos[id]; 
      }
    );
  }
  
  const renderAlbums = () => {
    return (
      Object.keys(albums)
      .map(key => {
        const album = albums[key];
        const albumPhotos = getAlbumPhotos(album);

        return (
          <Album 
            key={key} 
            album={album}
            albumPhotos={albumPhotos}
          >
            <Button icon>
              <WithLightbox 
                photos={albumPhotos} 
              >
                <Icon name='play' />
              </WithLightbox>
              
            </Button>
            <AlbumForm 
              formType='Edit'
              index={key}
              album={album}
              photos={photos}
              editAlbum={editAlbum}
            />
            <DeleteButton
              index={key}
              objectName={album.name}
              deleteObject={deleteAlbum}
            />   
          </Album>
        );
      })
    );
  }

  return (
    <div>
      <StatusBar title={`${Object.keys(albums).length} Album(s) total`}>
        <AlbumForm 
          formType='New'
          photos={photos} 
          createAlbum={createAlbum} 
        />
      </StatusBar>
      <Card.Group itemsPerRow={4} doubling>
        {renderAlbums()}
      </Card.Group>
    </div>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
  deleteAlbum: PropTypes.func.isRequired,
  editAlbum: PropTypes.func.isRequired,
  createAlbum: PropTypes.func.isRequired,
};

export default AlbumList;