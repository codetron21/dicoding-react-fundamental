import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

const NotesTypeMenu = ({ isActive, isArchived, onActive, onArchive }) => {
  return (
    <div className="notes-type-menu">
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

NotesTypeMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesTypeMenu;
