import React, { useEffect, useState } from "react";

import Spacer from "../components/Spacer";
import SearchNote from "../components/SearchNote";
import LabelNote from "../components/LabelNote";
import ListNote from "../components/ListNote";
import NotesTypeCategory from "../components/NotesTypeCategory";
import { CircularProgress } from "react-loading-indicators";
import {
  getActiveNotes,
  getArchivedNotes,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/network-data";

const ACTIVE_NOTES = "ACTIVE_NOTES";
const ARCHIVED_NOTES = "ARCHIVED_NOTES";

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notesType, setNotesType] = useState(ACTIVE_NOTES);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (notesType === ACTIVE_NOTES) {
      getNotes();
      return;
    }

    if (notesType === ARCHIVED_NOTES) {
      getNotesArchived();
      return;
    }
  }, [notesType]);

  const getNotes = async () => {
    setLoading(true);
    const { data } = await getActiveNotes();
    setLoading(false);
    setNotes(data);
  };

  const getNotesArchived = async () => {
    setLoading(true);
    const { data } = await getArchivedNotes();
    setLoading(false);
    setArchivedNotes(data);
  };

  const onChangeSearchNotes = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitSearchNotes = (e) => {
    e.preventDefault();
    searchNotes(query);
  };

  const activeNotesClicked = () => {
    setNotesType(ACTIVE_NOTES);
    setQuery("");
  };

  const archivedNotesClicked = () => {
    setNotesType(ARCHIVED_NOTES);
    setQuery("");
  };

  const searchNotes = async (title) => {
    setLoading(true);

    if (notesType === ACTIVE_NOTES) {
      const { data } = await getActiveNotes();
      setLoading(false);
      setNotes(
        data.filter((d) => d.title.toLowerCase().includes(title.toLowerCase()))
      );
      return;
    }

    if (notesType === ARCHIVED_NOTES) {
      const { data } = await getArchivedNotes();
      setLoading(false);
      setArchivedNotes(
        data.filter((d) => d.title.toLowerCase().includes(title.toLowerCase()))
      );
      return;
    }
  };

  const onDeleteNote = async (id) => {
    await deleteNote(id);
    if (notesType === ACTIVE_NOTES) {
      getNotes();
      return;
    }

    if (notesType === ARCHIVED_NOTES) {
      getNotesArchived();
      return;
    }
  };

  const onArchiveNote = async (id) => {
    await archiveNote(id);
    await getNotes();
  };

  const onUnArchiveNote = async (id) => {
    await unarchiveNote(id);
    await getNotesArchived();
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
          {loading && (
            <CircularProgress
              style={Styles.loader}
              size="small"
              color="cornflowerblue"
            />
          )}
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
          {loading && (
            <CircularProgress
              style={Styles.loader}
              size="small"
              color="cornflowerblue"
            />
          )}
          {archivedNotes.length ? (
            <ListNote
              items={archivedNotes}
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

const Styles = {
  loader: {
    padding: "10px",
  },
};

export default NotesScreen;
