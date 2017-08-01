import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signOutUser } from '../../actions/index';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        You can still use the calendar...
      </div>
    );
  }
}

SignOut.propTypes = {
  signOutUser: PropTypes.func.isRequired
};

export default connect(null, { signOutUser })(SignOut);

