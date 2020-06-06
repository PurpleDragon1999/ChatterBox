import React, { Component } from "react";

export class Message extends Component {
  render() {
    return (
      <div
        className="mt-2"
        style={{ backgroundColor: "#eeeeee", borderRadius: "0.2rem" }}
      >
        <div className="p-2">
          <p style={{ textAlign: "start" }} className="mb-0">
            <small className="justify-content-start">12:47</small>
          </p>
          <p className="mb-0" style={{ textAlign: "start" }}>
            {this.props.username}: {this.props.msg}
          </p>
        </div>
      </div>
    );
  }
}

export default Message;
