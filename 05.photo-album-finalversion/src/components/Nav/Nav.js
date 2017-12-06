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
];

const Nav = () => {
  const renderMenuItems = (item) => {
    return (
      <Menu.Item
        position={item.position}
        name={item.name}
        key={item.name}
        as={NavLink}
        to={`/${item.to || item.name}`}
        icon={item.icon || ''}
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
      <Menu.Item
        position='right'
        as={NavLink}
        to='/auth'
        icon='cogs'
      />
    </Menu>
  );
}

export default Nav;