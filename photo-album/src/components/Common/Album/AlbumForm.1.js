import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

class AlbumForm extends React.Component {
  state = {
    name: '',
    description: '',
    tags: [],
    photos: []
  }

  handleSubmit(event) {
    event.preventDefault();
    const { createAlbum } = this.props;
    // const { name, description, tags, photos } = this.state;

    const album = {
      ...this.state
    }

    createAlbum(album);
  }

  render() {
    const { photos, album } = this.props;
    const options = Object.keys(photos)
                    .map(key => {
                      const photo = photos[key];
                      return {
                        text: photo.title,
                        value: key,
                        image: { avatar: true, src: photo.url }
                      }
                    });



    return (
      <Form
        onSubmit={(e) => {this.handleSubmit(e)}}
      >
        <Form.Input
          name="name"
          label="Name" 
          placeholder="Album name"
          value={album ? album.name : ''}
          onChange={(e) => this.setState({name: e.target.value})}
          required
        />
        <Form.TextArea 
          name="description"
          label="Description" 
          placeholder="Tell more about the album..."
          value={album ? album.description : ''}
          onChange={(e) => this.setState({description: e.target.value})}
          required           
        />
        <Form.Input 
          name="tags"
          label="Tags" 
          placeholder="Enter tags separated by commas..." 
          value={album ? album.tags.join(', ') : ''}
          onChange={(e) => this.setState({tags: e.target.value})} 
          required 
          icon="tags" 
          iconPosition="left" 
        />
        <Form.Dropdown 
          name="photos"
          label="Photos" 
          placeholder="Select photos for this album" 
          value={album ? album.photosIds : ''}
          onChange={(e) => this.setState({photos: e.target.value})} 
          required  
          fluid 
          multiple 
          selection 
          options={options}
        />
        <Form.Button>Save</Form.Button>
      </Form>
    );
  }

  static propTypes = {
    createAlbum: PropTypes.func.isRequired,
    photos: PropTypes.object.isRequired,
    album:  PropTypes.object
  }
}

export default AlbumForm;
