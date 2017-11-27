import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

const Login = (props) => {
  const { signInWithFacebook, signInWithGitHub, signOut, user } = props;

  const renderLogin = () => {
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

  const renderLogout = () => {
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

  return (    
    <div>
      { user.uid ?
        renderLogout()
        :        
        renderLogin()
      }  
    </div>    
  );
}

Login.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGitHub: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,  
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInWithFacebook: () => dispatch(authActions.signInWithFacebook()),
    signInWithGitHub: () => dispatch(authActions.signInWithGitHub()),
    signOut: () => dispatch(authActions.signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);