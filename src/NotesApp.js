import React, { useEffect, useState } from "react";
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
import ThemeMenu from "./components/ThemeMenu";
import { ThemeProvider } from "./contexts/ThemeContext";

const NotesApp = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "Light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "Light" ? "Dark" : "Light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const contextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeProvider value={contextValue}>
      <header>
        <ThemeMenu />
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
    </ThemeProvider>
  );
};

export default NotesApp;
