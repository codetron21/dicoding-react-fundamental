import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeMenu = () => {
  const [isHover, setIsHover] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <div style={Styles.container} onClick={themeContext.toggleTheme}>
      <p
        style={Styles.text(isHover)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {themeContext.theme === "Dark" ? "Light" : "Dark"}
      </p>
    </div>
  );
};

const Styles = {
  container: {
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px grey",
    position: "absolute",
    top: "20px",
    left: "40px",
  },
  text: (isHover) => {
    return {
      fontSize: "20px",
      fontWeight: "bold",
      cursor: isHover ? "pointer" : "auto",
    };
  },
};

export default ThemeMenu;
