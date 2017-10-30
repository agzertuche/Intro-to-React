import React from 'react';
import PropTypes from 'prop-types';
import Photo, { PhotoForm } from '../Photo';
import { Card } from 'semantic-ui-react'
import StatusBar from '../StatusBar';
import { DeleteButton } from '../Common';

const PhotoList = (props) => {
  const { photos, deletePhoto, editPhoto, createPhoto } = props;
  
  const renderPhoto = () => {
    return (
      Object.keys(photos)
      .map(key => {
        const photo = photos[key];

        return (
          <Photo 
            key={key} 
            photo={photo}
            deletePhoto={deletePhoto}
            editPhoto={editPhoto}
          >
            <PhotoForm 
              formType='Edit'
              photo={photo}
              index={key}
              editPhoto={editPhoto} 
            />
            <DeleteButton
              index={key}
              objectName={photo.title}
              deleteObject={deletePhoto}
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
          createPhoto={createPhoto} 
        />
      </StatusBar>
      <Card.Group itemsPerRow={6} doubling>
        {renderPhoto()}
      </Card.Group>
    </div>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.object.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  editPhoto: PropTypes.func.isRequired,
  createPhoto: PropTypes.func.isRequired,
};

export default PhotoList;