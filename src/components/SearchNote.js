import React, { useState } from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

const SearchNote = ({ value, hint, onChange, onSubmit }) => {
  const isButtonEnabled = useState(true);
  const [isButtonHover, setButtonHover] = useState(false);

  return (
    <div style={Styles["form-container"]}>
      <input
        style={Styles["form-input"]}
        type="search"
        value={value}
        placeholder={hint}
        onChange={onChange}
      />
      <Spacer v={10} />
      <button
        style={Styles["button-large"](isButtonEnabled, isButtonHover)}
        type="button"
        onClick={onSubmit}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        Cari
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
      boxShadow: `0px 0px ${
        isEnabled && isHover ? "5px" : "0px"
      } cornflowerblue`,
    };
  },
};

SearchNote.propTypes = {
  value: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchNote;
