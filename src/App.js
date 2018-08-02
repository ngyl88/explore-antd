import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./AntDesign.css";
import "./App.css";
import Navbar from "./Components/NavbarGridGutterResponsive";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
