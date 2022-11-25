import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>

          <div className="NavRight">
            <Link to="/signin">
              <li>Sign In</li>
            </Link>

            <Link to="/register">
              <li>Register</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
