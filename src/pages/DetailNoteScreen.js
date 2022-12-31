import React from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/local-data";
import Spacer from "../components/Spacer";

const DetailNoteScreen = () => {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <h4>Catatan tidak ada</h4>;
  }

  const { title, body, createdAt, archived } = note;

  return (
    <div className="note-item">
      <p className="note-item__date">
        {showFormattedDate(new Date(createdAt))}
      </p>
      <h2>{id}</h2>
      <Spacer v={10} />
      <h3>{title}</h3>
      <p>{body}</p>
      <Spacer v={10} />
      <p>Arsip: {archived ? "Ya" : "Tidak"}</p>
    </div>
  );
};

export default DetailNoteScreen;
