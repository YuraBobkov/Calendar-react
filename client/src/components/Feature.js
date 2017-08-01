import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions/index';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <h5>This is a feature that requires authentication to be seen!</h5>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

Feature.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  message: PropTypes.string
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, { fetchMessage })(Feature);