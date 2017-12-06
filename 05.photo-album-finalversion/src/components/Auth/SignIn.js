import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

const SignIn = (props) => {
  const { signInWithFacebook, signInWithGitHub } = props;

  return (
    <Grid centered stackable>
      <Grid.Row >
        <Grid.Column textAlign='center'>
          <Button size='large' color='facebook' onClick={() => signInWithFacebook()}>
            <Icon name='facebook' /> facebook
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Button size='large' color='blue' onClick={() => signInWithGitHub()}>
            <Icon name='github' /> github
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

SignIn.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGitHub: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInWithFacebook: () => dispatch(authActions.signInWithFacebook()),
    signInWithGitHub: () => dispatch(authActions.signInWithGitHub()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);