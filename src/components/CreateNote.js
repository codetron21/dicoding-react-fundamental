import React from "react";

import LabelNote from "./LabelNote";
import Spacer from "./Spacer";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

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
    const limit = 50;

    if (body.length >= limit) {
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
          onClick={() =>
            this.props.onAddNoteSubmitted(this.state.title, this.state.body)
          }
          disabled={!this.state.buttonEnabled}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default CreateNote;
