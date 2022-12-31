import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesScreen from "./pages/NotesScreen";
import DetailNoteScreen from "./pages/DetailNoteScreen";
import HeaderNote from "./components/HeaderNote";
import NotFoundScreen from "./pages/NotFoundScreen";
import CreateNoteScreen from "./pages/CreateNoteScreen";
import Spacer from "./components/Spacer";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import MainMenu from "./components/MainMenu";

const NotesApp = () => {
  return (
    <>
      <header>
        <MainMenu />
        <HeaderNote title="Notes" />
        <Spacer v={20} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotesScreen />} />
          <Route path="/create-note" element={<CreateNoteScreen />} />
          <Route path="/detail-note/:id" element={<DetailNoteScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
