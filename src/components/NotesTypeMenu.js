import React from "react";

import Spacer from "./Spacer";

const NotesTypeMenu = ({ isActive, isArchived, onActive, onArchive }) => {
  console.log(isArchived);

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

export default NotesTypeMenu;
