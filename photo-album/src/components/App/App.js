import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav';
import Main from '../Main';

class App extends Component {
  state = { 
    activeNavItem: 'albums',
  };

  handleNavItemClick = (e, name) => {
    this.setState({
      activeNavItem: name
    });
  };

  render() {
    const { activeNavItem } = this.state;

    return (
      <div className="App">
        <Nav
          handleNavClick={this.handleNavItemClick}
        />
        <Main
          selectedOption={activeNavItem}
        />
      </div>
    );
  }
}

export default App;
