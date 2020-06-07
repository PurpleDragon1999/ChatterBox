import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Welcome extends Component {
  state = {
    username: "",
    room: "Javascript",
  };
  onChange = (e) => {
    let temp = e.target.value;
    this.setState({ [e.target.name]: temp });
  };

  render() {
    return (
      <div id="welcome" className="container">
        <div className="card text-center contain mx-auto">
          <div style={{ backgroundColor: "#82c4c3" }} className="card-header">
            Welcome To Chat Room
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <p className="labels d-none d-sm-block pt-2 m-0">Username</p>
              <input
                type="text"
                className="input-fields"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Enter Username"
              />
            </div>

            <div className="mt-3 d-flex justify-content-center">
              <p className="labels d-none d-sm-block pt-2 m-0">Select Room</p>
              <select
                name="room"
                className="input-fields"
                value={this.state.room}
                onChange={this.onChange}
                id="room"
              >
                <option value="JavaScript">Javascript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <Link
              to={`/chatRoom/${this.state.room}/${this.state.username}`}
              className="btn btn-primary btn-block mt-3"
            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
