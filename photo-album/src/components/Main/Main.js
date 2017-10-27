import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import samplePhotos from '../../data/samplePhotos';
import sampleAlbums from '../../data/sampleAlbums';
import Albums from '../Albums';
import Photos from '../Photos';

class Main extends Component {
  state = {
    photos: {},
    albums: {}
  }

  componentWillMount() {
    this.setState({
      photos: samplePhotos,
      albums: sampleAlbums
    });
  }

  createAlbum =(album) => {
    debugger;
    const albums = {...this.state.albums};
    const timestamp = Date.now();
    albums[`album-${timestamp}`] = album;
    this.setState({
      albums
    });
  }

  editAlbum = (key, updatedAlbum) => {
    debugger;
    const albums = {...this.state.albums};
    albums[key] = updatedAlbum;
    this.setState({
      albums
    });
  }

  deleteAlbum = (key) => {
    debugger;
    const albums = {...this.state.albums};
    delete albums[key];
    this.setState({
      albums
    });
  }

  renderContainer = (containerName) => {
    const { photos, albums } = this.state;

    switch (containerName) {
      case 'albums':
        return (
          <Albums 
            albums={albums} 
            photos={photos}
            deleteAlbum={this.deleteAlbum}
            editAlbum={this.editAlbum}
            createAlbum={this.createAlbum}
          />
        );
      case 'photos':
        return (
          <Photos 
            photos={photos} 
          />
        );
      default:
      return (
        <div>Error</div>
      );
    }
  }

  render() {
    const { selectedOption } = this.props;

    return (
      <div className="Main">
        {this.renderContainer(selectedOption)}        
      </div>
    );
  }

  static propTypes = {
    selectedOption: PropTypes.string.isRequired,
  };
}

export default Main;