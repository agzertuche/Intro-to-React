import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button, Icon, Message } from 'semantic-ui-react'

class PhotoForm extends React.Component {
  state = {
    error: false,
    modalOpen: false,
    photo: {
      title: '',
      description: '',
      url: '',
    }
  }

  handleInputChange = (name, value) => {
    const { photo } = this.state;
    const updatedPhoto = {
      ...photo,
      [name]: value
    }

    this.setState({
      photo: updatedPhoto
    });
  }

  isFormValid = () => {
    const { photo } = this.state;
    let isValid = true;

    if(!photo
      || !photo.title
      || !photo.description
      || !photo.url
    ) {
      isValid = false;
    }

    this.setState({
      error: !isValid
    });

    return isValid;
  }

  handleSubmit = (event) => {
    if(!this.isFormValid()) return;

    const { editPhoto, createPhoto, index } = this.props;
    const { photo } = this.state;

    if(this.isNewForm()) {
      createPhoto(photo);
    } else {
      editPhoto(index, photo);
    }

    this.closeForm();
  }

  showForm = () => {
    const { photo } = this.props;
    this.setState({ 
      modalOpen: true,
      photo,
   });
  }

  closeForm = () => this.setState({ modalOpen: false });
  isNewForm = () => this.props.formType === 'New';

  render() {
    const { modalOpen, photo, error } = this.state;
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
        <Modal.Header>{this.isNewForm() ? 'Add Photo' : `Edit: ${photo.title}`}</Modal.Header>
        <Modal.Content>
          <Form error={error}>
            <Message
              error
              content='Fill out all fields and try again...'
            />
            <Form.Input
              name="title"
              label="Title" 
              placeholder="Photo title"
              defaultValue={this.isNewForm() ? '' : photo.title}
              onChange={(e) => this.handleInputChange(e.target.name, e.target.value)}
              required
            />
            <Form.TextArea 
              name="description"
              label="Description" 
              placeholder="Tell more about the photo..."
              defaultValue={this.isNewForm() ? '' : photo.description}
              onChange={(e) => this.handleInputChange(e.target.name, e.target.value)}
              required           
            />
            <Form.Input 
              name="url"
              label="URL" 
              placeholder="URL of the photo"
              defaultValue={this.isNewForm() ? '' : photo.url}
              onChange={(e) => this.handleInputChange(e.target.name, e.target.value)}
              required           
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
    index: PropTypes.string,
    editPhoto: PropTypes.func,
    createPhoto: PropTypes.func,
  }
}

export default PhotoForm;
