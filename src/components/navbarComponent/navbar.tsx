import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <ul>
          <Link to="/Home">
            <li>Home</li>
          </Link>

          <div className="NavRight">
            <Link to="/Signin">
              <li>Sign In</li>
            </Link>

            <Link to="/Register">
              <li>Register</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
