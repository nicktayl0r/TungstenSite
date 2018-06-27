import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li>TUNGSTEN</li>
        </ul>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Brands">Brands</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
