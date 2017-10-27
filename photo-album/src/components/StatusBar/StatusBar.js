import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StatusBar.css';
import { AlbumForm } from '../Common/Album';

class StatusBar extends Component {
  render() {
    const { photos, createAlbum } = this.props;

    return (
      <div className="StatusBar">
        <AlbumForm 
          formType='New'
          photos={photos} 
          createAlbum={createAlbum} 
        />
      </div>
    );
  }

  static propTypes = {
    photos: PropTypes.object.isRequired,
    createAlbum: PropTypes.func,
  }
}

export default StatusBar;