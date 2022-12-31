import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";
import { addNote } from "../utils/network-data";

const LIMIT_DESCRIPTION_SIZE = 50;

const CreateNoteScreen = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [isButtonHover, setIsButtonHover] = useState(false);

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

  const onAddNoteSubmitted = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Kolom isian catatan tidak boleh kosong");
      return;
    }

    const { error } = await addNote({ title, body });
    if (error) {
      alert("Gagal menambahkan data");
      return;
    }

    alert("Berhasil menambahkan data");
    navigate("/");
  };

  return (
    <div style={Styles["form-container"]}>
      <LabelNote label="Tambah Catatan" />
      <Spacer v={20} />
      <input
        style={Styles["form-input"]}
        value={title}
        placeholder="Judul"
        onChange={onTitleChange}
      />
      <Spacer v={10} />
      <p
        style={Styles["note-create__desc-info-limit"]}
      >{`${body.length}/${LIMIT_DESCRIPTION_SIZE}`}</p>
      <textarea
        style={{ ...Styles["form-input"], resize: "none" }}
        value={body}
        placeholder="Deskripsi"
        onChange={onBodyChange}
        rows="4"
        cols="50"
      />
      <Spacer v={10} />
      <button
        style={Styles["button-large"](buttonEnabled, isButtonHover)}
        type="button"
        onClick={onAddNoteSubmitted}
        disabled={!buttonEnabled}
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
      >
        Tambah
      </button>
    </div>
  );
};

const Styles = {
  "form-container": {
    margin: "auto",
    textAlign: "center",
    width: "30%",
  },
  "form-input": {
    width: "100%",
    padding: "8px",
    border: "1px solid cornflowerblue",
    borderRadius: "10px",
  },
  "note-create__desc-info-limit": {
    fontSize: "12px",
    textAlign: "end",
    marginBottom: "4px",
  },
  "button-large": (isEnabled, isHover) => {
    return {
      fontWeight: "bold",
      color: "white",
      backgroundColor: isEnabled ? "cornflowerblue" : "grey",
      border: "0px",
      width: "100%",
      padding: "8px",
      borderRadius: "10px",
      boxShadow: `0px 0px 
      ${isEnabled && isHover ? "5px" : "0px"} cornflowerblue`,
    };
  },
};

export default CreateNoteScreen;
