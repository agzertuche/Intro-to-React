import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react'
import './StatusBar.css';

const StatusBar = (props) => {
  const { title, children } = props;
  return (
    <Grid columns={2} className='status-bar'>
      <Grid.Column>
        <Segment basic>
          {title}
        </Segment>
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Segment basic >
          {children}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default StatusBar;