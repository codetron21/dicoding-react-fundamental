import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NotesScreen from "./pages/NotesScreen";
import DetailNoteScreen from "./pages/DetailNoteScreen";
import HeaderNote from "./components/HeaderNote";
import NotFoundScreen from "./pages/NotFoundScreen";
import CreateNoteScreen from "./pages/CreateNoteScreen";
import Spacer from "./components/Spacer";

const NotesApp = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <Spacer h={20} />
            <li>
              <Link to="/create-note">Tambah Catatan</Link>
            </li>
          </ul>
        </nav>

        <HeaderNote title="Notes" />
        <Spacer v={20} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotesScreen />} />
          <Route path="/create-note" element={<CreateNoteScreen />} />
          <Route path="/detail-note/:id" element={<DetailNoteScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
