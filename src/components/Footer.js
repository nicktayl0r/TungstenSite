import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/Contact">Twitter</Link>
          </li>
          <li>
            <Link to="/Brands">Instagram</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
