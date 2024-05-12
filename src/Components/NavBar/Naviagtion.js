import React, { Component } from "react";
import "./NavBar.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar_component">
        Navigation
        <div className="navbar_logo"></div>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">Banglore</div>
        </div>
        <div className="navbar_searchmain">
            <div></div>
            <div className="navbar_searchbar" input="text"></div>
            <div></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
