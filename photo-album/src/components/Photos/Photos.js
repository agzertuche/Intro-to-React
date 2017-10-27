import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from '../Common/Photo';
import { Card } from 'semantic-ui-react'
import StatusBar from '../StatusBar';

class Photos extends Component {
  state = { }

  renderPhoto = (key) => {
    const photo = this.props.photos[key];

    return (
      <Photo 
        key={key} 
        {...photo}
      />
    );
  };

  render() {
    const { photos } = this.props;

    return (
      <div>
        <StatusBar photos={photos} />
        <Card.Group itemsPerRow={6} doubling>
          {
            Object.keys(photos)
            .map(key => {
              return this.renderPhoto(key);
            })
          }
        </Card.Group>
      </div>
    );
  }

  static propTypes = {
    photos: PropTypes.object.isRequired,
  };
}

export default Photos;