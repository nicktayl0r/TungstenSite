import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <ul className="socialMedia">
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
