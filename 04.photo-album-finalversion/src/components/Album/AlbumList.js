import React from 'react';
import Album, { AlbumForm } from '../Album';
import { Card, Button, Icon } from 'semantic-ui-react'
import StatusBar from '../StatusBar';
import { WithLightbox, DeleteButton } from '../Common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as albumActionsCreators from '../../actions/albumActionsCreators';

const AlbumList = (props) => {
  const { albums, photos } = props;

  const getAlbumPhotos = (album) => {
    return album.photosIds
      .filter(id => photos[id])
      .map(id => {
        return photos[id];
      }
    );
  }

  const renderAlbums = () => {
    const { albumActions } = props;
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
            />
            <DeleteButton
              index={key}
              objectName={album.name}
              deleteObject={albumActions.deleteAlbum}
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
        />
      </StatusBar>
      <Card.Group itemsPerRow={4} doubling>
        {renderAlbums()}
      </Card.Group>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    photos: state.photos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    albumActions: bindActionCreators(albumActionsCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);