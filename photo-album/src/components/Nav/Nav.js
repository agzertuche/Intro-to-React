import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { Menu } from 'semantic-ui-react';

const items = ['albums', 'photos'];

class Nav extends React.Component {
  state = {
    activeItem: 'albums'
  }

  handleItemClick = (e, name) => {
    this.setState({
      activeItem: name
    });
    this.props.handleNavClick(e, name);
  };

  renderMenuItems = (key) => {
    const { activeItem } = this.state;

    return (
      <Menu.Item 
        key={key}
        name={key}
        active={activeItem === key}
        onClick={(e) => this.handleItemClick(e, key)} 
      />
    );
  }

  render() {
    return (
      <Menu tabular>
        {
          items.map(item => {
            return this.renderMenuItems(item);
          })
        }
      </Menu>
    );
  }

  static propTypes = {
    handleNavClick: PropTypes.func.isRequired
  };
}

export default Nav;