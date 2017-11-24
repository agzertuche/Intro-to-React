import React from 'react';
import Photo, { PhotoForm } from '../Photo';
import { Card } from 'semantic-ui-react'
import StatusBar from '../StatusBar';
import { DeleteButton } from '../Common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as photoActions from '../../actions/photoActions';

const PhotoList = (props) => {
  const { photos } = props;

  const renderPhoto = () => {
    const { photoActions } = props;
    return (
      Object.keys(photos)
      .map(key => {
        const photo = photos[key];

        return (
          <Photo
            key={key}
            photo={photo}
          >
            <PhotoForm
              formType='Edit'
              photo={photo}
              index={key}
            />
            <DeleteButton
              index={key}
              objectName={photo.title}
              deleteObject={photoActions.deletePhoto}
            />
          </Photo>
        );
      })
    );
  };

  return (
    <div>
      <StatusBar title={`${Object.keys(photos).length} Photo(s) total`}>
        <PhotoForm
          formType='New'
        />
      </StatusBar>
      <Card.Group itemsPerRow={6} doubling>
        {renderPhoto()}
      </Card.Group>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    photoActions: bindActionCreators(photoActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);