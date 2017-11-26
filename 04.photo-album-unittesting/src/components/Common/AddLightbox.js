/// This is the enhance component
import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

const addLightbox = (WrappedComponent) => {
  return class AddLightbox extends React.Component {
    state = {
      lightboxOpen: false,
      lightboxCurrentImage: 0,
    }
  
    handlePlay = () => {
      this.setState({
        lightboxOpen: true
      });
    }
  
    onLightboxClose = () => {
      this.setState({ 
        lightboxOpen: false,
        lightboxCurrentImage: 0,
      });
    }
  
    gotoNextImage = () => {
      this.setState({
        lightboxCurrentImage: this.state.lightboxCurrentImage + 1,
      });
    }
  
    gotoPreviousImage = () => {
      this.setState({
        lightboxCurrentImage: this.state.lightboxCurrentImage - 1,
      });
    }
  
    render() {
      const { lightboxOpen, lightboxCurrentImage } = this.state;
      const { photos } = this.props;
      const lightboxPhotos = 
        photos
          .filter(photo => photo)
          .map(photo => {
            return {
              src: photo.url,
              caption: photo.title,
            }
          });
  
      return (
        <div onClick={() => this.handlePlay()} >
          <WrappedComponent 
            {...this.props} 
          />
          <Lightbox
            backdropClosesModal
            images={lightboxPhotos}
            isOpen={lightboxOpen}
            onClose={() => this.onLightboxClose()}
            onClickPrev={() => this.gotoPreviousImage()}
            onClickNext={() => this.gotoNextImage()}
            currentImage={lightboxCurrentImage}
            onClickImage={() => {}} // Added to avoid warning message https://github.com/jossmac/react-images/issues/171
          />
        </div>
      );
    }

    static propTypes = {      
      photos: PropTypes.array.isRequired,
    }
  }
};

export default addLightbox;