import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <div className="App h-100 d-flex flex-column justify-content-center">
        <div className="fixed-top mt-3">
          <p className="app-name mx-2 glow">ChatterBox</p>
        </div>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Welcome />
            </React.Fragment>
          )}
        />
        <Route path="/chatRoom/:roomName/:username" component={Chat} />
      </div>
    </Router>
  );
}

export default App;
