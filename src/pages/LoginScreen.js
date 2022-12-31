import React from "react";

import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";

const LoginScreen = () => {
  <div className="form-container">
    <LabelNote label="Login" />
    <Spacer v={20} />
    <input className="form-input" placeholder="Username" />
    <Spacer v={10} />
    <input className="form-input" placeholder="Password" />
    <Spacer v={10} />
    <button className="button-large" type="button">
      Login
    </button>
  </div>;
};

export default LoginScreen;
