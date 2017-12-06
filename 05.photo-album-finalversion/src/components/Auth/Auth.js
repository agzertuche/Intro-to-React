import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../Auth';
import './Auth.css';

const Auth = (props) => {
  const { auth } = props;

  return (
    <div className="auth">
      { auth.isAuthenticated ?
        <SignOut />
        :
        <SignIn />
      }
    </div>
  );
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Auth);