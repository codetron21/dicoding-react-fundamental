import React, { useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { useParams } from "react-router-dom";
import { CircularProgress } from "react-loading-indicators";
import { getNote } from "../utils/network-data";

const DetailNoteScreen = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getActiveNoteById(id);
  }, [id]);

  const getActiveNoteById = async (id) => {
    setLoading(true);
    const data = await getNote(id);
    setNote(data.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <CircularProgress
        style={Styles.loader}
        color="cornflowerblue"
        size="small"
      />
    );
  }

  if (!note) {
    return <h4>Catatan tidak ada</h4>;
  }

  const { title, body, createdAt, archived } = note;

  return (
    <div style={Styles["note-item"]}>
      <p style={Styles["note-item__date"]}>{createdAt}</p>
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
  loader: {
    padding: "10px",
    textAlign: "center",
  },
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
};

export default DetailNoteScreen;
