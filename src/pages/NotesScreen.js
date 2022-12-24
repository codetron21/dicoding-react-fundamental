import React from "react";

import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
  searchNotes,
} from "../utils/local-data";

import Text from "../components/Text";
import HeaderNote from "../components/HeaderNote";
import Spacer from "../components/Spacer";
import SearchNote from "../components/SearchNote";
import LabelNote from "../components/LabelNote";
import ListNote from "../components/ListNote";
import NotesTypeMenu from "../components/NotesTypeMenu";

const ACTIVE_NOTES = "ACTIVE_NOTES";
const ARCHIVED_NOTES = "ARCHIVED_NOTES";

class NotesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: getAllNotes(),
      notesType: ACTIVE_NOTES,
      query: "",
    };
  }

  onChangeSearchNotes = (e) => {
    e.preventDefault();

    const title = e.target.value;
    const isActiveNotes = this.state.notesType === ACTIVE_NOTES;
    const notes = title
      ? searchNotes(title, !isActiveNotes)
      : isActiveNotes
      ? getActiveNotes()
      : getArchivedNotes();

    this.setState({
      notes,
      query: title,
    });
  };

  onSubmitSearchNotes = (e) => {
    e.preventDefault();

    const title = this.state.query;
    const isActiveNotes = this.state.notesType === ACTIVE_NOTES;
    const notes = title
      ? searchNotes(title, !isActiveNotes)
      : isActiveNotes
      ? getActiveNotes()
      : getArchivedNotes();

    this.setState({
      notes,
    });
  };

  onDeleteNote = (id) => {
    deleteNote(id);
    const isActiveNotes = this.state.notesType === ACTIVE_NOTES;
    this.setState({
      notes: isActiveNotes ? getActiveNotes() : getArchivedNotes(),
    });
  };

  onArchiveNote = (id) => {
    archiveNote(id);
    const isActiveNotes = this.state.notesType === ACTIVE_NOTES;
    this.setState({
      notes: isActiveNotes ? getActiveNotes() : getArchivedNotes(),
    });
  };

  onUnArchiveNote = (id) => {
    unarchiveNote(id);
    const isActiveNotes = this.state.notesType === ACTIVE_NOTES;
    this.setState({
      notes: isActiveNotes ? getActiveNotes() : getArchivedNotes(),
    });
  };

  activeNotesClicked = (e) => {
    e.preventDefault();

    console.log(this.state.notesType);

    this.setState({
      notes: getActiveNotes(),
      notesType: ACTIVE_NOTES,
    });
  };

  archivedNotesClicked = (e) => {
    e.preventDefault();

    console.log(this.state.notesType);

    this.setState({
      notes: getArchivedNotes(),
      notesType: ARCHIVED_NOTES,
    });
  };

  render() {
    const notes = this.state.notes;
    const notesType = this.state.notesType;

    return (
      <>
        <HeaderNote title="Notes" />

        <Spacer v={20} />

        <SearchNote
          value={this.state.query}
          hint="Judul catatan"
          onChange={this.onChangeSearchNotes}
          onSubmit={this.onSubmitSearchNotes}
        />

        <Spacer v={40} />

        <NotesTypeMenu
          isActive={notesType === ACTIVE_NOTES}
          isArchived={notesType === ARCHIVED_NOTES}
          onActive={this.activeNotesClicked}
          onArchive={this.archivedNotesClicked}
        />

        {notesType === ACTIVE_NOTES && (
          <div>
            <LabelNote label="Catatan Aktif" />
            {notes.length ? (
              <ListNote
                items={notes}
                onDelete={this.onDeleteNote}
                onArchive={this.onArchiveNote}
              />
            ) : (
              <Text>Tidak ada catatan</Text>
            )}
          </div>
        )}

        {notesType === ARCHIVED_NOTES && (
          <div>
            <LabelNote label="Catatan Arsip" />
            {notes.length ? (
              <ListNote
                items={notes}
                onDelete={this.onDeleteNote}
                onArchive={this.onUnArchiveNote}
              />
            ) : (
              <Text>Tidak ada catatan</Text>
            )}
          </div>
        )}
      </>
    );
  }
}

export default NotesScreen;
