import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'albums',
    position: null,
  },
  {
    name: 'photos',
    position: null,
  },
  {
    name: 'login',
    position: 'right',
  }
];

const Nav = () => {
  const renderMenuItems = (item) => {
    return (
      <Menu.Item 
        position={item.position}
        key={item.name}
        name={item.name}
        as={NavLink}
        to={`/${item.name}`}
      />
    );
  }

  return (
    <Menu tabular>
      <Menu.Item>
        <Header as='h3' icon='camera retro' floated='right' />  
      </Menu.Item>
      {
        Object.keys(menuItems)
        .map(item => {
          return renderMenuItems(menuItems[item]);
        })
      } 
    </Menu>
  );
}

export default Nav;