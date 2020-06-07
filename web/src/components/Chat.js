import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Message } from "./Message";
import io from "socket.io-client";

export class Chat extends Component {
  socket = io.connect("http://localhost:3001");

  state = {
    message: "",
    chat: [],
    username: this.props.match.params.username,
    roomName: this.props.match.params.roomName,
  };

  onChange = (e) => {
    this.setState({ message: e.target.value });
  };

  componentDidMount() {
    this.socket.on(this.state.roomName, ({ username, message }) => {
      this.setState({
        chat: [...this.state.chat, { username, message }],
      });
    });
  }

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ username, message }, idx) => (
      <Message
        username={username === this.state.username ? "You" : username}
        msg={message}
        key={idx}
      />
    ));
  }

  onClick = (e) => {
    const { username, message } = this.state;
    this.socket.emit(this.state.roomName, { message, username });
    this.setState({ message: "" });
  };

  render() {
    const roomName = "Welcome To " + this.props.match.params.roomName;
    let users = [];
    return (
      <div style={{ height: "70%" }}>
        <div id="welcome" className="container h-100">
          <div className="card h-100 text-center contain-chat mx-auto">
            <div
              style={{ backgroundColor: "#82c4c3" }}
              className="card-header d-flex flex-row justify-content-between"
            >
              <p className="m-0">{roomName}</p>
              <Link to="/" className="btn btn-primary btn-sm">
                Leave
              </Link>
            </div>
            <div className="card-body d-flex flex-row p-0">
              <div className="list-of-users px-3 py-1 d-none d-sm-block">
                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-users"></i>
                  <p className="mb-0 ml-1">Users</p>
                </div>

                <ul>
                  {users.map((user) => (
                    <li>{user}</li>
                  ))}
                </ul>
              </div>
              <div className="chat py-1 px-3">{this.renderChat()}</div>
            </div>
            <div
              style={{ backgroundColor: "#82c4c3" }}
              className="card-footer text-muted"
            >
              <div className="d-flex flex-row justify-content-between">
                <input
                  style={{ width: "75%" }}
                  className="pl-1"
                  type="text"
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  placeholder="Enter Your Message"
                />
                <button
                  style={{ width: "20%" }}
                  className="btn btn-primary btn-sm"
                  onClick={this.onClick}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
