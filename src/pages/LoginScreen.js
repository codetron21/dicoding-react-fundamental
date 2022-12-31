import React, { useState } from "react";

import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";

const LoginScreen = () => {
  const buttonEnabled = useState(true);
  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <div style={Styles["form-container"]}>
      <LabelNote label="Login" />
      <Spacer v={20} />
      <input style={Styles["form-input"]} placeholder="Username" />
      <Spacer v={10} />
      <input style={Styles["form-input"]} placeholder="Password" />
      <Spacer v={10} />
      <button
        style={Styles["button-large"](buttonEnabled, isButtonHover)}
        type="button"
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
      >
        Login
      </button>
    </div>
  );
};

const Styles = {
  "form-container": {
    margin: "auto",
    textAlign: "center",
    width: "30%",
  },
  "form-input": {
    width: "100%",
    padding: "8px",
    border: "1px solid cornflowerblue",
    borderRadius: "10px",
  },
  "button-large": (isEnabled, isHover) => {
    return {
      fontWeight: "bold",
      color: "white",
      backgroundColor: isEnabled ? "cornflowerblue" : "grey",
      border: "0px",
      width: "100%",
      padding: "8px",
      borderRadius: "10px",
      boxShadow: `0px 0px 
      ${isEnabled && isHover ? "5px" : "0px"} cornflowerblue`,
    };
  },
};

export default LoginScreen;
