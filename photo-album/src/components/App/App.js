import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav';
import Main from '../Main';
import samplePhotos from '../../data/samplePhotos';
import sampleAlbums from '../../data/sampleAlbums';

class App extends Component {
  state = { 
    activeNavItem: 'albums',
    photos: {},
    albums: {}
  };

  componentWillMount() {
    this.setState({
      photos: samplePhotos,
      albums: sampleAlbums
    });
  }

  handleNavItemClick = (e, name) => {
    this.setState({
      activeNavItem: name
    });
  };

  render() {
    const { activeNavItem, photos, albums } = this.state;

    return (
      <div className="App">
        <Nav
          handleNavClick={this.handleNavItemClick}
        />
        <Main
          selectedOption={activeNavItem}
          photos={photos}
          albums={albums}
        />
      </div>
    );
  }
}

export default App;
