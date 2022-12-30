import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";
import { addNote } from "../utils/local-data";

const LIMIT_DESCRIPTION_SIZE = 50;

const CreateNoteScreen = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const onTitleChange = (e) => {
    const title = e.target.value;

    setTitle(title);
  };

  const onBodyChange = (e) => {
    const body = e.target.value;
    const limit = LIMIT_DESCRIPTION_SIZE;

    if (body.length > limit) {
      setButtonEnabled(false);
      alert("Deskripsi tidak boleh lebih dari 50 karakter");
      return;
    }

    setBody(body);
    setButtonEnabled(true);
  };

  const onAddNoteSubmitted = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Kolom isian catatan tidak boleh kosong");
      return;
    }

    addNote({ title, body });
    alert("Berhasil menambahkan catatan");
    navigate("/");
  };

  return (
    <div className="note-create">
      <LabelNote label="Tambah Catatan" />
      <Spacer v={20} />
      <input
        className="note__input"
        value={title}
        placeholder="Judul"
        onChange={onTitleChange}
      />
      <Spacer v={10} />
      <p className="note-create__desc-info-limit">{`${body.length}/${LIMIT_DESCRIPTION_SIZE}`}</p>
      <textarea
        className="note__input"
        value={body}
        placeholder="Deskripsi"
        onChange={onBodyChange}
        rows="4"
        cols="50"
        style={{ resize: "none" }}
      />
      <Spacer v={10} />
      <button
        className="button-large"
        type="button"
        onClick={onAddNoteSubmitted}
        disabled={!buttonEnabled}
      >
        Tambah
      </button>
    </div>
  );
};

export default CreateNoteScreen;
