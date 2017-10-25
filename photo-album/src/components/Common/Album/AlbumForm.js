import React from 'react';
import PropTypes from 'prop-types';

class AlbumForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const album = {
      name: this.name.value,
      description: this.description.value,
      tags: this.tags.value,
      photos: this.photos.value,
    }

    this.props.createAlbum(album);
    this.albumForm.reset();
  }

  render() {
    return (
      <form 
        ref={(input) => this.albumForm = input} 
        onSubmit={(e) => {this.handleSubmit(e)}}
      >
        <input ref={(input) => this.name = input} type="text" placeholder="Name"/> 
        <input ref={(input) => this.description = input} type="text" placeholder="Description"/>
        <input ref={(input) => this.tags = input} type="text" placeholder="Tags"/> 
        <input ref={(input) => this.photos = input} type="text" placeholder="Photos"/> 
        <button type="submit">Create Album</button>
      </form>
    );
  }

  static propTypes = {
    createAlbum: PropTypes.func.isRequired
  }
}

export default AlbumForm;