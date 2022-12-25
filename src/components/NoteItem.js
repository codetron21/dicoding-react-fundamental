import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ id, title, body, date, archived, onDelete, onArchive }) => {
  const navigate = useNavigate();

  return (
    <div className="note-item" onClick={() => navigate(`/detail-note/${id}`)}>
      <p className="note-item__date">{showFormattedDate(new Date(date))}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Spacer v={10} />
      <div className="note-item__box-button">
        <button
          className="button-small button-red"
          type="button"
          onClickCapture={() => onDelete(id)}
        >
          Hapus
        </button>
        <Spacer h={10} />
        <button
          className="button-small button-blue"
          type="button"
          onClickCapture={() => onArchive(id)}
        >
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
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
