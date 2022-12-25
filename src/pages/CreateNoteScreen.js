import React from "react";

import LabelNote from "../components/LabelNote";
import Spacer from "../components/Spacer";
import { addNote } from "../utils/local-data";

const LIMIT_DESCRIPTION_SIZE = 50;

class CreateNoteScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: "",
      buttonEnabled: true,
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;

    this.setState({
      title,
    });
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    const limit = LIMIT_DESCRIPTION_SIZE;

    if (body.length > limit) {
      this.setState({
        buttonEnabled: false,
      });
      alert("Deskripsi tidak boleh lebih dari 50 karakter");
      return;
    }

    this.setState({
      body,
      buttonEnabled: true,
    });
  };

  onAddNoteSubmitted = (e) => {
    e.preventDefault();

    const title = this.state.title;
    const body = this.state.body;

    if (!title || !body) {
      alert("Kolom isian catatan tidak boleh kosong");
      return;
    }

    addNote({ title, body });
    alert("Berhasil menambahkan catatan");
  };

  render() {
    return (
      <div className="note-create">
        <LabelNote label="Tambah Catatan" />
        <Spacer v={20} />
        <input
          className="note__input"
          value={this.state.title}
          placeholder="Judul"
          onChange={this.onTitleChange}
        />
        <Spacer v={10} />
        <p className="note-create__desc-info-limit">{`${this.state.body.length}/${LIMIT_DESCRIPTION_SIZE}`}</p>
        <textarea
          className="note__input"
          value={this.state.body}
          placeholder="Deskripsi"
          onChange={this.onBodyChange}
          rows="4"
          cols="50"
          style={{ resize: "none" }}
        />
        <Spacer v={10} />
        <button
          className="button-large"
          type="button"
          onClick={this.onAddNoteSubmitted}
          disabled={!this.state.buttonEnabled}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default CreateNoteScreen;
