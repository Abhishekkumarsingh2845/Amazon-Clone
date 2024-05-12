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
          <div className="navbar_location">Bangalore</div>
        </div>
        <div className="navbar__searchcomponent">
           <div>
            <select className="nav_dropdown">
            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
            </select>
            </div>   
          <div>
            <input type="text" className="navbar_searchbox" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
