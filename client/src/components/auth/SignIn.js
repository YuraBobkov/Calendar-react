import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/index';

import Input from '../Input';

class SignIn extends Component {
  onSubmit(props) {
    this.props.signInUser(props);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field 
            name="email"
            type="email"
            label="Email"
            component={Input}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, { signInUser })(reduxForm({
  form: 'signIn'
})(SignIn));