import React, { useState } from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ id, title, body, date, archived, onDelete, onArchive }) => {
  const navigate = useNavigate();
  const [isDeleteHover, setIsDeleteHover] = useState(false);
  const [isArchiveHover, setIsArchiveHover] = useState(false);
  const [isDivClickable, setDivClickable] = useState(true);

  return (
    <div
      style={Styles["note-item"]}
      onClickCapture={(e) => {
        if (!isDivClickable) return;
        e.preventDefault();
        navigate(`/detail-note/${id}`);
      }}
    >
      <p style={Styles["note-item__date"]}>
        {showFormattedDate(new Date(date))}
      </p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Spacer v={10} />
      <div style={Styles["note-item__box-button"]}>
        <button
          style={Styles["button-delete"](isDeleteHover)}
          type="button"
          onClickCapture={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
          onMouseEnter={() => {
            setIsDeleteHover(true);
            setDivClickable(false);
          }}
          onMouseLeave={() => {
            setIsDeleteHover(false);
            setDivClickable(true);
          }}
        >
          Hapus
        </button>
        <Spacer h={10} />
        <button
          style={Styles["button-archive"](isArchiveHover)}
          type="button"
          onClickCapture={(e) => {
            e.preventDefault();
            onArchive(id);
          }}
          onMouseEnter={() => {
            setIsArchiveHover(true);
            setDivClickable(false);
          }}
          onMouseLeave={() => {
            setIsArchiveHover(false);
            setDivClickable(true);
          }}
        >
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

const Styles = {
  "note-item": {
    borderRadius: "10px",
    boxShadow: "0px 0px 5px cornflowerblue",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "20px",
  },
  "note-item__date": {
    textAlign: "end",
    fontSize: "12px",
  },
  "note-item__box-button": {
    textAlign: "end",
  },
  "button-delete": (isDeleteHover) => {
    return {
      borderRadius: "10px",
      padding: "8px",
      border: "0px",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "crimson",
      boxShadow: `0px 0px ${isDeleteHover ? "5px" : "0px"}  crimson`,
    };
  },
  "button-archive": (isArchiveHover) => {
    return {
      borderRadius: "10px",
      padding: "8px",
      border: "0px",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "cornflowerblue",
      boxShadow: `0px 0px ${isArchiveHover ? "5px" : "0px"} cornflowerblue`,
    };
  },
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
