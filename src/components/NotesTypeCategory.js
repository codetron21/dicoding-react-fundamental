import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

const NotesTypeCategory = ({ isActive, isArchived, onActive, onArchive }) => {
  return (
    <div style={Styles["notes-type-menu"]}>
      <button
        className={isActive ? "button-menu-active" : "button-menu-inactive"}
        type="button"
        onClick={onActive}
      >
        Aktif
      </button>
      <Spacer h={10} />
      <button
        className={isArchived ? "button-menu-active" : "button-menu-inactive"}
        type="button"
        onClick={onArchive}
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
  "button-menu-active":()=>{
    return {
      backgroundColor: "mediumseagreen",
    borderRadius: "10px,
    padding: "8px",
    border:"0px",
    fontWeight: "bold",
    color:"white",
    boxShadow: "0px 0px 5px mediumseagreen"
  }
  }
,"button-menu-inactive":()=>{
    backgroundColor: "grey",
    borderRadius: "10px",
    padding: "8px",
    border:"0px",
    fontWeight: "bold",
    color:"white",
    boxXhadow: "0px 0px 5px mediumseagreen"
  }
};

NotesTypeCategory.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesTypeCategory;
