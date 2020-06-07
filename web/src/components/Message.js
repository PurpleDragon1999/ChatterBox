import React, { Component } from "react";
import PropTypes from "prop-types";

export class Message extends Component {
  render() {
    if (this.props.username === "ChatterBox") {
      return (
        <div>
          <p style={{ textAlign: "start" }} className="mb-2">
            <small>{this.props.time}</small> {this.props.msg}
          </p>
        </div>
      );
    }
    return (
      <div
        className="mt-2"
        style={{ backgroundColor: "#eeeeee", borderRadius: "0.2rem" }}
      >
        <div className="p-2">
          <p style={{ textAlign: "start" }} className="mb-0">
            <small className="justify-content-start">
              {this.props.username} {this.props.time}
            </small>
          </p>
          <p className="mb-0" style={{ textAlign: "start" }}>
            {this.props.msg}
          </p>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Message;
