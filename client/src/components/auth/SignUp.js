import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Input from '../Input';
import { signUpUser } from '../../actions/index';

class SignUp extends Component {
  onSubmit(props) {
    this.props.signUpUser(props);
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
          <Field
            name="passwordConfirm"
            type="password"
            label="Confirm password"
            component={Input}
          />
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign up</button>   
      </form>
    );
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

function validate(props) {
  const errors = {};

  if (!props.email) {
    errors.email = 'Please enter an email';
  }

  if (!props.password) {
    errors.password = 'Please enter a password';
  }

  if (!props.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  
  if (props.password !== props.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, { signUpUser })(reduxForm({
  form: 'signUp',
  validate
})(SignUp));