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
    <div style={Styles["note-item"]}>
      <p style={Styles["note-item__date"]}>
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

const Styles = {
  "note-item": {
    backgroundColor: "#FFF",
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
};

export default DetailNoteScreen;
