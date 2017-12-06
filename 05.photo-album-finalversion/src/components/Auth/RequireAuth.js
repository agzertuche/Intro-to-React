import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.auth.isAuthenticated) {
        this.context.router.history.push('/auth');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.isAuthenticated) {
        this.context.router.history.push('/auth');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

    static propTypes = {
      auth: PropTypes.object,
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}