import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

const SignOut = (props) => {
  const { signOut } = props;

  return (
    <Grid centered stackable>
      <Grid.Row >
        <Grid.Column textAlign='center'>
          <Button basic size='large' color='red' onClick={() => signOut()}>
            <Icon name='sign out' />
            Sign out
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(authActions.signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);