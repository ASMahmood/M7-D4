import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  dismissError: () =>
    dispatch({
      type: "TOGGLE_ERROR",
      payload: false,
    }),
});

class ErrorAlert extends Component {
  render() {
    if (this.props.error.show === true) {
      return (
        <Alert
          variant="danger"
          dismissible
          onClose={() => this.props.dismissError()}
        >
          <Alert.Heading>
            Ah fuck! You got error code {this.props.error.errCode}
          </Alert.Heading>
          <hr />
          {this.props.error.errMessage}
        </Alert>
      );
    } else {
      return <></>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
