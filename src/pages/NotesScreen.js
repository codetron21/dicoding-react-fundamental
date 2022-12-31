import React, { useState } from "react";

import {
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
  searchNotes,
} from "../utils/local-data";

import Spacer from "../components/Spacer";
import SearchNote from "../components/SearchNote";
import LabelNote from "../components/LabelNote";
import ListNote from "../components/ListNote";
import NotesTypeCategory from "../components/NotesTypeCategory";

const ACTIVE_NOTES = "ACTIVE_NOTES";
const ARCHIVED_NOTES = "ARCHIVED_NOTES";

const NotesScreen = () => {
  const [notes, setNotes] = useState(() => getActiveNotes());
  const [notesType, setNotesType] = useState(ACTIVE_NOTES);
  const [query, setQuery] = useState("");

  const onChangeSearchNotes = (e) => {
    e.preventDefault();

    const title = e.target.value;
    const isActiveNotes = notesType === ACTIVE_NOTES;
    const notes = title
      ? searchNotes(title, !isActiveNotes)
      : isActiveNotes
      ? getActiveNotes()
      : getArchivedNotes();

    setNotes(notes);
    setQuery(title);
  };

  const onSubmitSearchNotes = (e) => {
    e.preventDefault();

    const title = query;
    const isActiveNotes = notesType === ACTIVE_NOTES;
    const notes = title
      ? searchNotes(title, !isActiveNotes)
      : isActiveNotes
      ? getActiveNotes()
      : getArchivedNotes();

    setNotes(notes);
  };

  const onDeleteNote = (id) => {
    deleteNote(id);
    const isActiveNotes = notesType === ACTIVE_NOTES;
    setNotes(isActiveNotes ? getActiveNotes() : getArchivedNotes());
  };

  const onArchiveNote = (id) => {
    archiveNote(id);
    const isActiveNotes = notesType === ACTIVE_NOTES;
    setNotes(isActiveNotes ? getActiveNotes() : getArchivedNotes());
  };

  const onUnArchiveNote = (id) => {
    unarchiveNote(id);
    const isActiveNotes = notesType === ACTIVE_NOTES;
    setNotes(isActiveNotes ? getActiveNotes() : getArchivedNotes());
  };

  const activeNotesClicked = (e) => {
    e.preventDefault();

    setNotes(getActiveNotes());
    setNotesType(ACTIVE_NOTES);
  };

  const archivedNotesClicked = (e) => {
    e.preventDefault();

    setNotes(getArchivedNotes());
    setNotesType(ARCHIVED_NOTES);
  };

  return (
    <>
      <SearchNote
        value={query}
        hint="Judul catatan"
        onChange={onChangeSearchNotes}
        onSubmit={onSubmitSearchNotes}
      />

      <Spacer v={40} />

      <NotesTypeCategory
        isActive={notesType === ACTIVE_NOTES}
        isArchived={notesType === ARCHIVED_NOTES}
        onActive={activeNotesClicked}
        onArchive={archivedNotesClicked}
      />

      {notesType === ACTIVE_NOTES && (
        <div>
          <LabelNote label="Catatan Aktif" />
          {notes.length ? (
            <ListNote
              items={notes}
              onDelete={onDeleteNote}
              onArchive={onArchiveNote}
            />
          ) : (
            <h4>Tidak ada catatan</h4>
          )}
        </div>
      )}

      {notesType === ARCHIVED_NOTES && (
        <div>
          <LabelNote label="Catatan Arsip" />
          {notes.length ? (
            <ListNote
              items={notes}
              onDelete={onDeleteNote}
              onArchive={onUnArchiveNote}
            />
          ) : (
            <h4>Tidak ada arsip catatan</h4>
          )}
        </div>
      )}
    </>
  );
};

export default NotesScreen;
