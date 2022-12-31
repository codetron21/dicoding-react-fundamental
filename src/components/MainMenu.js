import React from "react";
import { Link } from "react-router-dom";
import Spacer from "./Spacer";

const MainMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Spacer h={20} />
        <li>
          <Link to="/create-note">Add Notes</Link>
        </li>
        <Spacer h={20} />
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
