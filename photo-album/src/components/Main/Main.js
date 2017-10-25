import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import Albums from '../Albums';
import Photos from '../Photos';

class Main extends Component {
  state = { }

  renderContainer = (containerName) => {
    const { photos, albums } = this.props;

    switch (containerName) {
      case 'albums':
        return (
          <Albums 
            albums={albums} 
            photos={photos}
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
    albums: PropTypes.object,
    photos: PropTypes.object
  };

  static defaultProps = {
    selectedOption: "albums",
  };
}

export default Main;