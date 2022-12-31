import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spacer from "./Spacer";
import TokenContext from "../contexts/TokenContext";

const MainMenu = () => {
  const tokenContext = useContext(TokenContext);

  const onLogout = () => {
    tokenContext.deleteToken();
  };

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
          <Link onClick={() => onLogout()}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
