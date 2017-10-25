import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Label } from 'semantic-ui-react'

const Album = (props) => {

  const renderTags = (tags) => {
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

  const handleCardClick = (e) => {
    console.log(e);
  }

  return (
    <Card onClick={(e) => handleCardClick(e)}>
      <Image src={props.photos[0].url} />
      <Card.Content>
        <Card.Header>
          {props.name}
        </Card.Header>
        <Card.Meta>
          {renderTags(props.tags)}
        </Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
        <Label attached='bottom right'>
          <Icon name='photo' /> {props.photos.length}
        </Label>
      </Card.Content>
    </Card>
  );
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string,
  photos: PropTypes.array.isRequired
};

export default Album;