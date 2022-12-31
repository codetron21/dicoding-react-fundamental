import React, { useState } from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

const NotesTypeCategory = ({ isActive, isArchived, onActive, onArchive }) => {
  const [isActiveHover, setIsActiveHover] = useState(false);
  const [isArchiveHover, setIsArchiveHover] = useState(false);

  return (
    <div style={Styles["notes-type-menu"]}>
      <button
        style={Styles["button-menu"](isActive, isActiveHover)}
        type="button"
        onClick={onActive}
        onMouseEnter={() => setIsActiveHover(true)}
        onMouseLeave={() => setIsActiveHover(false)}
      >
        Aktif
      </button>
      <Spacer h={10} />
      <button
        style={Styles["button-menu"](isArchived, isArchiveHover)}
        type="button"
        onClick={onArchive}
        onMouseEnter={() => setIsArchiveHover(true)}
        onMouseLeave={() => setIsArchiveHover(false)}
      >
        Arsip
      </button>
    </div>
  );
};

const Styles = {
  "notes-type-menu": {
    textAlign: "end",
  },
  "button-menu": (isActive, isHover) => {
    return {
      backgroundColor: isActive ? "mediumseagreen" : "grey",
      borderRadius: "10px",
      padding: "8px",
      border: "0px",
      fontWeight: "bold",
      color: "white",
      boxShadow: `0px 0px 
      ${isHover ? "5px" : "0px"} 
      ${isActive ? "mediumseagreen" : "grey"}`,
    };
  },
};

NotesTypeCategory.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesTypeCategory;
