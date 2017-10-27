import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button, Icon } from 'semantic-ui-react'

class AlbumForm extends React.Component {
  state = {
    name: '',
    description: '',
    tags: [],
    photosIds: [],
    modalOpen: false,
  }

  componentWillMount() {
    const { album } = this.props;
    if(!album) return;

    this.setState({
      ...album
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { editAlbum, createAlbum, index } = this.props;

    const album = {
      name: this.state.name,
      description: this.state.description,
      tags: this.state.tags,
      photosIds: this.state.photosIds,
    }

    if(this.isNewForm()) {
      createAlbum(album);
    } else {
      editAlbum(index, album);
    }

    this.closeForm();
  }

  showForm = () => this.setState({ modalOpen: true });
  closeForm = () => this.setState({ modalOpen: false });
  isNewForm = () => this.props.formType === 'New';

  render() {
    const { modalOpen } = this.state;
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
      <Modal 
        trigger={
          <Button icon onClick={this.showForm}>
            <Icon name={this.isNewForm() ? 'plus' : 'edit'} />
          </Button>
        }
        closeIcon 
        open={modalOpen}
        onClose={this.closeForm}
      >
        <Modal.Header>{this.isNewForm() ? 'Create Album' : `Edit: ${album.name}`}</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              name="name"
              label="Name" 
              placeholder="Album name"
              defaultValue={album ? album.name : ''}
              onChange={(e) => this.setState({name: e.target.value})}
              required
            />
            <Form.TextArea 
              name="description"
              label="Description" 
              placeholder="Tell more about the album..."
              defaultValue={album ? album.description : ''}
              onChange={(e) => this.setState({description: e.target.value})}
              required           
            />
            <Form.Input 
              name="tags"
              label="Tags" 
              placeholder="Enter tags separated by commas..." 
              defaultValue={album ? album.tags.join(', ') : ''}
              onChange={(e) => this.setState({tags: e.target.value.split(', ')})} 
              required 
              icon="tags" 
              iconPosition="left" 
            />
            <Form.Dropdown 
              name="photos"
              label="Photos" 
              placeholder="Select photos for this album" 
              defaultValue={album ? album.photosIds : ''}
              onChange={(e, data) => { 
                this.setState({
                  photosIds: data.value})
                }
              } 
              required  
              fluid 
              multiple 
              selection 
              options={options}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive icon='save' content='Save' onClick={(e) => {this.handleSubmit(e)}} />
        </Modal.Actions>
      </Modal>
    );
  }

  static propTypes = {
    formType: PropTypes.oneOf(['New', 'Edit']).isRequired,
    photos: PropTypes.object.isRequired,
    album:  PropTypes.object,
    index: PropTypes.string,
    editAlbum: PropTypes.func,
    createAlbum: PropTypes.func,
  }
}

export default AlbumForm;
