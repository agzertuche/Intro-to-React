import React from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import './Photo.css';

const Photo = (props) => {
  return (
    <Card>
      <Image src={props.url} />
      <Card.Content extra>
        <span>{props.title}</span>
        <Label attached='bottom right'><Icon name='eye' /> {props.viewCount}</Label>
      </Card.Content>
    </Card>
  );
}

export default Photo;
