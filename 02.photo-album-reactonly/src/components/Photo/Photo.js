import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';
import { WithLightbox } from '../Common';

const Photo = (props) => {
  const { photo } = props;

  return (
    <Card className='photo'>
      <WithLightbox photos={[photo]}>
        <Image src={photo.url} />
      </WithLightbox>
      <Card.Content>  
        <Card.Header>
          {photo.title}
        </Card.Header>
        <Card.Meta>
          {photo.description}
        </Card.Meta>
      </Card.Content>
      <Button.Group basic attached='bottom'>
        {props.children}
      </Button.Group>
    </Card>
  );
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default Photo;