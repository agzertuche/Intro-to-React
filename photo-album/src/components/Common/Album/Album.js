import React from 'react';
import PropTypes from 'prop-types';
import './Album.css';
import AlbumForm from './AlbumForm';
import { Card, Icon, Image, Label, Button, Confirm } from 'semantic-ui-react'
import Lightbox from 'react-images';

class Album extends React.Component {
  state = {
    deleteConfirmOpen: false,
    editModalOpen: false,
    lightboxOpen: false,
    lightboxCurrentImage: 0,
  }

  renderPreviewImages = (albumPhotos) => {
    return (
      albumPhotos.map((photo, index) => {
        if(index < 4) {
          return <Image key={index} src={photo.url} />;
        }
      })
    );
  }

  renderTags = (tags) => {
    return (
      <Label.Group tag size='mini'>
        {
          tags.map(tagName => {
            return <Label key={tagName}>{tagName}</Label>
          })
        }
      </Label.Group>
    );
  }

  handlePlay = index => {
    this.setState({
      lightboxOpen: true
    });
  }

  handleEdit = index => {
    this.setState({
      editModalOpen: true
    });
  }

  handleDelete = index => {
    this.setState({
      deleteConfirmOpen: true
    });
  }

  onOkConfirm = () => {
    this.props.deleteAlbum(this.props.index);
  }

  onCancelConfirm = () => {
    this.setState({
      deleteConfirmOpen: false
    });
  }

  onLightboxClose = () => {
    this.setState({ 
      lightboxOpen: false,
      lightboxCurrentImage: 0,
    });
  }

  gotoNextImage = () => {
    console.log('prev' + this.state.lightboxCurrentImage);
    this.setState({
      lightboxCurrentImage: this.state.lightboxCurrentImage + 1,
    });
  }

  gotoPreviousImage = () => {
    console.log('prev' + this.state.lightboxCurrentImage);
    this.setState({
      lightboxCurrentImage: this.state.lightboxCurrentImage - 1,
    });
  }

  getAlbumPhotos = () => {
    const { album, photos } = this.props;
    return album.photosIds.map(id => { return photos[id]; });
  }

  render() {
    const { index, album, photos, editAlbum } = this.props;
    const { deleteConfirmOpen, editModalOpen, lightboxOpen, lightboxCurrentImage } = this.state;
    const albumPhotos = this.getAlbumPhotos();
    const lightboxPhotos = albumPhotos.map(photo => {
      return {
        src: photo.url,
        caption: photo.title,
      }
    });

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {album.name}
          </Card.Header>
          <Label attached='top right'>
            <Icon name='photo' /> {albumPhotos.length}
          </Label>
        </Card.Content>
        <Card.Content className="photos-container">
          <Image.Group size='tiny'>
            {this.renderPreviewImages(albumPhotos)}
          </Image.Group>
        </Card.Content>
        <Card.Content>  
          <Card.Description as='p'>
            {album.description}
          </Card.Description>
          <Card.Meta>
            {this.renderTags(album.tags)}
          </Card.Meta>
        </Card.Content>
        <Button.Group basic attached='bottom'>
          <Button icon onClick={() => this.handlePlay(index)}>
            <Icon name='play' /> 
            <Lightbox
              images={lightboxPhotos}
              isOpen={lightboxOpen}
              onClose={() => this.onLightboxClose()}
              onClickPrev={() => this.gotoPreviousImage()}
              onClickNext={() => this.gotoNextImage()}
              currentImage={lightboxCurrentImage}
            />
          </Button>
          <AlbumForm 
            formType='Edit'
            photos={photos} 
            album={album}
            index={index}
            editAlbum={editAlbum} 
          />
          <Button icon onClick={() => this.handleDelete(index)}>
            <Icon name='trash' /> 
            <Confirm 
              open={deleteConfirmOpen}
              content={`Are you sure you want to delete '${album.name}' album?`}
              cancelButton='No'
              confirmButton='Yes, delete it!'
              onCancel={() => this.onCancelConfirm()}
              onConfirm={() => this.onOkConfirm()}
            />
          </Button>
        </Button.Group>
      </Card>
    );
  }

  static propTypes = {
    index: PropTypes.string.isRequired,
    album: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired,
    deleteAlbum: PropTypes.func.isRequired,
    editAlbum: PropTypes.func.isRequired,
  }
}

export default Album;