import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div id="welcome" className="container">
        <div className="d-flex flex-row justify-content-center mb-3">
          {/* <i className="fab fa-ello icon"></i> */}
          <p className="app-name mx-2 glow">ChatterBox</p>
          {/* <i className="fab fa-ello icon"></i> */}
        </div>

        <div className="card text-center contain mx-auto">
          <div className="card-header">Welcome To Chat Room</div>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <p className="labels d-none d-sm-block pt-2 m-0">Username</p>
              <input
                type="text"
                className="input-fields"
                id="username"
                placeholder="Enter Username"
              />
            </div>

            <div className="mt-3 d-flex justify-content-center">
              <p className="labels d-none d-sm-block pt-2 m-0">Select Room</p>
              <select name="room" className="input-fields" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <button className="btn btn-primary btn-block mt-3">Enter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
