import React from "react";
import { Link } from "react-router-dom";
import Spacer from "./Spacer";

const AuthMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/*">Login</Link>
        </li>
        <Spacer h={20} />
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthMenu;
